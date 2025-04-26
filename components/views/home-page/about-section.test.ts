import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AboutSection from "./about-section.vue";
import BaseButtonLink from "~/components/atoms/base-button-link/base-button-link.vue";
import { headline } from "~/config/resume-schema";

// Mock global gtag function
vi.stubGlobal("gtag", vi.fn());

// Mock Icon component for now, as it might require Nuxt context
const IconStub = {
  template: '<span class="icon-stub"></span>',
  props: ["name", "size"],
};

// Mock NuxtLink used internally by BaseButtonLink
const NuxtLinkStub = {
  template:
    '<a :href="to" @click.prevent="$emit(\'click\', $event)"><slot /></a>', // Add .prevent
  props: ["to"],
  emits: ["click"], // Linter might want a comma here
};

describe("AboutSection", () => {
  // Remove extra newline
  it("renders headline and download button", () => {
    const wrapper = mount(AboutSection, {
      global: {
        stubs: {
          Icon: IconStub, // Stub Icon for safety
          NuxtLink: NuxtLinkStub, // Stub NuxtLink needed by BaseButtonLink
          // Not stubbing BaseButtonLink
        },
      },
    });

    // Check for headline text within the correct paragraph
    const headlineParagraph = wrapper.find("p"); // Find the first p tag
    expect(headlineParagraph.exists()).toBe(true);
    expect(headlineParagraph.text()).toBe(headline);

    // Check if BaseButtonLink component is rendered
    const buttonLink = wrapper.findComponent(BaseButtonLink);
    expect(buttonLink.exists()).toBe(true);

    // Check button link text and href (via NuxtLink stub)
    expect(buttonLink.text()).toContain("Download my resume");
    const internalLink = buttonLink.findComponent(NuxtLinkStub);
    expect(internalLink.exists()).toBe(true);
    expect(internalLink.props("to")).toBe("/pdf/resume.pdf");

    // Check if Icon stub is rendered inside the button
    expect(buttonLink.findComponent(IconStub).exists()).toBe(true);
    // Ensure formatting matches eslint suggestion (likely handled by auto-format)
    expect(buttonLink.findComponent(IconStub).props("name")).toBe(
      "fe:document"
    );
  });

  it("calls gtag on download button click", async () => {
    const wrapper = mount(AboutSection, {
      global: {
        stubs: {
          Icon: IconStub,
          NuxtLink: NuxtLinkStub,
        },
      },
    });

    const buttonLink = wrapper.findComponent(BaseButtonLink);
    // Need to trigger click on the internal NuxtLink stub
    const internalLink = buttonLink.findComponent(NuxtLinkStub);
    await internalLink.trigger("click");

    expect(window.gtag).toHaveBeenCalledOnce();
    expect(window.gtag).toHaveBeenCalledWith("event", "button_click", {
      event_category: "user_interaction",
      event_label: "download_resume_button",
    });
  });
});

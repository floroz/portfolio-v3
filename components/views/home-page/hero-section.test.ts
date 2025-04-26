import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HeroSection from "./hero-section.vue";
import BaseButtonLink from "~/components/atoms/base-button-link/base-button-link.vue";

// Mock global gtag function
vi.stubGlobal("gtag", vi.fn());

// Mock Icon component
const IconStub = {
  template: '<span class="icon-stub"></span>',
  props: ["name", "size"],
};

// Mock NuxtLink used internally by BaseButtonLink
const NuxtLinkStub = {
  template:
    '<a :href="to" :target="target" @click="$emit(\'click\', $event)"><slot /></a>',
  props: ["to", "target"],
  emits: ["click"],
};

describe("HeroSection", () => {
  it("renders greeting, title, image, and button", () => {
    const wrapper = mount(HeroSection, {
      global: {
        stubs: {
          Icon: IconStub,
          NuxtLink: NuxtLinkStub, // Stub NuxtLink needed by BaseButtonLink
        },
      },
    });

    // Check for greeting and title text
    expect(wrapper.text()).toContain("Hi, I am Daniele");
    expect(wrapper.text()).toContain("I love solving problems");
    expect(wrapper.text()).toContain("and building software.");

    // Check for profile image
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("/images/profilepic.jpg");
    expect(img.attributes("alt")).toContain("Profile Picture");

    // Check if BaseButtonLink component is rendered
    const buttonLink = wrapper.findComponent(BaseButtonLink);
    expect(buttonLink.exists()).toBe(true);

    // Check button link text, href, and target (via NuxtLink stub)
    expect(buttonLink.text()).toContain("Check my work");
    const internalLink = buttonLink.findComponent(NuxtLinkStub);
    expect(internalLink.exists()).toBe(true);
    expect(internalLink.props("to")).toBe("https://github.com/floroz");
    expect(internalLink.props("target")).toBe("_blank");

    // Check if Icon stub is rendered inside the button
    expect(buttonLink.findComponent(IconStub).exists()).toBe(true);
    expect(buttonLink.findComponent(IconStub).props("name")).toBe(
      "fe:link-external"
    );

    // Check for waving hand animation class
    const wavingHand = wrapper.find("span.animate-wave");
    expect(wavingHand.exists()).toBe(true);
    expect(wavingHand.text()).toBe("👋🏻");

    // Check element order (basic check)
    const greeting = wrapper.find("p"); // Assuming greeting is the first <p>
    const title = wrapper.find("h1");
    expect(img.element.compareDocumentPosition(greeting.element)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    ); // img comes before greeting
    expect(greeting.element.compareDocumentPosition(title.element)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    ); // greeting comes before title
    expect(
      title.element.compareDocumentPosition(buttonLink.element as Node)
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING); // title comes before button
  });

  it("calls gtag on 'Check my work' button click", async () => {
    const wrapper = mount(HeroSection, {
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
      event_label: "check_work_button",
    });
  });
});

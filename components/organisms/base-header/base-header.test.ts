import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BaseHeader from "./base-header.vue";
import SocialLinks from "~/components/molecules/social-links/social-links.vue";

// Mock global gtag function
vi.stubGlobal("gtag", vi.fn());

// Mock NuxtLink and Icon for now, as they might require Nuxt context
// If tests fail without these, we might need a more integrated test setup
const NuxtLinkStub = {
  template:
    '<a :href="to" @click.prevent="$emit(\'click\', $event)"><slot /></a>',
  props: ["to"],
  emits: ["click"],
};

const IconStub = {
  template: '<span class="icon-stub"></span>',
  props: ["name", "size"],
};

describe("BaseHeader", () => {
  // Remove extra newline
  it("renders 'Get in touch' link and SocialLinks", () => {
    const wrapper = mount(BaseHeader, {
      global: {
        stubs: {
          // Stubbing NuxtLink and Icon initially for safety
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
          // Not stubbing SocialLinks
        },
      },
    });

    // Check for "Get in touch" text
    expect(wrapper.text()).toContain("Get in touch");

    // Check if the NuxtLink stub for email exists
    const emailLink = wrapper.findComponent(NuxtLinkStub);
    expect(emailLink.exists()).toBe(true);
    expect(emailLink.props("to")).toBe(
      "mailto:danieletortora.contact@gmail.com"
    );
    // Check the icon inside the email link
    const emailIcon = emailLink.findComponent(IconStub);
    expect(emailIcon.exists()).toBe(true);
    expect(emailIcon.props("name")).toBe("fe:mail");

    // Check if SocialLinks component is rendered (not stubbed) and within a <ul>
    const socialLinksList = wrapper.find("ul"); // Find the ul containing social links
    expect(socialLinksList.exists()).toBe(true);
    const socialLinks = socialLinksList.findComponent(SocialLinks);
    expect(socialLinks.exists()).toBe(true);
    // Check if the animate prop is passed correctly
    expect(socialLinks.props("animate")).toBe(true);
  });

  it("calls gtag on 'Get in touch' click", async () => {
    const wrapper = mount(BaseHeader, {
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
        },
      },
    });

    const emailLink = wrapper.findComponent(NuxtLinkStub);
    await emailLink.trigger("click");

    expect(window.gtag).toHaveBeenCalledOnce();
    expect(window.gtag).toHaveBeenCalledWith("event", "button_click", {
      event_category: "user_interaction",
      event_label: "get_in_touch_button",
    });
  });
});

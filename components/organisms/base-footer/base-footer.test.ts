import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseFooter from "./base-footer.vue";
import SocialLinks from "~/components/molecules/social-links/social-links.vue"; // Import actual component

// Mock NuxtLink component (keep this stubbed)
const NuxtLinkStub = {
  template: '<a :href="to"><slot /></a>',
  props: ["to"],
};

// Mock Icon component (needed by SocialLinks)
const IconStub = {
  template: '<span class="icon-stub"></span>',
  props: ["name", "size"],
};

describe("BaseFooter", () => {
  it("renders copyright text, designer link, and SocialLinks", () => {
    const wrapper = mount(BaseFooter, {
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub, // Keep NuxtLink stubbed
          Icon: IconStub, // Add Icon stub
        },
      },
    });

    // Check for copyright text
    expect(wrapper.text()).toContain("© 2023 All rights reserved.");

    // Check if SocialLinks component is rendered and receives correct prop
    const socialLinksComponent = wrapper.findComponent(SocialLinks);
    expect(socialLinksComponent.exists()).toBe(true);
    expect(socialLinksComponent.props("animate")).toBe(false);

    // Check if NuxtLink stub (for designer link) is rendered with correct props and text
    const designerLink = wrapper.findComponent(NuxtLinkStub);
    expect(designerLink.exists()).toBe(true);
    expect(designerLink.props("to")).toBe("https://dribbble.com/Kawsarvy");
    expect(designerLink.text()).toBe("Kawsar Ahmed"); // Check rendered text
  });
});

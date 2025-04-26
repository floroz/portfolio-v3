import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { SOCIAL_LINKS } from "../../../constants/social-links";
import SocialLinks from "./social-links.vue";

// Mock NuxtLink component
const NuxtLinkStub = {
  template: '<a :href="to" :aria-label="ariaLabel"><slot /></a>',
  props: ["to", "ariaLabel"],
};

// Mock Icon component
const IconStub = {
  template: '<span class="icon-stub"></span>',
  props: ["name", "size"],
};

describe("SocialLinks", () => {
  it("renders the correct number of links with correct text and href", () => {
    const wrapper = mount(SocialLinks, {
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
        },
      },
    });

    const links = wrapper.findAll("li");
    // Check if the correct number of list items are rendered
    expect(links).toHaveLength(SOCIAL_LINKS.length);

    // Check each link's text and href
    for (const [index, linkWrapper] of links.entries()) {
      const expectedLink = SOCIAL_LINKS[index];
      const anchor = linkWrapper.find("a");

      // Check href
      expect(anchor.attributes("href")).toBe(expectedLink.href);
      // Check aria-label (which uses the text)
      expect(anchor.attributes("aria-label")).toBe(expectedLink.text);
      // Check rendered text (hidden on small screens, but should be in the DOM)
      const textSpan = linkWrapper.find("span.hidden.sm\\:inline");
      expect(textSpan.exists()).toBe(true);
      expect(textSpan.text()).toBe(expectedLink.text);
    }
  });

  it("applies fade-in class when animate prop is true", () => {
    const wrapper = mount(SocialLinks, {
      props: { animate: true },
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
        },
      },
    });

    const anchors = wrapper.findAllComponents(NuxtLinkStub);
    expect(anchors.length).toBeGreaterThan(0); // Ensure links are found
    for (const anchor of anchors) {
      expect(anchor.classes()).toContain("fade-in");
      expect(anchor.classes()).not.toContain("translate-y-0");
      expect(anchor.classes()).not.toContain("opacity-100");
    }
  });

  it("applies immediate visibility classes when animate prop is false", () => {
    const wrapper = mount(SocialLinks, {
      props: { animate: false }, // Explicitly false
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
        },
      },
    });

    const anchors = wrapper.findAllComponents(NuxtLinkStub);
    expect(anchors.length).toBeGreaterThan(0); // Ensure links are found
    for (const anchor of anchors) {
      expect(anchor.classes()).not.toContain("fade-in");
      expect(anchor.classes()).toContain("translate-y-0");
      expect(anchor.classes()).toContain("opacity-100");
    }
  });

  it("applies immediate visibility classes when animate prop is omitted", () => {
    // Test default behavior (animate should be falsy)
    const wrapper = mount(SocialLinks, {
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          Icon: IconStub,
        },
      },
    });

    const anchors = wrapper.findAllComponents(NuxtLinkStub); // Ensure no leading space here
    expect(anchors.length).toBeGreaterThan(0); // Ensure links are found
    for (const anchor of anchors) {
      expect(anchor.classes()).not.toContain("fade-in");
      expect(anchor.classes()).toContain("translate-y-0");
      expect(anchor.classes()).toContain("opacity-100");
    }
  });
});

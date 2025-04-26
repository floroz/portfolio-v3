import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButtonLink from "./base-button-link.vue";

const NuxtLinkStub = {
  template: '<a :href="to"><slot /></a>',
  props: ["to"],
};

describe("BaseButtonLink", () => {
  it("renders default slot content and correct href", () => {
    const href = "/test-link";
    const slotContent = "Click Me";

    const wrapper = mount(BaseButtonLink, {
      props: {
        href, // Use property shorthand
      },
      slots: {
        default: slotContent,
      },
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub, // Stub NuxtLink
        },
      },
    });

    // Check if the slot content is rendered
    expect(wrapper.text()).toContain(slotContent);

    // Check if the rendered anchor tag has the correct href
    const link = wrapper.find("a"); // Keep double quotes as per final content
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(href); // Keep double quotes as per final content
  });

  it("renders icon-left slot content when provided", () => {
    const href = "/test-link";
    const leftIconContent = '<span class="left-icon">Left Icon</span>';

    const wrapper = mount(BaseButtonLink, {
      props: { href },
      slots: {
        default: "Default Text",
        "icon-left": leftIconContent,
      },
      global: {
        stubs: { NuxtLink: NuxtLinkStub },
      },
    });

    // Check if the left icon slot content is rendered
    const leftIconSpan = wrapper.find(".left-icon");
    expect(leftIconSpan.exists()).toBe(true);
    expect(leftIconSpan.text()).toBe("Left Icon");
    // Check the wrapper's html to be sure it's inside the correct structure
    expect(wrapper.html()).toContain(
      '<span class="text-primary"><span class="left-icon">Left Icon</span></span>'
    );
  });

  it("renders icon-right slot content when provided", () => {
    const href = "/test-link";
    const rightIconContent = '<span class="right-icon">Right Icon</span>';

    const wrapper = mount(BaseButtonLink, {
      props: { href },
      slots: {
        default: "Default Text",
        "icon-right": rightIconContent,
      },
      global: {
        stubs: { NuxtLink: NuxtLinkStub },
      },
    });

    // Check if the right icon slot content is rendered
    const rightIconSpan = wrapper.find(".right-icon");
    expect(rightIconSpan.exists()).toBe(true);
    expect(rightIconSpan.text()).toBe("Right Icon");
    // Check the wrapper's html to be sure it's inside the correct structure
    expect(wrapper.html()).toContain(
      '<span class="text-primary"><span class="right-icon">Right Icon</span></span>'
    );
  });
});

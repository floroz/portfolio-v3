import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "./base-button.vue";

describe("BaseButton", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.vm).toBeTruthy();
  });
});

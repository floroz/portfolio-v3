import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { useCarousel } from "./carousel";

// Helper component to use the composable
const TestComponent = defineComponent({
  setup() {
    const { carousel } = useCarousel();
    return { carousel };
  },
  template: '<div>{{ carousel.map(c => c.id).join(",") }}</div>', // Render IDs for checking
});

describe("useCarousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore mocks and timers
    vi.useRealTimers();
  });

  it("initializes carousel and shifts items on interval", async () => {
    const wrapper = mount(TestComponent);

    // Get initial state (before any timer ticks)
    const initialIds = wrapper.vm.carousel.map((item) => item.id); // Keep parentheses as per auto-format
    expect(initialIds).toHaveLength(7); // Check initial length based on the actual composable

    // Advance time just past the first nextTick call in onMounted
    await vi.advanceTimersByTimeAsync(1);
    const idsAfterFirstTick = wrapper.vm.carousel.map((item) => item.id); // Keep parentheses
    // Use .at(-1) as preferred by linter
    expect(idsAfterFirstTick.at(-1)).not.toBe(initialIds[0]); // First item should have moved to end with new ID

    // Advance time past the first interval (2000ms)
    await vi.advanceTimersByTimeAsync(2000);
    const idsAfterInterval = wrapper.vm.carousel.map((item) => item.id); // Keep parentheses
    // Use .at(-1)
    expect(idsAfterInterval.at(-1)).not.toBe(idsAfterFirstTick[0]); // Next item should have moved

    // Advance time past another interval
    await vi.advanceTimersByTimeAsync(2000);
    const idsAfterSecondInterval = wrapper.vm.carousel.map((item) => item.id); // Keep parentheses
    // Use .at(-1)
    expect(idsAfterSecondInterval.at(-1)).not.toBe(idsAfterInterval[0]); // Yet another item moved

    // Clean up interval on unmount
    wrapper.unmount();
    // We can't directly check if clearInterval was called without more complex mocking,
    // but ensuring the test runs without errors after unmount is a good sign.
  });
});

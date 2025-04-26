import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { markRaw, reactive } from "vue";
import CompanyCarousel from "./company-carousel.vue";

// --- Mocking useCarousel ---
// Create simple stub components that declare expected props
const StubComp1 = {
  template: '<svg data-testid="stub-comp-1"></svg>',
  props: ["fontControlled", "width"],
};
const StubComp2 = {
  template: '<svg data-testid="stub-comp-2"></svg>',
  props: ["fontControlled", "width"],
};
const StubComp3 = {
  template: '<svg data-testid="stub-comp-3"></svg>',
  props: ["fontControlled", "width"],
};

// Mock the return value of useCarousel
const mockCarouselData = reactive([
  { id: "comp1", component: markRaw(StubComp1) },
  { id: "comp2", component: markRaw(StubComp2) },
  { id: "comp3", component: markRaw(StubComp3) },
]);

vi.mock("~/utils/carousel", () => ({
  useCarousel: () => ({
    carousel: mockCarouselData,
  }),
}));
// --- End Mocking ---

describe("CompanyCarousel", () => {
  it("renders the correct number of items based on mocked carousel data", () => {
    const wrapper = mount(CompanyCarousel);

    // Find all list items
    const listItems = wrapper.findAll("li");
    expect(listItems).toHaveLength(mockCarouselData.length);

    // Check if the stub components are rendered
    expect(wrapper.find('[data-testid="stub-comp-1"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="stub-comp-2"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="stub-comp-3"]').exists()).toBe(true);

    // Check props passed to the dynamic component (example for the first one)
    const firstDynamicComp = wrapper.findComponent(StubComp1);
    expect(firstDynamicComp.exists()).toBe(true);
    expect(firstDynamicComp.props("fontControlled")).toBe(false);
    expect(firstDynamicComp.props("width")).toBe(176);
  });

  // Note: Testing the TransitionGroup animations themselves is complex
  // and often considered outside the scope of standard unit testing.
});

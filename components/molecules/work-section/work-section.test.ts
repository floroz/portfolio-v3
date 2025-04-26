import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import type { WorkEntry } from "../../../types/resume";
import WorkSection from "./work-section.vue";

// Mock data for the WorkEntry prop
const mockEntry: WorkEntry = {
  companyName: "Test Company",
  title: "Test Title",
  isContract: false,
  startDate: "Jan 2023",
  endDate: "Present",
  location: "Test Location",
  description: ["Description point 1", "Description point 2"],
};

// Mock data for contract entry
const mockContractEntry: WorkEntry = {
  ...mockEntry,
  isContract: true,
};

describe("WorkSection", () => {
  it("renders all entry details correctly when not a contract", () => {
    const wrapper = mount(WorkSection, {
      props: {
        entry: mockEntry, // Use the non-contract mock
      },
    });

    // Check company name (already tested, but good to keep)
    expect(wrapper.text()).toContain(mockEntry.companyName);
    // Check title
    expect(wrapper.text()).toContain(mockEntry.title);
    // Check dates
    expect(wrapper.text()).toContain(
      `${mockEntry.startDate} - ${mockEntry.endDate}`
    );
    // Check location
    expect(wrapper.text()).toContain(mockEntry.location);
    // Check description points
    const listItems = wrapper.findAll("li");
    expect(listItems).toHaveLength(mockEntry.description.length);
    // Use for...of loop as preferred by linter
    for (const [index, li] of listItems.entries()) {
      // v-html renders the content directly, so check html()
      expect(li.html()).toContain(mockEntry.description[index]);
    }
    // Check that "(Contract)" is NOT present
    expect(wrapper.text()).not.toContain("(Contract)");
  });

  it("renders '(Contract)' text when isContract is true", () => {
    const wrapper = mount(WorkSection, {
      props: {
        entry: mockContractEntry, // Use the contract mock
      },
    });

    // Check that title includes "(Contract)"
    expect(wrapper.text()).toContain(`${mockContractEntry.title} (Contract)`);
  });
});

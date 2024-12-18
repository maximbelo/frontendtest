import { describe, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ChessBoard from "@/components/ChessBoard.vue";

describe("ChessBoard.vue tests", () => {
  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("matches snapshot", () => {
    const wrapper = mount(ChessBoard, { shallow: true });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders the correct number of squares", () => {
    const wrapper = mount(ChessBoard, { shallow: true });
    const squares = wrapper.findAll(".square");
    expect(squares).toHaveLength(64);
  });

  test("highlights the selected square on click", async () => {
    const wrapper = mount(ChessBoard, { shallow: true });
    const firstSquare = wrapper.find(".square");

    await firstSquare.trigger("click");

    expect(firstSquare.classes()).toContain("highlighted");
  });
});

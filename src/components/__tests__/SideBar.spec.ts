import { describe, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SideBar from "@/components/SideBar.vue";
import { useChessboardStore } from "@/stores/chessboardStore";

describe("SideBar.vue tests", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("displays the selected square", () => {
    const store = useChessboardStore();
    store.selectedSquare = { file: "a", rank: "1" };

    const wrapper = mount(SideBar, { shallow: true });

    const selectedSquare = wrapper.find(".sidebar p");
    expect(selectedSquare.text()).toContain("a1");
  });

  test("displays the selected history", () => {
    const store = useChessboardStore();
    store.history = [
      { file: "a", rank: "1" },
      { file: "b", rank: "2" },
      { file: "c", rank: "3" },
    ];

    const wrapper = mount(SideBar, { shallow: true });

    const historyItems = wrapper.findAll(".sidebar li");
    expect(historyItems).toHaveLength(3);

    expect(historyItems[0].text()).toContain("1. a1");
    expect(historyItems[1].text()).toContain("2. b2");
    expect(historyItems[2].text()).toContain("3. c3");
  });

  test("matches the snapshot", () => {
    const store = useChessboardStore();
    store.selectedSquare = { file: "a", rank: "1" };
    store.history = [
      { file: "a", rank: "1" },
      { file: "b", rank: "2" },
      { file: "c", rank: "3" },
    ];

    const wrapper = mount(SideBar, { shallow: true });

    expect(wrapper.html()).toMatchSnapshot();
  });
});

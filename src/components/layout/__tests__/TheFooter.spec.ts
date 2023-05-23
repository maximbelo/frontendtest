import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import TheFooter from "@/components/layout/TheFooter.vue";

describe("TheFooter.vue tests", () => {
  test("matches the snapshot", () => {
    const wrapper = mount(TheFooter, { shallow: true });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

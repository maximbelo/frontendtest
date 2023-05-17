import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TheFooter from "@/components/layout/TheFooter.vue";

describe("TheFooter.vue tests", () => {
  test("matches the snapshot", () => {
    const wrapper = shallowMount(TheFooter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

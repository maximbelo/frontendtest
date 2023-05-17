import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/layout/TheHeader.vue";

describe("TheHeader.vue tests", () => {
  test("matches the snapshot", () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

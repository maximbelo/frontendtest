import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import TheHeader from "@/components/layout/TheHeader.vue";

describe("TheHeader.vue tests", () => {
  test("matches the snapshot", () => {
    const wrapper = mount(TheHeader, { shallow: true });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import HelloWorld from "../src/components/HelloWorld.vue"

test("mount component", async () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, {
    props: {
      name: "vitest",
    },
  })

  expect(wrapper.text()).toBe("Hello: vitestSluggified: vitest")
})

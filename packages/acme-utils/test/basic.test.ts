import { toSlug } from "../src"

describe("toSlug", () => {
  it("basic", () => {
    expect(toSlug("Hello My Name Is Cédric")).toEqual("hello-my-name-is-cdric")
  })
})

import { toSlug } from "../src"

describe("toSlug", () => {
  it("basic", () => {
    expect(toSlug("Hello My Name Is Cédric")).toEqual("hello-my-name-is-cdric")
  })

  it("string is null", () => {
    expect(toSlug(null)).toEqual("")
  })

  it("string is empty", () => {
    expect(toSlug("")).toEqual("")
  })
})

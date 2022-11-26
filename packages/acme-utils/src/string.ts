/**
 * Return a slugified copy of a string.
 *
 * @param {string | null} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(str: string | null): string {
  if (str == null)
    return ""

  let s = str

  s = s.toLowerCase().trim()
  s = s.replace(/ & /g, " and ")
  s = s.replaceAll(" ", "-")
  s = s.replaceAll("-", "-")
  s = s.replace(/[^a-z0-9-]+/g, "")

  return s
}

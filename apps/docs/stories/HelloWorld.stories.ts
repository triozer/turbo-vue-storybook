import { HelloWorld } from "@acme/ui/src/components"

export default {
  title: "Hello World",
  component: HelloWorld,
  args: {
    name: "@triozer",
  },
}

// 👇 We create a “template” of how args map to rendering
const Template = args => ({
  components: { HelloWorld },
  setup() {
    return { args }
  },
  template: "<hello-world v-bind=\"args\" />",
})

// 👇 Each story then reuses that template
export const Primary = Template.bind({})

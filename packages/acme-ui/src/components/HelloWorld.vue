<script setup lang="ts">
import { ref } from "vue"
import { toSlug } from "@acme/utils"

defineProps<{ name: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <h1>Hello: {{ name }}</h1>
    <h3>Sluggified: {{ toSlug(name) }}</h3>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<template>
  <section class="container overflow-x-scroll">
    <h2
      v-if="ShowTitle"
      class="text-xl mb-2 text-gray-700"
    >
      {{ Title }}
    </h2>
    <pre
      v-if="Content"
      class="rounded-lg overflow-hidden text-left"
    ><code v-highlight :class="Language">{{ Content }}</code></pre>
  </section>
</template>

<script>
export default {
  props: {
    ID: Number,
    Title: String,
    Slug: String,
    ShowTitle: Number,
    Content: String,
    Language: String,
    Pos: Number
  },

  computed: {

  }
}
</script>

<style lang="scss" scoped>
.hljs {
  @apply px-8 py-6;
}
</style>
<template>
  <section class="container">
    <h2
      class="text-xl mb-2 text-gray-700"
      v-if="ShowTitle"
    >
      {{ Title }}
    </h2>
    <pre
      class="rounded-lg overflow-hidden text-left"
      v-if="Content"
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
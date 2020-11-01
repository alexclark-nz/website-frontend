<template>
  <section class="container flex flex-col lg:flex-row">
    <h2
      class="text-4xl font-bold tracking-tight w-64 mt-2"
      v-if="ShowTitle"
    >{{ Title }}</h2>
    <div
      v-html="Content"
      class="ml-8
    max-w-4xl
    mt-4
    space-y-4"
    ></div>
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
  },
};
</script>

<style lang="scss" scoped>
</style>

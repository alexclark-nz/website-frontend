<template>
  <section class="container">
    <h1
      v-if="IsPageTitle"
      class="text-4xl font-bold tracking-tight"
    >{{ Title }}</h1>
    <h2 v-else-if="ShowTitle">{{ Title }}</h2>
    <div
      v-html="Content"
      class="ml-8 max-w-4xl mt-4 space-y-4"
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
    IsPageTitle: Number,
    Content: String,
    Link: Object,
    File: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>

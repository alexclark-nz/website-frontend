<template>
  <section class="container">
    <div
      v-if="ShowTitle"
      class="flex flex-col lg:flex-row lg:-mx-4 items-start"
    >
      <div class="w-full lg:w-2/5 lg:px-4 flex flex-wrap">
        <SectionLink
          :Pos="Pos"
          :Slug="Slug"
        />
        <h2 class="text-4xl font-bold tracking-tight mt-2 leading-tight">{{ Title }}</h2>
        <hr class="w-full mt-4">
      </div>
      <div
        class="
    max-w-4xl
    mt-4
    space-y-4
    w-full
    lg:w-3/5
    lg:px-4"
        v-html="Content"
      />
    </div>
    <div
      v-else
      class="space-y-4"
      v-html="Content"
    />
  </section>
</template>

<script>
import SectionLink from '../SectionLink';

export default {
  props: {
    ID: Number,
    Title: String,
    Slug: String,
    ShowTitle: Number,
    Content: String,
    Pos: Number
  },

  components: {
    SectionLink
  }
};
</script>

<style lang="scss" scoped>
hr {
  border-color: var(--border-color);
}
</style>

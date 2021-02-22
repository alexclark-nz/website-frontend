<template>
  <section class="container">
    <div
      v-if="ShowTitle"
      class="flex flex-col items-start"
    >
      <div class="flex flex-wrap">
        <SectionLink
          :Pos="Pos"
          :Slug="Slug"
        />
        <h2 class="text-3xl font-bold tracking-tight mt-2 leading-tight">{{ Title }}</h2>
      </div>
      <div
        class="
        ml-8
        mt-4
        space-y-4
        w-full
        "
        v-html="Content"
      />
    </div>
    <div
      v-else
      class="space-y-4 ml-8"
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

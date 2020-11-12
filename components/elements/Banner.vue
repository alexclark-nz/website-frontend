<template>
  <section class="container banner">
    <div class="flex">
      <SectionLink
        :Pos="Pos"
        :Slug="Slug"
      />
      <h1
        v-if="IsPageTitle"
        class="text-4xl font-bold tracking-tight"
      >
        {{ Title }}
      </h1>
      <h2
        v-else-if="ShowTitle"
        class="text-4xl font-bold tracking-tight"
      >
        {{ Title }}
      </h2>
    </div>
    <div
      class="ml-8 max-w-4xl space-y-4 mt-4 content"
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
    ShowTitle: String,
    IsPageTitle: String,
    Content: String,
    Link: Object,
    File: Object,
    Pos: Number
  },

  components: {
    SectionLink
  }
};
</script>

<style lang="scss">
.banner {
  a:not(.section-number) {
    @apply font-bold transition-all duration-300;
    &:hover {
      @apply text-teal-500;
    }
  }
}
</style>

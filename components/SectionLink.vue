<template>
  <a
    class="section-number"
    :href="link"
  >#</a>
</template>

<script>
export default {
  props: {
    Pos: Number,
    Slug: String
  },

  computed: {
    link() {
      return `${this.$route.path}#${this.Slug}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.section-number {
  @apply mr-2 transition-all duration-300 ease-in-out font-normal;
  &:hover {
    @apply text-teal-500;
  }
}
</style>
<template>
  <div class="grid gap-12">
    <element
      :is="element.Component"
      v-for="(element, index) in elements"
      :id="element.Slug"
      :key="element.Slug"
      v-bind="element"
      :pos="index + 1"
    />
  </div>
</template>

<script>
import Banner from './elements/Banner.vue';
import Content from './elements/Content.vue';
import Code from './elements/Code.vue';
import RecentPosts from './elements/RecentPosts';

export default {
  components: {
    Banner,
    Code,
    Content,
    RecentPosts
  },

  props: {
    elements: {
      type: Array,
      default: null,
    },
  },

  mounted() {
    // console.log(this.elements)
  }

};
</script>

<style lang="scss" scoped></style>

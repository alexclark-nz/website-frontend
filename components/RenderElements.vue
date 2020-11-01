<template>
  <div class="grid gap-10">
    <element
      v-for="element in elements"
      :key="element.Slug"
      :is="element.Component"
      v-bind="element"
      :id="element.Slug"
    ></element>
  </div>
</template>

<script>
import Banner from './elements/Banner.vue';
import Content from './elements/Content.vue';
import Code from './elements/Code.vue';

export default {
  components: {
    Banner,
    Code,
    Content,
  },

  props: {
    elements: {
      type: Array,
      default: null,
    },
  },

  mounted() {
    console.log(this.elements)
  }

};
</script>

<style lang="scss" scoped></style>

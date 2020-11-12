<template>
  <article v-if="showSummary">
    <h3 class="font-bold text-2xl">
      <router-link :to="postLink">
        {{ post.Title }}
      </router-link>
    </h3>
    <p>{{ postDate }}</p>
    <div
      class="mt-4"
      v-html="post.Summary"
    />
    <hr class="w-full mt-6">
  </article>
  <article v-else>
    <h3 class="font-bold text-lg">
      <router-link :to="postLink">
        {{ post.Title }}
      </router-link>
      <hr class="w-full mt-5">
    </h3>
  </article>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: {
    post: Object,
    showSummary: String
  },

  computed: {
    postLink() {
      const { URLSegment } = this.post;
      return `/blog/${URLSegment}`;
    },

    postDate() {
      return format(new Date(this.post.PublishDate), 'MMMM do Y');
    }
  },
  mounted() {
    // console.log(this.post)
  }
}
</script>

<style lang="scss" scoped>
hr {
  border-color: var(--border-color);
}
a {
  @apply transition-all duration-300 ease-in-out;
  &:hover {
    @apply text-teal-500;
  }
}
</style>
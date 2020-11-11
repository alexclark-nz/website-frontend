<template>
  <div class="container">
    <div
      v-if="ShowTitle"
      class="flex mb-4"
    >
      <SectionLink
        :Pos="Pos"
        :Slug="Slug"
      />
      <h2 class="title">{{ Title }}</h2>
    </div>
    <div
      v-if="Content"
      class="ml-8 max-w-4xl space-y-4 mb-10 content"
      v-html="Content"
    />
    <div
      v-if="ShowSummary"
      class="ml-8 flex flex-col space-y-12"
    >
      <PostPreview
        v-for="post in Posts"
        :key="`post-${post.ID}`"
        :post="post"
        :showSummary="ShowSummary"
      />
    </div>
    <div
      v-else
      class="ml-8 grid md:grid-cols-3 gap-10 items-end"
    >
      <PostPreview
        v-for="post in Posts"
        :key="`post-${post.ID}`"
        :post="post"
        :showSummary="ShowSummary"
      />
    </div>
  </div>
</template>

<script>
import SectionLink from '../SectionLink';
import PostPreview from '../PostPreview';

export default {
  props: {
    ID: Number,
    Title: String,
    Slug: String,
    ShowTitle: Number,
    Content: String,
    Posts: Array,
    Pos: Number,
    ShowSummary: Number,
  },

  components: {
    SectionLink,
    PostPreview,
  },

  mounted() {
    console.log(this.Posts);
  },

  methods: {
    postLink(post) {
      const { URLSegment } = post;
      return `/blog/${URLSegment}`;
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  @apply text-4xl font-bold;
}
</style>
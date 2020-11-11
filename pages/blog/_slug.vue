<template>
  <main>
    <RenderElements :elements="pageData.Elements" />
    <BlogFooter :date="postDate" />
  </main>
</template>

<script>
import { format } from 'date-fns';

import RenderElements from '@/components/RenderElements.vue';
import BlogFooter from '@/components/BlogFooter.vue';

export default {
  components: {
    RenderElements,
    BlogFooter
  },

  asyncData({ params, $axios }) {
    const { slug } = params;

    return $axios
      .get(`${process.env.API_URL}/blog/${slug}`)
      .then((res) => {
        return {
          pageData: res.data,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },

  head() {
    return {
      title: this.pageData.Title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageData.MetaDescription,
        },
      ],
    };
  },

  computed: {
    postDate() {
      return format(new Date(this.pageData.PublishDate), 'MMMM do Y');
    }
  },

  mounted() {
    console.log(this.pageData)
  },
};
</script>

<style lang="scss" scoped></style>

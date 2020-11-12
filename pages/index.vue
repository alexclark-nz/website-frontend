<template>
  <main>
    <RenderElements :elements="pageData.Elements" />
  </main>
</template>

<script>
import RenderElements from '@/components/RenderElements.vue';

export default {
  components: {
    RenderElements,
  },

  asyncData({ $axios }) {
    return $axios
      .get(`${process.env.API_URL}/page/home`)
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
};
</script>

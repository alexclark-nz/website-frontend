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
      .get('http://alexclark-api.test/api/v1/Page/1.json')
      .then((res) => {
        return {
          pageData: res.data,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },

  mounted() {
    // console.log(this.pageData);
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

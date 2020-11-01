<template>
  <div>
    <h1>{{ this.$route.params.slug }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.params.slug,
    };
  },
};
</script>

<style lang="scss" scoped></style>

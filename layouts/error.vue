<template>
  <div>
    <h1>{{ statusCode + message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message;
    },
  },

  head() {
    return {
      title: this.message,
    };
  },
};
</script>

<style lang="scss" scoped></style>

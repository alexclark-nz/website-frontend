<template>
  <div class="container mt-16">
    <p class="mb-4 font-bold">
      Published {{ date }}
    </p>
    <nav>
      <router-link to="/blog">
        Return to Blog
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    date: String
  }

}
</script>

<style lang="scss" scoped>
</style>

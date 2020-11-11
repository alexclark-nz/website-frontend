<template>
  <footer class="container mt-auto py-8 text-sm">
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <span class="mb-4 lg:mb-0">
        &copy; Alex Clark {{ date }}
      </span>
      <span>Built with <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener"
        >Nuxt JS</a>, <a
          href="https://www.silverstripe.org/"
          target="_blank"
          rel="noopener"
        >Silverstripe CMS</a> and <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener"
        >Tailwind CSS</a>, Hosted on <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener"
        >Netlify</a>.</span>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    date() {
      const today = new Date();
      return today.getFullYear();
    }
  }

}
</script>

<style lang="scss" scoped>
a {
  @apply font-bold transition-all duration-300;
  &:hover {
    @apply text-teal-500;
  }
}
</style>

<template>
  <header class="container py-8">
    <nav class="flex justify-end">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/blog">
        Blog
      </nuxt-link>
      <button @click="contact">
        Contact
      </button>
      <label
        class="theme-switch"
        for="checkbox"
        title="Toggle Dark Mode"
      >
        <input
          id="checkbox"
          type="checkbox"
          :checked="isChecked"
          aria-roledescription="Toggle Dark Mode"
          @change="toggleDarkMode"
        >
        <div class="slider" />
      </label>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isChecked() {
      return this.$store.state.darkMode;
    }
  },

  methods: {
    toggleDarkMode(e) {
      const { checked } = e.target;
      this.$store.dispatch('toggleDarkMode', checked);
    },

    contact() {
      this.$store.dispatch('toggleContactModal');
    }
  }
};
</script>

<style lang="scss" scoped>
nav a,
nav button {
  @apply transition-all duration-300;
  &:hover {
    @apply text-teal-500;
  }
  &:not(:last-child) {
    @apply mr-8;
  }
}

.nuxt-link-exact-active {
  @apply font-bold;
}

.theme-switch {
  display: inline-block;
  height: 25px;
  position: relative;
  width: 40px;
  input {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    &:checked + .slider {
      background-color: #fff;
      &:before {
        transform: translateX(15px);
        background-color: #000;
      }
    }
  }
}

.slider {
  background-color: #000;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 17px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 17px;
    border-radius: 50%;
  }
}
</style>

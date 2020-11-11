<template>
  <div :class="wrapperClasses">
    <Header />
    <Nuxt />
    <Footer />
    <Modal
      title="Send me a message"
      :is-modal-active="isModalActive"
      @close-modal="setModalActive(false)"
    >
      <ContactForm @cancel="setModalActive(false)" />
    </Modal>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal';
import ContactForm from '@/components/ContactForm';

export default {
  components: {
    Header,
    Footer,
    Modal,
    ContactForm
  },

  data() {
    return {

    }
  },

  computed: {
    wrapperClasses() {
      if (this.$store.state.darkMode) {
        return 'wrapper dark';
      } else {
        return 'wrapper';
      }
    },

    isModalActive() {
      return this.$store.state.isContactModalActive
    }
  },

  mounted() {
    if (window && window !== 'undefined') {
      this.checkLocalStorage()
    }
  },

  methods: {
    checkLocalStorage() {
      const darkModeValue = localStorage.getItem('darkMode');
      if (!darkModeValue) { return; }
      let darkMode;
      if (darkModeValue === 'true') {
        darkMode = true;
      } else {
        darkMode = false;
      }

      this.$store.dispatch('toggleDarkMode', darkMode);
    },

    setModalActive(bool) {
      this.$store.dispatch('toggleContactModal', bool)
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Regular.woff2'), url('~assets/fonts/Inter-Regular.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Italic.woff2'), url('~assets/fonts/Inter-Italic.woff');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Bold.woff2'), url('~assets/fonts/Inter-Bold.woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-BoldItalic.woff2'), url('~assets/fonts/Inter-BoldItalic.woff');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-Black.woff2'), url('~assets/fonts/Inter-Black.woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~assets/fonts/Inter-BlackItalic.woff2'), url('~assets/fonts/Inter-BlackItalic.woff');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  --text-color: #000;
  --background-color: #edf2f7;
  --border-color: #000;
}

.wrapper {
  @apply min-h-screen;
  @apply flex;
  @apply flex-col;
  color: var(--text-color);
  background: var(--background-color);
  transition: all 0.3s ease-in-out;
  &.dark {
    --text-color: #fff;
    --background-color: #1a202c;
    --border-color: #fff;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

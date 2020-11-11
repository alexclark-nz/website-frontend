<template>
  <transition name="fade">
    <div
      v-show="isModalActive"
      class="fixed top-0 left-0 w-full h-full z-110 grid place-items-center overflow-y-scroll bg-black bg-opacity-75 md:p-12"
      @closeModal="closeModal"
      @click="checkIfOutside"
    >
      <div class="modal-inner p-8 relative h-full w-full overflow-y-scroll md:rounded-md md:h-auto md:w-auto max-h-100 max-w-full">
        <div class="modal__header">
          <h2 class="text-xl font-bold mb-6">
            {{ title }}
          </h2>
        </div>
        <slot />
        <slot name="actions" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    isModalActive: Boolean,
  },

  mounted() {
    window.addEventListener('keydown', this.checkIfEscape);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.checkIfEscape);
  },

  methods: {
    closeModal() {
      this.$emit('close-modal');
    },

    checkIfOutside(e) {
      if (e.target === e.currentTarget) {
        this.$emit('close-modal');
      }
    },

    checkIfEscape(e) {
      if (e.key === 'Escape') {
        this.$emit('close-modal');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-inner {
  background: var(--background-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

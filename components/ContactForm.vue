<template>
  <form
    v-if="status === 'idle'"
    @submit.prevent="handleSubmit"
  >
    <div class="field">
      <label for="name">Your name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="First Last"
        required
      >
    </div>
    <div class="field">
      <label for="email">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="name@example.com"
        required
      >
    </div>
    <div class="field">
      <label for="message">Your message</label>
      <textarea
        id="message"
        name="message"
        rows="3"
        required
      />
    </div>
    <button
      class="button bg-gray-800 mr-4"
      type="button"
      @click="cancel"
    >
      Cancel
    </button>
    <button
      type="submit"
      class="button bg-teal-500"
    >
      Send Message
    </button>
  </form>
  <div v-else-if="status === 'sending'">
    Sending message..
  </div>
  <div v-else>
    Your message has been sent. Thank you!
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      status: 'idle',
    }
  },
  methods: {
    async handleSubmit(e) {
      this.status = 'sending';
      const formData = new FormData(e.target);

      const res = await axios.post(`${process.env.API_URL}/contact`, formData);

      if (res.status === 200) {
        this.status = 'sent';
        setTimeout(() => {
          this.$store.dispatch('toggleContactModal');
        }, 2000)
      }
    },

    cancel() {
      this.$emit('cancel');
    }
  },
}
</script>

<style lang="scss" scoped>
label {
  @apply block text-sm font-bold mb-2;
}

input,
textarea {
  @apply shadow rounded appearance-none w-full py-2 px-3 text-black;
  &:focus {
    @apply outline-none shadow-outline;
  }
}

.field {
  @apply mb-6;
}

.button {
  @apply rounded px-6 py-2 transition-all duration-300 font-bold text-white;
  &:hover {
    @apply opacity-75;
  }
}
</style>
<template>
  <div>
    <button @click="increment">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('numbers', [
      'increment',
      'increase'
    ])
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
  }
}
</script>
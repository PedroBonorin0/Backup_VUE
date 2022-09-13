<template>
  <div>
    <h3>{{ finalCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('numbers', [
      'finalCounter'
    ])
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
  }
}
</script>
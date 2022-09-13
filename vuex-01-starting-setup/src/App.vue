<template>
  <base-container title="Vuex" v-if="userLogged">
    <TheCounter />
    <FavoriteValue />
    <button @click="addTen">Add 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addTen() {
      this.$store.dispatch('numbers/increase', { value: 10 });
    }
  },
  computed: {
    ...mapGetters(['userLogged'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
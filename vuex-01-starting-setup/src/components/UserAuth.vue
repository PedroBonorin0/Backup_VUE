<template>
  <div>
    <button
      v-if="!userLogged"
      @click.stop="login"
    >
      Login
    </button>
    <button
      v-else
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['userLogged'])
  }

}
</script>
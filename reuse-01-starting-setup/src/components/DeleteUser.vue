<template>
  <UserAlert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </UserAlert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import AlertMixin from '../mixins/alert.js';

export default {
  mixins: [AlertMixin],
  components: { UserAlert },
  data() {
    return{
      alertTitle: 'Delete User?'
    }
  }
};
</script>
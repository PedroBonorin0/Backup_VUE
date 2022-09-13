<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" :age="age"/>
    <button @click="age++">CLICK ME</button>
  </section>
  <div>
    <input type="text" placeholder="First Name" v-model="firstName">
    <input type="text" placeholder="Last Name" ref="lastNameInput">
    <button @click="setLastName">Set Name</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('Pedro');
    const lastName = ref('');
    const age = ref(22);

    const lastNameInput = ref(null);

    const userName = computed(() => {
      return firstName.value + lastName.value;  
    })
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return { age, firstName, lastName, userName, lastNameInput, setLastName };
  }
}
</script>
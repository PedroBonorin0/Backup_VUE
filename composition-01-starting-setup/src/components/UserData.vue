<template>
  <h2>{{ username}} </h2>
  <h3>{{ age }} </h3>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const username = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    // context.emit('save-data');

    return { username }
  }
}
</script>
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadXps">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results.length">
        <survey-result
          v-for="result in results"
          :key="result.name + ' ' + result.rating"
          :name="result.name"
          :rating="result.rating"
        />
      </ul>
      <p v-else-if="error">Error retrieving data!</p>
      <p v-else>No stored reviews found!</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    }
  },
  
  mounted() {
    this.loadXps();
  },

  methods: {
    async loadXps() {
      this.isLoading = true;
      this.error = null;
      this.results = [];

      await axios.get('https://vue-course-http-82d72-default-rtdb.firebaseio.com/surveys.json')
        .then(res => {
          this.results = [];

          const data = Object.values(res.data);
          for(const review of data) {
            this.results.push(review);
          }

        })
        .catch(err => {
          this.error = err;
        });

        this.isLoading = null;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
<template>
  <div id="results">
    <ul>
      <li v-for="post in posts" :key="post._id">
        <div class="infos">
          <iframe :src="'https://www.instagram.com/p/' + post.shortCode + '/embed'" width="300" height="580" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          <p>Posté le {{ post.created | moment }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      posts: null,
      errors: null,
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios.get('http://localhost:5500')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data.slice(0, 20);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  filters: {
    moment(date) {
      return moment.unix(date).format('DD/MM/YYYY à H:mm:ss');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

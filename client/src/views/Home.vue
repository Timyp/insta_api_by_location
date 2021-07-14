<template>
  <div class="home">
    <header>
      <img alt="Vue logo" src="../assets/img/logo.png">
      <h1>Dernieres photos <br> prise à l'opéra Garnier - Paris</h1>
    </header>
    <AppBody msg="Welcome here"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBody from '@/components/AppBody.vue';

export default {
  name: 'Home',
  components: {
    AppBody,
  },
};
</script>
<style lang="scss" scoped>
 @import '../assets/sass/app.scss';
</style>

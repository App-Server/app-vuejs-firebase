<!-- Home.vue -->
<template>
  <div class="container">
    <div class="home">
      <h1>Aqui é o Painel</h1>
      <router-link to="/">login</router-link>
      <br>
      <router-link to="/users_create">User Create</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Painel",
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserCreate',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      const auth = getAuth(app);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("User registered:", userCredential.user);
        // Aqui você pode salvar o nome de usuário (username) no Firestore ou em outro lugar, se necessário
      } catch (error) {
        console.error("Error registering user:", error.message);
      }
    }
  }
};
</script>

<style>
/* Adicione seus estilos aqui */
</style>

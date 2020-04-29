<template>
  <v-app-bar flat dense class="transparent">
    <v-tabs class="max">
      <v-tab to="/">Inicio</v-tab>
      <v-tab>Voluntariados</v-tab>
      <v-tab v-if="existsToken">Favoritos</v-tab>
    </v-tabs>

    <router-link to="/">
      <h2 class="brand">Meraki</h2>
    </router-link>

    <v-spacer></v-spacer>
    <!-- NO TOKEN -->
    <div v-if="!existsToken">
      <v-btn text to="/login" small class="mr-2">Iniciar sesión</v-btn>
      <v-btn to="/signup" rounded outlined small color="#298B7F">Regístrate</v-btn>
    </div>
    <!-- YES TOKEN -->
    <div v-else>
      <v-btn text small class="mr-2">Crear</v-btn>
      <v-avatar color="red" size="30">
        <span class="white--text">CJ</span>
      </v-avatar>
      <!-- {{name}} -->
      Eduardo
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    existsToken() {
      return localStorage.getItem("token");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");


    }
  }
};
</script>
 <style lang="scss" scoped>
* {
  text-decoration-line: none;
  .brand {
    color: #298b7f;
    font-family: 'Quicksand', sans-serif;
  }
}
.max {
  width: auto !important;
}
.transparent {
  background-color: !important;
}
</style>

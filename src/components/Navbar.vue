<template>
  <div>
    <v-app-bar fixed elevate-on-scroll class="transparent">
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-tabs class="max d-none d-md-block d-print-block">
          <v-tab to="/">Inicio</v-tab>
          <v-tab to="/events">Voluntariados</v-tab>
          <v-tab to="/me/favorites" v-if="existsToken">Favoritos</v-tab>
        </v-tabs>

      <router-link to="/">
        <h1 class="brand">Meraki</h1>
      </router-link>
        <v-spacer></v-spacer>
      <div class="d-none d-md-block d-print-block">
        <!-- NO TOKEN -->
        <div v-if="!existsToken">
          <v-btn text to="/login" rounded small class="mr-2">Iniciar sesión</v-btn>
          <v-btn to="/signup" rounded outlined small color="#298B7F">Regístrate</v-btn>
        </div>
        <!-- YES TOKEN -->
        <div v-else>
          <v-btn text small class="mr-2">Crear</v-btn>
          <v-avatar color="red" size="30">
            <span class="white--text">CJ</span>
          </v-avatar>
          <v-btn text to="/profile" rounded small class="mr-2">{{name}}</v-btn>
          <v-btn icon @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item v-if="existsToken">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="">
          <v-list-item>
            <v-btn block rounded text to="/">Inicio</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn block rounded text to="/events">Voluntariados</v-btn>
          </v-list-item>
          <v-list-item v-if="existsToken">
            <v-btn block rounded text to="/me/favorites">Favoritos</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div v-if="!existsToken">
        <div class="pa-2">
          <v-btn block outlined rounded color="#298B7F" to="/signup">Regístrate</v-btn>
        </div>
        <div class="pa-2">
          <v-btn block text rounded to="/login">Iniciar sesión</v-btn>
        </div>
      </div>
      <div v-else>
        <div class="pa-2">
          <v-btn block outlined rounded color="red" @click="logout">Cerrar sesión</v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      name: localStorage.getItem('name'),
      drawer: false,
      group: null
    }
  },
  computed: {
    existsToken () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
 <style lang="scss" scoped>
* {
  text-decoration-line: none;
  .brand {
    color: #298b7f;
    font-family: "Quicksand", sans-serif;
    font-size: 40px !important;
  }
}
.max {
  width: auto !important;
}
.transparent {
  background-color:  !important;

}
.v-navigation-drawer {
  width: 70% !important;
}

.v-tab--active {
  color:#298b7f !important;
}
</style>

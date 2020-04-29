<template>
  <v-app-bar  flat dense class="transparent">
    <v-tabs class="max">
      <v-tab>Inicio</v-tab>
      <v-tab to="/">Voluntariados</v-tab>
      <!-- <v-tab>Favoritos</v-tab> -->
    </v-tabs>


    <router-link to="/"><h2 class="brand">Meraki</h2></router-link>

    <v-spacer></v-spacer>
    <v-btn text to="/login" small class="mr-2">Iniciar sesión</v-btn>
    <v-btn to="/signup" rounded outlined small color="#298B7F">Regístrate</v-btn>
    <v-btn  to="/" icon><v-icon>mdi-logout</v-icon></v-btn>

  </v-app-bar>
</template>
 <style lang="scss" scoped>
 *{
   text-decoration-line: none;
   .brand {
     color: #298B7F;
   }
 }
.max {
  width: auto !important;
}
.transparent {
  background-color:  !important;
}
</style>

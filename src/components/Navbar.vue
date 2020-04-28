<template>
  <v-app-bar flat dense class="transparent">
    <v-tabs class="max" small>
      <v-tab>Inicio</v-tab>
      <v-tab>Voluntariados</v-tab>
      <!-- <v-tab>Favoritos</v-tab> -->
    </v-tabs>


    <v-toolbar-title>Meraki</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text to="/login" small>Iniciar sesión</v-btn>
    <v-btn to="/signup" rounded outlined small color="#298B7F">Regístrate</v-btn>
  </v-app-bar>
</template>
 <style lang="scss" scoped>
.max {
  width: auto !important;
}
.transparent {
  background-color:  !important;
}
</style>

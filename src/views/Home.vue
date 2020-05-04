<template>
  <div>
    <v-container>
      <v-row>

          <v-card color='#7FCBAF' class="rounded"  >
        <v-row>

<v-col cols= '6'>
  <v-card-title class="mt-12 ml-12 pt-12">
   <h2>
     Viaja. Explora. Ayuda.
     </h2>

  </v-card-title>
  <v-card-subtitle class="mt-4 ml-12 fcolor">
    <h2 >
   Meraki es hacer algo con amor y creatividad, poniendo toda tu alma en ello.<br>
<br>
Aquí encontrarás la posibilidad de dar y recibir  ayuda de forma sencilla al mismo tiempo que  descubres todos los rincones del planeta.
    </h2>

  </v-card-subtitle>
</v-col>
<v-col cols='6' >
  <span>
  <v-img src='../assets/merakihome.png'></v-img>
  </span>
</v-col>
        </v-row>

          </v-card>

      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'

}
</script>
<style lang="scss" scoped>
* {
  font-family: 'Quicksand', sans-serif;

}
.fcolor h2 {
  color : white ;
}
.rounded {
  border:solid 10px;
  border-radius: 50px !important;
}
</style>

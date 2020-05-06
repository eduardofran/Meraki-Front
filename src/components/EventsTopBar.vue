<template>
      <v-row class="mt-5 mb-4" id="resultados-info">
      <v-col>
        <span v-if="events.length == 0">
          <v-row>
            <v-col cols="12" sm="8"> <h1>Ehh...Parece que estás un poco perdido</h1> </v-col>
            <v-col cols="12" sm="4" class="text-right"> <h2>{{events.length}} Resultados</h2></v-col>
          </v-row>
        </span>

        <span v-else>
          <v-row>
            <v-col cols="12" sm="8">
              <h1 v-if="isFiltered"> Estás en {{countries}} </h1>
              <h1 v-else> Estás en todas partes. </h1>
            </v-col>
            <v-col cols="12" sm="4" class="text-right mt-2">
              <h2>{{events.length}} Resultados</h2>
            </v-col>
          </v-row>
        </span>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'eventsTopBar',
  props: {
    events: Array,
    isFiltered: Boolean
  },
  computed: {
    countries () {
      return [...new Set(this.events.map(event => event.country))].join(' y ')
    }
  }

}
</script>

<style>

</style>

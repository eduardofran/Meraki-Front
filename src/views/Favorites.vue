<template>
<v-container class="container">
 <v-row class="mt-10 mb-4" id="searchInfo">
            <v-col>
              <h1>
               Nunca es tarde si la aventura es buena.
              </h1>
              <h2>Aquí están las experiencias que más te gustan</h2>
            </v-col>
          </v-row>
                 <v-row class="mt-3 justify-space-between">
          <v-col cols="9">
            <v-text-field v-model="search" rounded solo label="Buscar por país o ciudad" outlined prepend-inner-icon="mdi-magnify" @keyup.enter="getFilteredEventsByPlace" dense flat :maxlength="max" color="#298B7F" ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select v-model="selected" label="Ordenar por:" dense solo rounded outlined flat color="#298B7F" :items="titleItems" ></v-select>
          </v-col>
        </v-row>
    <v-divider></v-divider>
  <v-container class="wrap">
    <FavEvent v-for="(favEvent,idx) in eventsSorted" :key="idx" :favInfo="favEvent" class="mt-5"  @updateFavs="updateFavs"></FavEvent>
  </v-container>
</v-container>
</template>

<script>
import APIServices from '../services/Api'
import FavEvent from '../components/FavEvent.vue'

export default {
  data () {
    return {
      search: '',
      max: 20,
      selected: '',
      items: [
        { title: 'Recientes', function: 'newFirst', idx: 1 },
        { title: 'Antiguos', function: 'oldFirst', idx: 2 },
        { title: 'Valorados', function: 'rating', idx: 3 }
      ],
      favorites: []
    }
  },
  computed: {
    titleItems () {
      return this.items.map(e => e.title)
    },
    eventsSorted () {
      const e = this.favorites
      if (this.selected === 'Antiguos') {
        e.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt)
        })
        return e
      }
      if (this.selected === 'Recientes') {
        e.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return e
      }
      return e
    }
  },
  methods: {
    async updateFavs () {
      this.favorites = await APIServices.getFavorites()
    }
  },
  async created () {
    this.favorites = await APIServices.getFavorites()
  },
  components: {
    FavEvent
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  display: flex;
  flex-wrap: wrap;
}
.container {
  max-width: 1250px;
}
.search {
  max-width: 800px;
}

</style>

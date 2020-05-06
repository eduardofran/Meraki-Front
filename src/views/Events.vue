<template>
  <v-container>
    <v-row class="mt-5 mb-4" id="searchInfo">
      <v-col>
        <span v-if="Events == ''">
          <v-row>
            <v-col cols="12" sm="8">
              <h1>Ehh...Parece que estás un poco perdido</h1>
            </v-col>
            <v-col cols="12" sm="4" class="text-right">
              <h2>{{Events.length}} Resultados</h2>
            </v-col>
          </v-row>
        </span>
        <span v-else>
          <v-row>
            <v-col cols="12" sm="8">
              <h1>
                Estás en
                <span v-if="isFiltered">{{countriesEvent}}</span>
                <span v-else>
                  todas partes.
                  <!-- <v-img class="absolute" src="https://media.giphy.com/media/UvDcnQCKu0Mwanoygf/giphy.gif" max-width="200px"></v-img> -->
                </span>
              </h1>
            </v-col>
            <v-col cols="12" sm="4" class="text-right mt-2">
              <h2>{{Events.length}} Resultados</h2>
            </v-col>
          </v-row>
        </span>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row id="filtros">
      <v-col xl="4">
        <FilterTable @filtered=" getFilteredEvents" />
      </v-col>
      <v-col xl="8">
        <v-row>
          <v-col>
            <v-text-field class="search mt-5" v-model="search" rounded solo label="Buscar por país o ciudad" outlined prepend-inner-icon="mdi-magnify" @keyup.enter="getFilteredEventsByPlace" dense flat :maxlength="max" color="#298B7F" ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select class="mt-5" lin v-model="selected" label="Ordenar por:" dense solo rounded outlined flat color="#298B7F" :items="titleItems" ></v-select>
          </v-col>
        </v-row>

        <div v-if="Events">
          <Event v-for="event in eventsSorted" :key="event._id" :eventsInfo="event" :favList="favEvents" @updateFavs="getFavEvents" />
        </div>
        <div class="noRes" v-else>
          <h2>No se encontraron resultados</h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'
import Event from '../components/Event.vue'
import FilterTable from '../components/FilterTable.vue'

export default {
  data () {
    return {
      Events: [],
      favEvents: [],
      search: '',
      selected: '',
      max: 20,
      isFiltered: false,
      items: [
        { title: 'Recientes', function: 'newFirst', idx: 1 },
        { title: 'Antiguos', function: 'oldFirst', idx: 2 },
        { title: 'Valorados', function: 'rating', idx: 3 }
      ],
      offset: true
    }
  },
  computed: {
    titleItems () {
      return this.items.map(e => e.title)
    },
    eventsSorted () {
      const e = this.Events
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
    },
    greatSearch () {
      let correctSearch = ''
      correctSearch += this.search.slice(0, 1).toUpperCase()
      correctSearch += this.search.slice(1).toLowerCase()
      return correctSearch
    },
    countriesEvent () {
      const countries = []
      const arrCountries = this.Events.map(e => e.country).forEach(element => {
        if (!countries.includes(element)) countries.push(element)
      })

      let srtCountries = ''
      countries.forEach((country, idx) => {
        if (idx === countries.length - 1) {
          srtCountries += ` y ${country}`
        } else {
          srtCountries += `, ${country}`
        }
      })

      return srtCountries.slice(2)
    }
  },
  methods: {
    getFilteredEventsByPlace () {
      this.$router.replace({ name: 'events', query: { ...this.$route.query, p: this.search } })
    },
    getFilteredEvents (skills, offers, dispo) {
      this.$router.replace({ name: 'events', query: { ...this.$route.query, s: skills } })
    },
    // getFilteredEventsByTable (skills, offers, dispo) {
    //   console.log(skills)
    //   var skillsQuery = skills.toString().replace(/ /g, '%20').replace(/,/g, '&')
    //   var offersQuery = offers.toString().replace(/ /g, '%20').replace(/,/g, '&')
    //   var dispoQuery = dispo.toString().replace(/ /g, '%20').replace(/,/g, '&')

    //   if (this.$router.app._route.params.place === undefined) {
    //     APIServices
    //       .getAllEvents(this.search, skillsQuery, offersQuery, dispoQuery)
    //       .then(events => {
    //         this.Events = events
    //         console.log(this.$router.app._route.params.place)
    //       })
    //       .catch(err => console.log(err))
    //   } else {
    //     APIServices.getAllEvents(this.$router.app._route.params.place, skillsQuery, offersQuery, dispoQuery)
    //       .then(events => {
    //         this.Events = events
    //         console.log(this.$router.app._route.params.place)
    //       })
    //       .catch(err => console.log(err))
    //   }
    // },
    async getEvents () {
      this.search = this.$route.query.p
      console.log(this.$route.query)
      this.Events = await APIServices.getAllEvents(this.$route.query)

      if (!this.$route.query.p) {
        this.isFiltered = false
      } else {
        this.isFiltered = true
      }
    },
    async getFavEvents () {
      this.favEvents = await APIServices.getFavorites()
    }
  },
  watch: { // call again the method if the route changes
    $route: 'getEvents'
  },
  created () {
    this.getEvents()
    this.getFavEvents()
  },
  components: {
    Event,
    FilterTable
  }
}
</script>

<style lang="scss" scoped>
.search {
  max-width: 600px;
}
#sort {
  border: 1px solid black;
  padding: 10px 20px;
}
.noRes {
  width: 800px;
  min-width: 300px;
  text-align: center;
  margin-top: 100px;
  font-family: "QuickSand", sans-serif;
}
// .absolute{
//   position: absolute;
//   right: 0;
//   top:0;
// }
.container {
  max-width: 1250px;
}
</style>

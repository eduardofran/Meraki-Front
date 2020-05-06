<template>
  <v-container>
    <EventsTopBar :events="eventsSorted" :isFiltered="isFiltered" />
    <v-divider></v-divider>

    <v-row>
      <v-col xl="4" id="filtros">
        <v-expansion-panels class="mt-8" multiple accordion v-model="filterPanels">
          <v-row no-gutters class="header">
            <v-col>
              <h3>Filtrar por:</h3>
            </v-col>
            <span v-if="isFilterOpen">
              <v-btn icon @click="closeFilters">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </span>
            <span v-else>
              <v-btn icon @click="openFilters">
                <v-icon>mdi-arrow-down-drop-circle</v-icon>
              </v-btn>
            </span>
          </v-row>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ isFilterOpen }">
                <v-row no-gutters>
                  <v-col cols="4">
                    <h3>Habilidades</h3>
                  </v-col>
                  <v-col cols="8" class="text--secondary"></v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-list-item-group multiple flat dense>
                <v-list-item
                  v-for="(skill,idx) in skills"
                  :key="idx"
                  @click="getFilteredEventsBySkill"
                  v-model="skill.model"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-list-item-icon>
                        <v-icon>{{skill.icon}}</v-icon>
                      </v-list-item-icon>
                      {{skill.name}}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-switch color="#298b7f" v-model="skill.model"></v-switch>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <FilterTable @filtered="getFilteredEventsByTable" /> -->
      </v-col>

      <v-col xl="8" id="resultados">
        <v-row>
          <v-col id="search-location">
            <v-text-field
              class="search mt-5"
              v-model="searchPlace"
              rounded
              solo
              label="Buscar por país o ciudad"
              outlined
              prepend-inner-icon="mdi-magnify"
              @keyup.enter="getFilteredEventsByPlace"
              dense
              flat
              :maxlength="max"
              color="#298B7F"
            ></v-text-field>
          </v-col>

          <v-col cols="3" id="sort-by">
            <v-select
              class="mt-5"
              lin
              v-model="selectOrder"
              label="Ordenar por:"
              dense
              solo
              rounded
              outlined
              flat
              color="#298B7F"
              :items="sortCriteria"
            ></v-select>
          </v-col>
        </v-row>

        <div class="noRes" v-show="Events == ''">
          <h2>No se encontraron resultados</h2>
        </div>

        <Event v-for="event in eventsSorted" :key="event._id" :eventsInfo="event" :favList="favEvents" @updateFavs="getFavEvents" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'
import Event from '../components/Event.vue'
// import FilterTable from '../components/FilterTable.vue'
import EventsTopBar from '../components/EventsTopBar.vue'

export default {
  data () {
    return {
      Events: [],
      searchPlace: this.$route.query.p || '',
      selectOrder: '',
      favEvents: [],
      max: 20,
      sortCriteria: ['Recientes', 'Antiguos', 'Valorados'],
      offset: true,
      queryAPI: {},
      filterPanels: [0, 1, 2, 3],
      skills: [],
      isFilterOpen: true,
      isFiltered: false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    titleItems () {
      return this.items.map(e => e.title)
    },
    eventsSorted () {
      var sortedEvents = this.Events.slice(0)
      if (this.selectOrder === 'Antiguos') {
        return sortedEvents.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      }
      if (this.selectOrder === 'Recientes') {
        return sortedEvents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      }
      return sortedEvents
    }
  },
  methods: {
    async getEvents () {
      this.Events = await APIServices.getAllEvents(this.$route.query)
      if (!this.$route.query.p) {
        this.isFiltered = false
      } else {
        this.isFiltered = true
      }
    },
    async getFavEvents () {
      this.favEvents = await APIServices.getFavorites()
    },
    async getSkills () {
      if (this.$route.query.s) {
        var activeSkills = this.$route.query.s.split(',')
      }
      this.skills = await APIServices.getSkills()
      this.skills = this.skills.map(skill => ({
        model: activeSkills.includes(skill._id),
        ...skill
      }))
    },
    getFilteredEventsByPlace () {
      if (this.searchPlace) {
        this.queryAPI.p = this.searchPlace
      } else {
        delete this.queryAPI.p
      }
      this.reload()
    },
    getFilteredEventsBySkill () {
      const skillsOn = this.skills.filter(s => s.model === true)
      if (skillsOn.length !== 0) {
        this.queryAPI.s = skillsOn.map(s => s._id).join(',')
      } else {
        delete this.queryAPI.s
      }
      this.reload()
    },
    reload () {
      if (Object.keys(this.queryAPI).length === 0) {
        this.$router.replace({ path: '/events' }).catch(err => { console.error(err) })
      } else {
        this.$router.replace({ path: '/events', query: this.queryAPI }).catch(err => { console.error(err) })
      }
    },
    closeFilters () {
      this.filterPanels = []
      this.isFilterOpen = false
    },
    openFilters () {
      this.filterPanels = [0, 1, 2, 3]
      this.isFilterOpen = true
    }
  },
  watch: { // call again the method if the route changes
    $route: 'getEvents'
  },
  created () {
    this.getSkills()
    this.getEvents()
    this.getFavEvents()
  },
  components: {
    Event,
    // FilterTable,
    EventsTopBar
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
.container {
  max-width: 1250px;
}
.header {
  background-color: #298b7f;
  color: white;
  font-family: "QuickSand", sans-serif;
  text-align: center;
  padding: 7px;
}
.monthChip {
  width: 100%;
  p {
    margin: auto;
    text-align: center;
  }
}
</style>

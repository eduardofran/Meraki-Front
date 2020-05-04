<template>
  <div>
    <!-- {{yearS}} -->
    <!-- {{skills.mod}} -->
    <!-- {{host.mod}} -->
    <v-expansion-panels class="mt-8" multiple accordion v-model="panel">
      <v-row no-gutters class="header">
        <v-col cols>
          <h3>Filtrar por:</h3>
        </v-col>
        <span v-if="isOpen">
          <v-btn icon @click="none">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </span>
        <span v-else>
          <v-btn icon @click="all">
            <v-icon>mdi-arrow-down-drop-circle</v-icon>
          </v-btn>
        </span>
      </v-row>
      <!-------------- HOST ------------->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row no-gutters>
            <v-col cols="4">
              <h3>Alojamiento</h3>
            </v-col>
            <v-col cols="8" class="text--secondary"></v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
                   <v-list-item-group multiple>
            <v-list-item
              v-for="(host,idx) in host"
              :key="idx"
              v-model="host.mod"
              @click="filtered"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{host.icon}}</v-icon>
                  </v-list-item-icon>
                  {{host.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="host.mod" color="#298b7f"></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!------------- SKILLS ------------>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
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
              @click="filtered"
              v-model="skill.mod"
            >
              <v-list-item-content>
                <!-- {{skill.mod}} -->
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{skill.icon}}</v-icon>
                  </v-list-item-icon>
                  <!-- {{ skill.mod}} -->
                  {{skill.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch color="#298b7f" v-model="skill.mod"></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-------------- DISPO ------------>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <v-row no-gutters>
              <v-col cols="4">
                <h3>Disponibilidad</h3>
              </v-col>
              <v-col cols="8" class="text--secondary"></v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
          <v-chip-group multiple column>
            <v-col v-for="(month,idx) in year" :key="idx" cols="4" sm="3" lg="4" class="px-1 py-1">
              <v-chip
                 v-model="month.mod"
                active-class="teal--text"
                class="monthChip"
                @click="filtered"
              >
                <p>{{month.title}}</p>
              </v-chip>
            </v-col>
          </v-chip-group>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-------------- FOOD ------------->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <v-row no-gutters>
              <v-col cols="4">
                <h3>Comida</h3>
              </v-col>
              <v-col cols="8" class="text--secondary"></v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item-group multiple>
            <v-list-item
              v-for="(meal,idx) in meals"
              :key="idx"
              v-model="meal.mod"
              @click="filtered"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{meal.icon}}</v-icon>
                  </v-list-item-icon>
                  {{meal.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="meal.mod" color="#298b7f"></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    panel: [0, 1, 2, 3],
    isOpen: true,
    host: [
      {
        title: 'Habitación individual',
        mod: 'Habitación_individual',
        icon: 'mdi-account'
      },
      {
        title: 'Habitación compartida',
        mod: 'Habitación_compartida',
        icon: 'mdi-account-multiple'
      },
      {
        title: 'Habitación de equipo',
        mod: 'Habitación_de_equipo',
        icon: 'mdi-account-multiple-plus'
      },
      { title: 'Camping', mod: 'Camping', icon: 'mdi-image-filter-hdr' }
    ],
    skills: [
      {
        title: 'Mantenimiento',
        mod: false,
        icon: 'mdi-wrench-outline'
      },
      {
        title: 'Diseño Gráfico',
        mod: false,
        icon: 'mdi-brush'
      },
      { title: 'Fotografía', mod: false, icon: 'mdi-camera' },
      {
        title: 'Enseñanza escolar',
        mod: false,
        icon: 'mdi-book-open-page-variant'
      },
      {
        title: 'Entretenimiento deportivo',
        mod: false,
        icon: 'mdi-soccer'
      },
      {
        title: 'Tareas domésticas',
        mod: false,
        icon: 'mdi-sofa'
      },
      {
        title: 'Enseñar idiomas',
        mod: false,
        icon: 'mdi-google-translate'
      },
      {
        title: 'Informática',
        mod: false,
        icon: 'mdi-gesture-tap-button'
      },
      {
        title: 'Pintura y decoración',
        mod: false,
        icon: 'mdi-format-paint'
      },
      {
        title: 'Grabación de video',
        mod: false,
        icon: 'mdi-video-outline'
      },
      {
        title: 'Cuidado infantil',
        mod: false,
        icon: 'mdi-baby-face-outline'
      },
      {
        title: 'Cuidado de animales',
        mod: false,
        icon: 'mdi-dog-side'
      },
      {
        title: 'Entretenimiento musical',
        mod: false,
        icon: 'mdi-music-note-outline'
      },
      { title: 'Jardinería', mod: false, icon: 'mdi-flower-outline' },
      { title: 'Bartender', mod: false, icon: 'mdi-glass-cocktail' }
    ],
    meals: [
      {
        title: 'Desayuno',
        mod: 'Desayuno',
        icon: 'mdi-coffee-outline'
      },
      {
        title: 'Almuerzo',
        mod: 'Almuerzo',
        icon: 'mdi-silverware'
      },
      {
        title: 'Cena',
        mod: 'Cena',
        icon: 'mdi-silverware-fork-knife'
      },
      { title: 'Todo incluido', mod: 'Todo_incluido', icon: 'mdi-infinity' }
    ],
    year: [
      { title: 'Enero', mod: false },
      { title: 'Febrero', mod: false },
      { title: 'Marzo', mod: false },
      { title: 'Abril', mod: false },
      { title: 'Mayo', mod: false },
      { title: 'Junio', mod: false },
      { title: 'Julio', mod: false },
      { title: 'Agosto', mod: false },
      { title: 'Septiembre', mod: false },
      { title: 'Octubre', mod: false },
      { title: 'Noviembre', mod: false },
      { title: 'Diciembre', mod: false }
    ]
  }),
  computed: {
    yearS () {
      var dispoQuery = this.year
      var foo = dispoQuery.map(element => {
        return element.mod
      })
      return foo
    }
  },
  methods: {
    filtered () {
      // --------- SKILLS ----------->
      var skillsQuery = this.skills
        .filter(e => {
          return e.mod === true
        })
        .map(e => {
          return `s=${e.title}`
        })
      // --------- OFFERS ----------->
      var offersQuery = [...this.host, ...this.meals]
        .filter(e => {
          return e.mod === true
        })
        .map(e => {
          return `o=${e.title}`
        })
      // --------- DISPO ----------->
      var dispoQuery = this.year
        .filter(e => {
          return e.mod === true
        })
        .map(e => {
          return `d=${e.title}`
        })
      // ----------- SEND ------------>
      this.$emit('filtered', skillsQuery, offersQuery, dispoQuery)
    },
    none () {
      this.panel = []
      this.isOpen = false
    },
    all () {
      this.panel = [0, 1, 2, 3]
      this.isOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
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

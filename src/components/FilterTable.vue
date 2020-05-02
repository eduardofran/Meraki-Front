<template>
  <div>
    <v-expansion-panels class="mt-8" multiple accordion focusable v-model="panel">
      <v-row no-gutters class="header">
        <v-col cols>
          <h3>Filtrar por:</h3>
        </v-col>
        <span v-if="isOpen">
        <v-btn icon @click="none"><v-icon>mdi-close</v-icon></v-btn>
        </span>
        <span v-else>
        <v-btn icon @click="all"><v-icon>mdi-arrow-down-drop-circle</v-icon></v-btn>
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
            <v-list-item v-for="(skill,idx) in host" :key="idx" v-model="skill.mod">
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{skill.icon}}</v-icon>
                  </v-list-item-icon>
                  {{skill.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="skill.mod" color="#298b7f"></v-switch>
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
          <v-list-item-group multiple>
            <v-list-item v-for="(skill,idx) in skills" :key="idx" v-model="skill.mod">
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{skill.icon}}</v-icon>
                  </v-list-item-icon>
                  {{skill.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="skill.mod" color="#298b7f"></v-switch>
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
          <v-item-group multiple class="year">
            <v-item v-for="(month,idx) in year" :key="idx" v-slot:default="{ active, toggle }">
              <v-col cols="4" sm="3" lg="4" class="px-1 py-1">
                <v-chip
                  active-class="teal--text"
                  class="monthChip"
                  :input-value="active"
                  @click="toggle"
                >
                  <p>{{month}}</p>
                </v-chip>
              </v-col>
            </v-item>
          </v-item-group>
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
            <v-list-item v-for="(meal,idx) in meals" :key="idx" v-model="meal.mod">
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
    panel:[],
    isOpen: false,
    host: [
      {
        title: "Habitación individual",
        mod: "Habitación_individual",
        icon: "mdi-account"
      },
      {
        title: "Habitación compartida",
        mod: "Habitación_compartida",
        icon: "mdi-account-multiple"
      },
      {
        title: "Habitación de equipo",
        mod: "Habitación_de_equipo",
        icon: "mdi-account-multiple-plus"
      },
      { title: "Camping", mod: "Camping", icon: "mdi-image-filter-hdr" }
    ],
    skills: [
      {
        title: "Mantenimiento",
        mod: "Mantenimiento",
        icon: "mdi-wrench-outline"
      },
      { title: "Diseño Gráfico", mod: "Diseño_Gráfico", icon: "mdi-brush" },
      { title: "Fotografía", mod: "Fotografía", icon: "mdi-camera" },
      {
        title: "Enseñanza escolar",
        mod: "Enseñanza_escolar",
        icon: "mdi-book-open-page-variant"
      },
      {
        title: "Entrenamiento deportivo",
        mod: "Entrenamiento_deportivo",
        icon: "mdi-soccer"
      },
      {
        title: "Tareas domésticas",
        mod: "Tareas_domésticas",
        icon: "mdi-sofa"
      },
      {
        title: "Enseñar idiomas",
        mod: "Enseñanza idiomas",
        icon: "mdi-google-translate"
      },
      {
        title: "Informática",
        mod: "Informática",
        icon: "mdi-gesture-tap-button"
      },
      {
        title: "Pintura y decoración",
        mod: "Pintura_y_decoración",
        icon: "mdi-format-paint"
      },
      {
        title: "Grabación y edición de video",
        mod: "Grabación_y_edición de video",
        icon: "mdi-video-outline"
      },
      {
        title: "Cuidado infantil",
        mod: "Cuidado_infantil",
        icon: "mdi-baby-face-outline"
      },
      {
        title: "Cuidado de animales",
        mod: "Cuidado_de_animales",
        icon: "mdi-dog-side"
      },
      {
        title: "Entretenimiento musical",
        mod: "Entretenimiento_musical",
        icon: "mdi-music-note-outline"
      },
      { title: "Jardinería", mod: "Jardinería", icon: "mdi-flower-outline" },
      { title: "Bartender", mod: "Bartender", icon: "mdi-glass-cocktail" }
    ],
    meals: [
      {
        title: "Desayuno",
        mod: "Desayuno",
        icon: "mdi-coffee-outline"
      },
      {
        title: "Almuerzo",
        mod: "Almuerzo",
        icon: "mdi-silverware"
      },
      {
        title: "Cena",
        mod: "Cena",
        icon: "mdi-silverware-fork-knife"
      },
      { title: "Todo incluido", mod: "Todo_incluido", icon: "mdi-infinity" }
    ],
    year: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ]
  }),
  computed: {
    isOpen(){
      return this.panel.length
    }
  },
  methods: {
    filtered() {
      skills = offers = dispo = this.$emit("filtered", skills, offers, dispo);
    },
    none(){
      this.panel = []
      this.isOpen = false
    },
    all() {
      this.panel= [0,1,2,3]
      this.isOpen = true
    }
  }
};
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
.year {
  display: flex;
  flex-wrap: wrap;
}
</style>
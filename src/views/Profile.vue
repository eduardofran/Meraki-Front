<template>
  <v-container>
    <goBack></goBack>
    <v-row>
      <v-col>
        <v-card outlined color="#FFFFFF" class="mx-auto">
          <v-col cols="3">
            <v-btn small color="#298B7F" dark class="ml-4" rounded icon>
              <v-icon size="15px" class="ml-1">mdi-pencil</v-icon>
            </v-btn>
            <v-btn x-small absolute right color="red darken-3" dark class="ml-4">Eliminar usuario</v-btn>
          </v-col>
          <v-row>
            <v-col cols="2">
              <v-img :src="user.photoUrl"></v-img>
            </v-col>
            <v-col cols="7">
              <h1 class="titulo">Sobre mi</h1>
              <v-card-title>
                <h4>
                  Edad:{{age}} años
                  <br />
                  País: {{user.country}}
                  <br />
                  Correo de contacto: {{user.email}}
                  <v-card-text>
                    <h3>Biografía</h3>
                    {{user.bio}}
                  </v-card-text>
                </h4>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-card outlined color="#FFFFFF">
          <v-row>
            <v-col>
              <v-card-title>
                <h2>
                  <v-icon size="35px" class="mb-3 mr-2" color="#298B7F">mdi-translate</v-icon>Idiomas
                </h2>
                <v-btn small absolute right color="#298B7F" dark class="ml-4" rounded>
                  Editar
                  <v-icon size="15px" class="ml-1">mdi-pencil</v-icon>
                </v-btn>
              </v-card-title>
              <v-row class="d-flex" v-if="user.languages.length !== 0">
                <h3
                  v-for="(language,idx) in user.languages"
                  :key="idx"
                  class="text-center mx-12 my-10 max"
                >
                  <v-icon size="60px" color="#298B7F">{{language.icon}}</v-icon>
                  <div>{{language.name}}</div>
                </h3>
              </v-row>
              <v-card-subtitle v-else class="my-7">
                <h2>Añade idiomas para completar tu perfil</h2>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-divider />
    <!-- Idiomas  -->
    <v-row>
      <v-col>
        <v-card class outlined color="#FFFFFF">
          <v-row>
            <v-col>
              <v-card-title>
                <h2>
                  <v-icon size="35px" class="mb-2 mr-2" color="#298B7F">mdi-tooltip-plus-outline</v-icon>Habilidades
                </h2>
                {{skills}}
                <v-btn
                  @click="overlay = !overlay"
                  small
                  absolute
                  right
                  color="#298B7F"
                  dark
                  class="ml-4"
                  rounded
                >
                  Editar
                  <v-icon size="15px" class="ml-1">mdi-pencil</v-icon>
                </v-btn>
                <v-overlay :value="overlay">
                  <v-btn icon @click="overlay = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                     <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="(skill,idx) in skills"
          :key="idx"
        >
          <v-item v-slot:default="{ active, toggle }">
                          <v-row class="d-flex">
                <h3
                  class="text-center mx-12 my-10 max"  @click="toggle"
                   :color="active ? 'primary' : ''"
                >
                  <v-icon size="60px" color="#298B7F">{{skill.icon}}</v-icon>
                  <div>{{skill.name}}</div>
                </h3>
              </v-row>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
                </v-overlay>
              </v-card-title>
              <v-row class="d-flex" v-if="user.skills.length !== 0">
                <h3
                  v-for="(skill,idx) in user.skills"
                  :key="idx"
                  class="text-center mx-12 my-10 max"
                >
                  <v-icon size="60px" color="#298B7F">{{skill.icon}}</v-icon>
                  <div>{{skill.name}}</div>
                </h3>
              </v-row>
              <v-card-subtitle v-else class="my-7">
                <h2>Añade habilidades para completar tu perfil</h2>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import APIServices from '../services/Api'
import goBack from '../components/Back.vue'
var moment = require('moment')
export default {
  name: 'Profile',
  data () {
    return {
      user: {},
      skills: [],
      overlay: false
    }
  },
  components: {
    goBack
  },
  computed: {
    age () {
      return moment(this.user.birthday, 'YYYY-MM-DD')
        .fromNow()
        .slice(0, 2)
    }
  },
  async created () {
    this.user = await APIServices.getUser()
    this.skills = await APIServices.getSkills()
  }
}
</script>

<style lang="scss" scoped>
.v-card__text,
.v-card__title {
  word-break: normal;
}
h1,
h2,
h3 {
  font-family: Quicksand, sans-serif;
}
.titulo {
  color: #298b7f;
}
</style>

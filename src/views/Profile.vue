<template>
  <v-container  class="mt-12">
    <goBack></goBack>
    <v-row>
      <v-col>
        <v-card outlined color="#FFFFFF" class="mx-auto">
          <v-col cols="3">
           <v-btn @click="upDate = true" small absolute right color="#298B7F" dark class="ml-4" rounded>
                  Editar
                  <v-icon size="15px" class="ml-1">mdi-pencil</v-icon>
                </v-btn>
          </v-col>
<v-overlay :value="upDate">
                  <v-btn icon @click="upDate = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
      <v-card
    class="overflow-hidden"
    color="teal"
    dark
  >
    <v-toolbar
      flat
      color="teal"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">Perfil de usuario</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        color="white"
        label="Name"
      ></v-text-field>
      <v-autocomplete
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        @click="save"
      >
        Guardar
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Tu perfil ha sido modificado con éxito
    </v-snackbar>
  </v-card>
              </v-overlay>
          <v-row class="mt-6">
            <v-col cols md="2">
              <v-img :src="user.photoUrl"></v-img>
            </v-col>
            <v-col cols md="7">
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
                  Añadir
                  <v-icon size="15px" class="ml-1">mdi-plus</v-icon>
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
        <v-card class="text-right" outlined color="#FFFFFF">
          <v-row>
            <v-col>
              <v-card-title>
                <h2>
                  <v-icon size="35px" class="mb-2 mr-2" color="#298B7F">mdi-tooltip-plus-outline</v-icon>Habilidades
                </h2>
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
                  <v-card
    class="mx-auto"
  width="80vw"
    light
  >
    <v-list>
      <v-list-item-group v-model="model" multiple color="teal">
        <v-row justify="space-around" justify-md="start">
          <v-col cols sm="5" md="3" class="text-left" v-for="(skill, i) in skills"
          :key="i">
        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="skill.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="skill.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-col>
        </v-row>
      </v-list-item-group>
    </v-list>
  <v-btn @click="updateSkills" class="mx-3 mb-3" color="teal" dark>Guardar</v-btn>
  </v-card>
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
        <v-divider></v-divider>
        <v-row>
          <v-col cols ="8">

        <h2 class="my-12">
                  <v-icon  size="35px" class="mb-2 mr-2" color="#298B7F">mdi-alert</v-icon>Eliminar perfil de usuario
                </h2>
          </v-col >
          <v-col cols ="4" class="text-right mt-2">

         <v-btn @click="confirm = !confirm" x-small   color="red darken-3" dark class="my-12 mr-6">Eliminar </v-btn>
         <v-overlay :value="confirm">
                  <v-btn icon @click="confirm = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-alert
      prominent
class="text-center "
      type="error"
    >
      <v-row align="center">
        <v-col class="grow">Eliminando tu cuenta de usuario, borrarás todos tus datos y registros de forma definitiva, ¿estás seguro de que quieres continuar?</v-col>
        <v-col class="shrink">
        </v-col>
      </v-row>
          <v-btn @click="confirm = false" class="mx-5">Cancelar</v-btn>

          <v-btn @click="deleteUser()" class="mx-5">Confirmar</v-btn>

    </v-alert>

              </v-overlay>
          </v-col>
        </v-row>
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
      model: [],
      user: {},
      skills: [],
      overlay: false,
      confirm: false,
      upDate: false
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
    },
    skillsId () {
      return this.skills.map(s => s._id)
    }
  },
  methods: {
    updateSkills () {
      const skillsSelected = {
        skills: this.model.map(i => {
          return this.skills[i]._id
        })
      }
      APIServices.updateSkills(skillsSelected)
      this.overlay = false
      this.getUser()
    },
    async getUser () {
      this.user = await APIServices.getUser()
    },
    checkSkills () {
      this.user.skills.map(s => {
        return this.model.push(this.skillsId.indexOf(s._id))
      })
    },
    deleteUser () {
      this.confirm = false
      APIServices.deleteUser()
      localStorage.clear()
      this.$router.push('/')
      window.location.reload()
    }
  },
  async created () {
    this.skills = await APIServices.getSkills()
    await this.getUser()
    await this.checkSkills()
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

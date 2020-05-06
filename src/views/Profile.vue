<template>
    <v-container>
<goBack></goBack>
      <v-row >

<v-card outlined color= #FFFFFF class="mx-auto" >
  <v-row>

  <v-col cols ="3">

  <v-img :src= "user.photoUrl">

  </v-img>
  </v-col>
  <v-col cols ="9">
  <h1 class="titulo">Sobre mi</h1>
    <v-card-title><h4>Edad:
    {{age}}
    años
    <br>
    País: {{user.country}}
    <br>
    Correo de contacto: {{user.email}}
    <v-card-text>
      <h3>Biografía</h3>
     {{user.bio}}
   </v-card-text>
    </h4>

  </v-card-title>
  <v-btn x-small color="red darken-3" dark class="ml-4">
    Eliminar usuario
  </v-btn>
  </v-col>
  </v-row>

  <v-row>

  </v-row>
</v-card>
      </v-row>
   <v-divider></v-divider>
 <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                  <h2><v-icon size="35px" class="mb-3 mr-2" color="#298B7F">mdi-translate</v-icon>Idiomas</h2>
                  <v-btn x-small color="#298B7F" dark class="ml-4" rounded>
    Editar <v-icon size="15px" class="ml-1">
      mdi-pencil
    </v-icon>
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
      <!-- Sección de qué ofrece  -->
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                 <h2><v-icon size="35px" class="mb-2 mr-2" color="#298B7F">mdi-tooltip-plus-outline</v-icon>Habilidades</h2>
                 <v-btn x-small color="#298B7F" dark class="ml-4" rounded>
    Editar <v-icon size="15px" class="ml-1">
      mdi-pencil
    </v-icon>
  </v-btn>
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
      user: {}
    }
  },
  components: {
    goBack
  },
  computed: {

    age () {
      return moment(this.user.birthday, 'YYYY-MM-DD').fromNow().slice(0, 2)
    }
  },
  async created () {
    this.user = await APIServices.getUser()
  }
}
</script>

<style lang="scss" scoped>
.v-card__text, .v-card__title {
  word-break: normal;

}
h1,h2,h3 {
  font-family: Quicksand,sans-serif;

}
.titulo{
  color:#298B7F
}
</style>

<template>
  <div class="bg">
    <Navbar color="transparent"></Navbar>
    <v-content>
      <v-container class="mt-12">
        <v-row class="justify-center mt-12">
          <v-col cols="12" sm="8" md="7" lg="5">
            <v-card
              min-width="300px"
              class="mt-12 mx-auto pa-2 text-center"
              color="rgba(255, 255, 255, 0.75)"
            >
              <v-card-title class="pb-2">
                <h2>Iniciar sesión</h2>
              </v-card-title>
              <v-card-text>
                <div id="err" v-if="userInvalid">Usuario o Contraseña incorrecta</div>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    background-color="#FAFAFA"
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    v-model="userPassword"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="passwordRule"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    background-color="#FAFAFA"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn id="button" color="#298B7F" dark block @click="login">Iniciar sesión</v-btn>
              </v-card-actions>
              <p class="caption">
                ¿Aún no tienes cuenta?
                <router-link to="/signup" class="color">Regístrate gratis aquí</router-link>
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import APIServices from '../services/Api'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Login',
  data () {
    return {
      userInvalid: false,
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'La contraseña es obligatoria',
        v =>
          v.length >= 5 || 'La contraseña debe contener al menos 6 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El email es necesario',
        v => /.+@.+\..+/.test(v) || 'Formato de email incorrecto'
      ]
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.userPassword
      }
      APIServices.login(user)
        .then(response => {
          if (response.error) {
            this.userInvalid = true
          } else {
            localStorage.setItem('token', response.token)
            localStorage.setItem('name', response.name)
            localStorage.setItem('email', response.email)
            this.$router.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}
.color {
  color: #298b7f;
}
</style>

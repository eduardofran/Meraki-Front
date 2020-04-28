<template>
  <div class="bg">
    <Navbar></Navbar>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="5">
            <h1>¡Bienvenido a Meraki!</h1>
            <br />
            <h3>Nos alegra que hayas llegado hasta aquí, ¡eso significa que estás a punto de comenzar una nueva aventura!</h3>
          </v-col>
          <v-col cols="5">
            <v-card width="400px" class="ml-5 mt-5 mx-a" color="rgba(255, 255, 255, 0.75)">
              <v-card-text>
                <v-form>
                  <v-text-field label="Nombre" v-model="username" :rules="userRules"></v-text-field>

                  <v-text-field label="E-mail" v-model="email" :rules="emailRules"></v-text-field>

                  <v-text-field
                    label="Password"
                    v-model="userPassword"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="passwordRule"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                  <v-select
                    v-model="select"
                    :items="countries"
                    label="País"
                    required
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="button" color="#298B7F" dark block @click="signup">Registrarme</v-btn>
              </v-card-actions>
              <v-text class="caption">
                ¿Ya tienes cuenta?
                <router-link to="/login">Accede a tu perfil aquí</router-link>
              </v-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import APIServices from "../services/Api";
import Navbar from "../components/Navbar.vue";
import countries from "../assets/countries.json";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "La contraseña es obligatoria",
        v => v.length >= 6 || "La contraseña debe tener al menos 6 caracteres"
      ],
      username: "",
      userRules: [v => !!v || "Es necesario el nombre"],
      email: "",
      emailRules: [
        v => !!v || "El email es necesario",
        v => /.+@.+\..+/.test(v) || "Formato de email incorrecto"
      ],
      countries,
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      country: [
        v => !!v || 'Selecciona tu país de residencia'
      ]
    };
  },
  components: {
    Navbar
  },
  methods: {
    signup() {
      const newUser = {
        user_name: this.username,
        user_email: this.email,
        user_password: this.userPassword
      };
      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push("/home");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}
</style>

<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1 class="font-weight-thin">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules" prepend-icon="mdi-email"></v-text-field>
          <div id="err" v-if="userInvalid">Usuario no válido</div>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn id="button" class="ma-3" color="amber" @click="login" >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import APIServices from "../services/Api";
export default {
  data() {
    return {
      userInvalid:false,
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 5 || "Password must be more than 5 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    login() {
      const user = {
        user_email: this.email,
        user_password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          if (response.error) {
            this.userInvalid = true;
          } else {
            localStorage.setItem("token", response.token);
            // localStorage.setItem("id", response.id);
            this.$router.push("/notes");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
#button {
  color: rgb(255, 255, 255);
}
</style>

<template>
  <div class="main">
    <div class="loading"></div>
    <v-toolbar
      height="150px"
      class="mb-16"
      src="../../public/images/icon-siege.png"
    >
      <v-img
        max-height="150"
        max-width="250"
        class="logo"
        src="../../public/images/icon-left-font-monochrome-white.png"
      ></v-img>
    </v-toolbar>

    <h1 class="text-center">Bienvenue sur notre réseau social</h1>
    <v-form class="login" v-model="valid">
      <v-sheet
        class="d-flex justify-center flex-column rounded-xl mt-16 mb-16 pa-8"
        elevation="7"
        width="400px"
      >
        <div>
          <h2 class="text-center mb-6">Connectez-vous</h2>
        </div>
        <v-row class="d-flex justify-center flex-column">
          <v-col>
            <v-text-field
              v-model="userName"
              :rules="[rules.required, rules.min, rules.max, rules.nospace]"
              label="Nom d'utilisateur"
              required
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.minPassword, rules.maxPassword, rules.uppercase, rules.nospace]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Mot de passe"
              hint="4-80 caractères, 1 Maj, 1 Min, pas d'espaces"
              @click:append="show1 = !show1"
              counter
            ></v-text-field>
          </v-col>
          <p id="login_aide"></p>
          <v-btn
            @click="connection"
            type="submit"
            class="ma-7 white--text"
            elevation="7"
            height="45px"
            width="300px"
            color="#fd2d01"
          >
            CONNEXION
          </v-btn>
        </v-row>
      </v-sheet>
    </v-form>
    <p class="question text-center font-weight-medium">
      Vous n'êtes pas encore inscrit ?
    </p>
    <div class="text-center mb-16">
      <router-link class="toSignup" to="/signup">
        <v-btn
          type="submit"
          class="ma-7 white--text"
          elevation="7"
          height="45px"
          width="300px"
          color="#fd2d01"
        >
          Créer un compte
        </v-btn>
      </router-link>
    </div>
    <v-footer dark padless>
      <v-card flat tile color="#fd2d01" class="white--text text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Notre entreprise, spécialisée dans la grande distribution, est en
          pleine expansion. Nous avons actuellement plus de 600 collaborateurs
          et avons beaucoup recruté depuis quelques années. Nous étions
          uniquement 300 il y a 3 ans.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "LoginComp",

  data: () => ({
    valid: false,
    userName: "",
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Requis.",
      min: (v) => v.length >= 3 || "Min 3 caractères",
      max: (v) => v.length <= 20 || "Max 20 caractères",
      minPassword: (v) => v.length >= 4 || "Min 4 caractères",
      maxPassword: (v) => v.length <= 80 || "Max 80 caractères",
      uppercase: (v) => /[A-Z]/.test(v) || "Majuscule obligatoire",
      nospace: (v) => !/\s/g.test(v) || "Pas d'espace"
    },
    icons: ["mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    connection(e) {
      e.preventDefault();
      if (this.password === "" || this.userName === "") {
        return (document.querySelector("#login_aide").innerHTML =
          "Veuillez renseigner les champs");
      }
    },
  },
};
</script>

<style lang="scss" scoped>


.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
    animation: loading 2s forwards;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
}

.loading::after{
    position: absolute;
    content: "";
    height: 150px;
    width: 150px;
    border: 10px solid transparent;
    border-top: 10px solid rgb(22, 49, 107);
    border-radius: 50%;
    animation: spinner-1 1s infinite;
}

.loading::before{
    top: 15px;
    content: "";
    height: 120px;
    width: 120px;
    border: 10px solid transparent;
    border-bottom: 10px solid red;
    border-radius: 50%;
    animation: spinner-1 1s 500ms infinite;
}


@keyframes spinner-1 {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform : rotate(1turn);
    }
}

@keyframes loading {
    to{
        visibility: hidden;
        display: none;
    }
}

.login {
  display: flex;
  justify-content: center;
}
.logo {
  position: absolute;
}

.title {
  color: rgb(22, 49, 107);
}

.question {
  font-size: 21px;
}

.toSignup {
  text-decoration: none;
}
</style>
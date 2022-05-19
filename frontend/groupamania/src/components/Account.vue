<template>
  <div class="text-center">
    <v-card
      class="mx-auto rounded-lg mt-16 mb-16 text-center"
      elevation="7"
      max-height="650"
      max-width="550"
    >
      <v-card-title> {{ username }}</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td class="text-left">Email :</td>
              <td class="text-left">{{ email }}</td>
            </tr>
            <tr>
              <td class="text-left">Biographie :</td>
              <td class="text-justify">{{ biography }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-card-action>
        <v-btn color="blue" class="mb-6 mt-6 mx-3"> Modifier </v-btn>
        <v-btn color="red" class="mb-6 mt-6 mx-3" @click="deleteAccount(userId)" > Supprimer </v-btn>
      </v-card-action>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AccountComp",
  data: () => ({
    username: "",
    userId: "",
    email: "",
    biography: "",
    admin: "",
  }),

  mounted() {
    const token = this.$store.state.user.token;
    fetch("http://localhost:3000/api/auth/myaccount", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        this.username = res.username;
        this.email = res.email;
        this.biography = res.biography;
        this.admin = res.isAdmin;
        this.userId = res.id;
      });
  },

  methods: {
    deleteAccount(userId) {
      const token = this.$store.state.user.token;
      fetch(`http://localhost:3000/api/auth/myaccount/${userId}`, {
        method:"DELETE",  
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res.message);
          this.$store.commit("LOGOUT");
          window.location.href = window.location.protocol + "/" + window.location.host;
        });
    },
  },
};
</script>
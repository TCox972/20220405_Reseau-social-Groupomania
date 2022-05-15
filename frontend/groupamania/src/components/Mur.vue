<template>
  <div class="main">
    <v-card
      class="mx-auto rounded-lg mt-16 mb-16 pb-3"
      elevation="7"
      max-height="650"
      max-width="550"
    >
      <div class="d-flex pt-4 ml-5">
        <p>My Username</p>
      </div>
      <v-card-title>
        <v-spacer></v-spacer>
        Créer un nouveau message :
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon x-large color="blue">{{
            show ? "mdi-note-off-outline" : "mdi-note-plus-outline"
          }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-expand-transition>
        <div v-show="show">
          <v-text-field
            v-model="title"
            :rules="[rules.required]"
            label="Titre"
            outlined
            class="px-7"
            required
          ></v-text-field>
          <v-textarea
            v-model="content"
            :rules="[rules.required]"
            name="message"
            outlined
            label="Message"
            auto-grow
            class="px-7"
            value=""
            required
          ></v-textarea>
          <v-file-input
            v-model="attachment"
            label="Image"
            prepend-icon="mdi-camera"
            class="px-7"
            accept="image/.jpg,.jpeg,.png,.gif"
          ></v-file-input>
          <div class="mr-7 text-right">
            <v-btn @click="publication" color="blue" text> Publier </v-btn>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card
      class="mx-auto rounded-lg mt-16 mb-16"
      elevation="7"
      max-height="650"
      max-width="550"
      v-for="message in messages" :key="message.id"
    >
      <div class="d-flex pt-4 ml-5">
        <p>{{ message.UserId }}</p>
      </div>

      <v-img
        class="white--text align-end"
        height="300px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ message.title }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div> {{ message.content }} </div>

        <div class="date text-right">13/04/2022 à 9h00</div>
      </v-card-text>
    </v-card>
    <v-footer padless>
      <v-card
        flat
        tile
        color="transparent"
        class="white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 red--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="red--text">
          {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "MurComp",

  data: () => ({
    messages: [],
    title: "",
    content: "",
    attachment: "",
    show: false,
    rules: {
      required: (value) => !!value || "Requis",
    },
    icons: ["mdi-linkedin", "mdi-instagram"],
  }),
  mounted() {
    const token = this.$store.state.user.token;
    fetch("http://localhost:3000/api/message/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        this.messages = res;
        console.log(this.messages)
        console.log(this.messages.title)
      });
  },
  methods: {
    publication() {
      const token = this.$store.state.user.token;
      const formdata = new FormData();
      formdata.append("title", this.title);
      formdata.append("content", this.content);
      formdata.append("attachment", this.attachment);

      fetch("http://localhost:3000/api/message/", {
        method: "POST",
        body: formdata,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let message = data.message;
          console.log(message);
          location.reload();
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 0.75rem;
}
</style>
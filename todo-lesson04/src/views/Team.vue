<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="gery lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" class="lighten-4 grey--text">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "Bulbasaur.png",
        },
        {
          name: "Skycoco",
          role: "Graphic designer",
          avatar: "Charmander.png",
        },
        {
          name: "Jant",
          role: "web developer",
          avatar: "Farfetch'd.png",
        },
        {
          name: "Bob",
          role: "web developer",
          avatar: "Snorlax.png",
        },
        {
          name: "Ann",
          role: "Sales guru",
          avatar: "Squirtle.png",
        },
      ],
    };
  },
  methods: {},
};
</script>

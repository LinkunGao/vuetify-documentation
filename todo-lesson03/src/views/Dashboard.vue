<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
        <v-col md="2" sm="4">
          <v-btn outlined block color="primary">2</v-btn>
        </v-col>
        <v-col md="2" sm="4">
          <v-btn outlined block color="primary">2</v-btn>
        </v-col>
        <v-col md="2" sm="4">
          <v-btn outlined block color="primary">2</v-btn>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col md="3" sm="4">
          <v-btn outlined block color="info">1</v-btn>
        </v-col>
        <v-col md="3" sm="4">
          <v-btn outlined block color="red">2</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>

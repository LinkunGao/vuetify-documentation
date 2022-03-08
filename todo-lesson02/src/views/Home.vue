<template>
  <div class="home">
    <h1>Home</h1>
    <v-btn class="pink white--text">button</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <v-icon left large>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small fab dark color="purple">
      <v-icon small>mdi-heart</v-icon>
    </v-btn>

    <!-- ***************** Visibility ***************** -->
    <div style="height: 50px">Visibility</div>
    <v-btn class="hidden-sm-and-down">click me down</v-btn>

    <v-btn class="hidden-sm-and-up">click me up</v-btn>
    <v-btn class="hidden-sm-only">click me only</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

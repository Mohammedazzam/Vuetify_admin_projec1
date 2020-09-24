<template>
  <div class="home">
    <h1>Home Page</h1>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn color="pink">click me</v-btn>
    <v-btn color="pink">click me</v-btn>
    <!--يضيف shadow-->
    <v-btn depressed color="pink">click me</v-btn>
    <!--بحذف الظل الي حوالين الزر shadow-->
    <v-btn flat color="pink">click me22</v-btn>
    <!--يضيف shadow-->

    <v-btn depressed class="pink white--text">
      <v-icon>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn class="ma-2" tile outlined color="success">
      <v-icon left>mdi-pencil</v-icon>Edit
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email</span>
      <v-icon right large>mdi-pencil</v-icon>
    </v-btn>



    <v-btn depressed small dark color="purple">
      <v-icon >mdi-heart</v-icon>
    </v-btn>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

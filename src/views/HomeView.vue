<template>
  <div class="home">
    <v-row style="width: 100%;">
      <HeaderComponent/>
    </v-row>
    <v-row style="height: 800px;width: 100vw; background-color: white"></v-row>

          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="hidden-sm-and-down" style="margin-top: 10%; font-size: 40px; margin-left: 5%">
            Ihr Dozent in Betriebwirtschaft und Unternehmensberaterung
          </h1>

          <h1 class="hidden-md-and-up" style="margin-top: 10%; font-size: 40px; margin-left: 5%">
            Ihr Dozent in Betriebwirtschaft und Unternehmens-<br>beraterung
          </h1>

          <p class="mx-10" style="font-size: 20px; margin-left: 5%; margin-top: 7%">
            Dozent an der International School of Management in
            Dortmund und managing Partner der
            Synergetic Management Consulting Group</p>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/brickau-removebg-preview.png" style="width: 700px; height: auto"/>
        </v-col>
      </v-row>
    </div>

    <div class="containerTwo">
      <v-row style="height: 600px; width: 100vw">
        <v-col cols="4" style="background-color: black" xs="12"></v-col>
        <v-col cols="4" style="background-color: aquamarine" xs="12"></v-col>
        <v-col cols="4" style="background-color: aqua" xs="12"></v-col>
      </v-row>
    </div>

    <div class="containerThree mt-3 ml-0" style="height: 800px;width: 100vw; background-color: white">

      <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
        <Icon icon="ic:baseline-anchor" style="font-size: 200px; margin-top: 3%"/>
      </div>

      <div class="d-flex justify-center" style="width: 100%">
        <h1>About Company</h1>
      </div>

      <div class="d-flex justify-center mt-5" style="font-size: 20px">
        //text about company
      </div>

    </div>

    <div class="footer">
      <v-row style="width: 100%">
        <FooterComponent/>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import {Icon} from '@iconify/vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    Icon
  }
}
</script>

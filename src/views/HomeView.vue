<template>
  <div class="home">

    <div class="containerOne">
      <v-row class="mt-3 ml-0" style="height: 800px;width: 100vw; background-color: white">
        <v-col cols="6">

          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="hidden-sm-and-down" style="font-size: 40px; margin-left: 5%">
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
          <v-img src="../assets/brickau-removebg-preview.png" style="width: 750px; height: auto"
                 transition="slide-y-transition"/>
        </v-col>
      </v-row>
    </div>

    <div class="containerTwo">
      <v-row style="height: 500px; width: 100vw">
        <v-col cols="4" style="background-color: black" xs="12">

        </v-col>


        <v-col cols="4" style="background-color: aquamarine" xs="12">
          <h2 class="text-center mt-5"> Anmelden und Registrieren </h2>
          <p class="text-center mt-10 mx-10">
            Sie sind Student vom mir und möchten sich Dateien herunterladen? Dann melden Sie
            sich hier an oder registrieren Sie sich!
          </p>
          <v-row class="mt-16">
            <v-col class="justify-end d-flex icon" cols="6">
              <Icon icon="ic:baseline-log-in"/>
            </v-col>
            <v-col class="justify-start d-flex icon" cols="6">
              <Icon icon="mdi:register"/>
            </v-col>
            <v-col class="justify-end d-flex" cols="6">
              <v-btn @click="login=true">Anmelden</v-btn>
            </v-col>
            <v-col class="justify-start d-flex" cols="6">
              <v-btn @click="regist=true">Registrieren</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <template class="regist">
          <v-row justify="center">
            <v-dialog
                v-model="regist"
                persistent
                width="1024"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          md="4"
                          sm="6"
                      >
                        <v-text-field
                            label="Legal first name*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          md="4"
                          sm="6"
                      >
                        <v-text-field
                            hint="example of persistent helper text"
                            label="Legal last name*"
                            persistent-hint
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          md="4"
                          sm="6"
                      >
                        <v-select
                            :items="['IT-Center', 'FH-Dortmund', 'ISM']"
                            label="School*"
                            required
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Email*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Password*"
                            required
                            type="password"
                        ></v-text-field>
                      </v-col>

                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="regist = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="regist = false"
                  >
                    Regist
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>

        <template class="login">
          <v-row justify="center">
            <v-dialog
                v-model="login"
                persistent
                width="512"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            label="Email*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Password*"
                            required
                            type="password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="login = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="login = false"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>


        <v-col cols="4" style="background-color: aqua" xs="12">

        </v-col>
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
  </div>
</template>

<script>
// @ is an alias to /src
import {Icon} from '@iconify/vue';

export default {
  data: () => ({
    regist: false,
    login: false,
  }),
  name: 'HomeView',
  components: {
    Icon
  }
}
</script>

<style>
.icon {
  font-size: 100px;
}
</style>

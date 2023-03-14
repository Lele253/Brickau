<template>
  <div class="home">

    <div class="containerOne">
      <v-row class="mt-3 ml-0" style="height: 800px;width: 100vw; background-color: #dedede">
        <v-col cols="6">

          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="hidden-sm-and-down" style="font-size: 40px; margin-left: 5%; margin-top: 20%">
            Ihr Dozent in Betriebwirtschaft und Unternehmensberaterung
          </h1>

          <h1 class="hidden-md-and-up" style="margin-top: 10%; font-size: 40px; margin-left: 20%">
            Ihr Dozent in Betriebwirtschaft und Unternehmens-<br>beraterung
          </h1>

          <p class="mx-10" style="font-size: 20px; margin-left: 5%; margin-top: 12%">
            Dozent an der International School of Management in
            Dortmund und managing Partner der
            Synergetic Management Consulting Group</p>

          <v-btn style="margin-left: 5%; margin-top: 13%; background-color: aquamarine" @click="scrollDown">
            <b>Learn more about me</b>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/Brickau_kl-removebg-preview.png" style="width: 750px; height: auto"
                 transition="slide-y-transition"/>
        </v-col>
      </v-row>
    </div>

    <div class="containerTwo">
      <v-row style="height: 500px; width: 100vw">
        <v-col cols="4" style="background-color: black" xs="12">

        </v-col>


        <v-col cols="4" style="background-color: aquamarine" xs="12">
          <h2 class="text-center mt-5"> Anmelden </h2>
          <p class="text-center mt-10 mx-10">
            Sie sind Student vom mir und möchten sich Dateien herunterladen? Dann melden Sie
            sich hier mit den von mir bereitgestellten Anmeldedaten an!
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
                  <span class="text-h5">Registrieren</span>
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
                            label="Vorname*"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          md="4"
                          sm="6"
                      >
                        <v-text-field
                            label="Name*"
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
                            :items=schoolList
                            label="Universität*"
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
                            label="Passwort*"
                            required
                            type="password"
                        ></v-text-field>
                      </v-col>

                    </v-row>
                  </v-container>
                  <small>*Pflichtfelder</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      variant="text"
                      @click="regist = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
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
                  <span class="text-h5">Anmelden</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            label="Email"
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            label="Passwort"
                            required
                            type="password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      variant="text"
                      @click="login = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
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

    <div class="containerThree mt-3 ml-0" style="height: 800px;width: 100vw; background-color: #dedede">
      <v-row>
        <v-col cols="6">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
            <Icon class="mt-5" icon="material-symbols:person" style="font-size: 200px"/>
          </div>
          <div class="d-flex justify-center" style="width: 100%">
            <h1 id="about">About Me</h1>
          </div>
          <div class="d-flex justify-center mt-10 text-center"
               style="font-size: 17px; margin-left: 25px">
            <b>Ich, Prof. Dr. Ralf A. Brickau, bin ein Wirtschaftswissenschaftler und Unternehmer mit langjähriger
              Erfahrung in der Beratung von Unternehmen. Als Gründer und Geschäftsführer der Synergetic Management
              Consulting Group (SMCG) liegt mein Fokus darauf, maßgeschneiderte Lösungen für komplexe Geschäftsprobleme
              zu entwickeln und nachhaltige Wertschöpfung für unsere Kunden zu schaffen.

              Ich habe mein Studium an der Universität Hamburg absolviert und meine Promotion in
              Wirtschaftswissenschaften an der Universität Witten/Herdecke abgeschlossen. Während meiner akademischen
              Laufbahn habe ich mich auf die Themen Unternehmensführung, Strategie, Organisationsentwicklung und
              Veränderungsmanagement spezialisiert. Ich habe mehrere Bücher und Artikel zu diesen Themen veröffentlicht
              und bin regelmäßiger Gastredner auf Konferenzen und Seminaren.

              Neben meiner Tätigkeit bei SMCG bin ich auch Gründer und CEO der BTB Brickau Unternehmensgruppe, einem
              Unternehmen, das sich auf den Bereich der Energieeffizienz spezialisiert hat. Ich bin stolz darauf, mit
              beiden Unternehmen dazu beizutragen, nachhaltige Geschäftsstrategien und -prozesse zu entwickeln und
              umzusetzen.

              Insgesamt betrachte ich meine Arbeit bei SMCG und BTB Brickau Unternehmensgruppe als eine erfüllende und
              herausfordernde Aufgabe, bei der ich mein Wissen und meine Erfahrung einbringen kann, um Unternehmen dabei
              zu helfen, erfolgreich zu sein und nachhaltige Werte für ihre Kunden und die Gesellschaft zu
              schaffen. </b>
          </div>
        </v-col>

        <v-col cols="6">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
            <Icon class="mt-5" icon="ic:baseline-anchor" style="font-size: 200px"/>
          </div>

          <div class="d-flex justify-center" style="width: 100%">
            <h1 id="about">About Company</h1>
          </div>

          <div class="d-flex justify-center mt-10 text-center"
               style="font-size: 17px; margin-right: 25px">
            <b>Die Synergetic Management Consulting Group ist ein internationales Beratungsunternehmen, das sich auf die
              Bereiche Strategie, Organisation, Prozesse, Technologie und Veränderungsmanagement spezialisiert hat.
              Unsere
              Kunden stammen aus verschiedenen Branchen und Regionen, und wir arbeiten eng mit ihnen zusammen, um
              maßgeschneiderte Lösungen für komplexe Geschäftsprobleme zu entwickeln.

              Unser Beratungsansatz ist ganzheitlich und zielt darauf ab, die Effektivität und Effizienz der
              Geschäftsprozesse
              unserer Kunden zu verbessern und eine nachhaltige Wertschöpfung zu erzielen. Wir setzen auf eine enge
              Zusammenarbeit mit unseren Kunden, um eine fundierte Analyse und eine erfolgreiche Umsetzung von Lösungen
              zu
              gewährleisten.

              Unser Leistungsportfolio umfasst die Entwicklung von Geschäftsstrategien, die Optimierung von
              Organisationsstrukturen und -prozessen, die Einführung neuer Technologien, die Implementierung von
              Veränderungsmanagement-Prozessen und die Durchführung von Schulungen und Workshops für Mitarbeiter.

              Unser erfahrenes Team von Beratern verfügt über unterschiedliche fachliche Hintergründe und
              Branchenkenntnisse.
              Wir sind bekannt für unsere qualitativ hochwertigen Beratungsdienstleistungen und unsere umfassende
              Betreuung
              und Unterstützung unserer Kunden.

              Insgesamt sind wir bei der Synergetic Management Consulting Group stolz darauf, Unternehmen dabei zu
              unterstützen, komplexe Herausforderungen zu bewältigen und ihre Geschäftsprozesse zu verbessern, um
              nachhaltige
              Wertschöpfung zu erzielen. </b>
          </div>
        </v-col>
      </v-row>
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
    schoolList: ['IT-Center', 'FH-Dortmund', 'ISM'],
  }),
  name: 'HomeView',
  components: {
    Icon
  },
  methods: {
    scrollDown() {
      window.scrollBy({top: 1500, left: 100, behavior: "smooth"});
    }
  }
}
</script>

<style>
.icon {
  font-size: 100px;
}
</style>

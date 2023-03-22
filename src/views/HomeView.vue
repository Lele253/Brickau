<template>
  <div class="home">

    <div class="containerOne desktop hidden-md-and-down">
      <v-row class="ml-0" style="height: 750px;width: 100vw">
        <v-col cols="6" sm="6">

          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="text-white" style="font-size: 40px; margin-left: 10%;margin-right: 10%; margin-top: 125px">
            Ihr Dozent in Betriebwirtschaft und Unternehmensberatung
          </h1>

          <p class="text-white" style="font-size: 20px; margin-left: 10%;margin-right: 10%; margin-top: 12%">
            Dozent an der International School of Management in
            Dortmund und managing Partner der
            Synergetic Management Consulting Group</p>

          <v-btn class="text-white" style="background-color: black; margin-left: 10%; margin-top: 13%"
                 variant="outlined"
                 @click="$router.push('#about')">
            <b>Learn more about me</b>
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center" cols="6">
          <v-img src="../assets/brickau.png" style=" width: auto; max-height: 750px"
                 transition="slide-y-transition"/>
        </v-col>
      </v-row>
    </div>

    <div class="containerOne tablet hidden-lg-and-up">
      <v-row class="mt-3 ml-0" style="width: 100vw">
        <v-col class="d-flex justify-center" cols="12" style="height: 50vh">
          <v-img src="../assets/brickau.png"
                 transition="slide-y-transition"/>
        </v-col>
        <v-col cols="12">

          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="text-center hidden-xs text-white"
              style="font-size: 40px; margin-left: 10%;margin-right: 10%">
            Ihr Dozent in Betriebwirtschaft und Unternehmensberatung
          </h1>

          <h1 class="text-center text-white" style="font-size: 40px;">
            Ihr Dozent in Betriebwirtschaft und Unternehmens-<br>beratung
          </h1>
        </v-col>
        <v-col cols="12">

          <p class="text-center text-white"
             style="font-size: 20px; margin-left: 10%;margin-right: 10%">
            Dozent an der International School of Management in
            Dortmund und managing Partner der
            Synergetic Management Consulting Group</p>
          <div class="d-flex justify-center">
            <v-btn class="text-white" style="background-color: black; margin-top: 5%"
                   variant="outlined"
                   @click="$router.push('#about')">
              <b>Learn more about me</b>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="containerTwo desktop hidden-md-and-down mt-10">
      <v-row class="d-flex justify-center" style="height: 50%; width: 100vw;">
        <v-col class="cardOne card" cols="12" lg="4"
               md="12"
               sm="12"
               xs="12"
        >
          <h2 class="text-center mt-5">Werdegang</h2>
          <v-timeline align="start" class="pt-4 pl-10" side="end">
            <v-timeline-item
                size="small"
            >
              <div class="d-flex">
                <strong class="me-4">August 2021</strong>
                <div>
                  <strong>International School of Management</strong>
                  <div class="text-caption">
                    - Dekan <br>
                    - Dozent, Seminare, Workshops, Management Consulting <br>
                    - Prof. Dr. <br>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
                dot-color="light-blue-lighten-3"
                size="small"
            >
              <div class="d-flex">
                <strong class="me-9">Dez 2000</strong>
                <div>
                  <strong>Dozent</strong>
                  <div class="text-caption mb-2">
                    IT-Center Dortmund GmbH
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
                size="small"
            >
              <div class="d-flex">
                <strong class="me-6">1990-1999</strong>
                <div>
                  <strong>Key Accounter</strong>
                  <div class="text-caption mb-2">
                    Konzeptionelle Marketing und Vertriebstätigkeit bei Großkunden
                  </div>
                </div>
              </div>
            </v-timeline-item>
            ‚

          </v-timeline>
        </v-col>


        <v-col class="cardTwo card" cols="12" lg="4" md="12" sm="12"
               xs="12"
        >
          <h2 class="text-center mt-5"> Anmelden</h2>
          <p class="text-center mt-5 mx-10">
            Sie sind Student vom mir und möchten sich Dateien herunterladen? Dann melden Sie
            sich mit den von mir bereitgestellten Anmeldedaten an!
          </p>
          <v-row class="pt-7">
            <v-col class="justify-center d-flex icon" cols="12">
              <Icon icon="ic:baseline-log-in"/>
            </v-col>
            <!--            <v-col class="justify-start d-flex icon" cols="6">-->
            <!--              <Icon icon="mdi:register"/>-->
            <!--            </v-col>-->
            <v-col class="justify-center d-flex" cols="12">
              <v-btn v-if="!user" class="text-white" style="background-color: black" variant="outlined"
                     @click="loginDialog=true">
                Anmelden
              </v-btn>
              <v-btn v-if="user" class="text-white" style="background-color: black" variant="outlined" @click="logout">
                Ausloggen
              </v-btn>
            </v-col>
            <!--              Wenn der user halt admin is dann button anzeigen-->
            <v-col v-if="user" class="justify-center d-flex" cols="12">
              <v-btn class="text-white" style="background-color: black" variant="outlined" @click="regist=true">
                Registrieren
              </v-btn>
            </v-col>

            <v-col class="justify-center d-flex" cols="12">
              <v-btn v-if="user" class="text-white" style="background-color: black" variant="outlined"
                     @click="$router.push('/files')">
                Dateien
              </v-btn>
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
                  <div>
                    <v-row>
                      <v-col
                          cols="12"
                      >
                        <v-text-field
                            label="Ordnerpfad*"
                            required
                        ></v-text-field>
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
                  </div>
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
                v-model="loginDialog"
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
                      @click="loginDialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      variant="text"
                      @click="login"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>


        <v-col class="cardThree card" cols="12" lg="3" md="12" sm="12"
               xs="12">
          <h2 class="ml-15 mt-5"> Kontaktdaten</h2>
          <v-row class=" ml-5 mt-5">
            <v-col cols="2">
              <Icon class="iconDaten" icon="ic:round-email"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>Ralf.Brickau@smcg.de</p>
            </v-col>
          </v-row>
          <v-row class="ml-5">
            <v-col cols="2">
              <Icon class="iconDaten" icon="material-symbols:phone-android"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>0157 89636558</p>
            </v-col>
          </v-row>
          <v-row class="ml-5 ">
            <v-col cols="2">
              <Icon class="iconDaten" icon="fluent-mdl2:website"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>www.ralf.Brickau.de</p>
            </v-col>
          </v-row>

        </v-col>

      </v-row>
    </div>

    <div class="containerTwo tablet hidden-lg-and-up mt-10">
      <v-row style="height: 50%; width: 100vw;">
        <v-col class="card" cols="12" lg="5" md="12" sm="12"
               xs="12">
          <h2 class="text-center mt-5">Werdegang</h2>
          <v-timeline align="start" class="pt-4" side="end">
            <v-timeline-item
                size="small"
            >
              <div class="d-flex">
                <strong class="me-4">August 2021</strong>
                <div>
                  <strong>International School of Management</strong>
                  <div class="text-caption">
                    - Dekan <br>
                    - Dozent, Seminare, Workshops, Management Consulting <br>
                    - Prof. Dr. <br>
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
                dot-color="light-blue-lighten-3"
                size="small"
            >
              <div class="d-flex">
                <strong class="me-9">Dez 2000</strong>
                <div>
                  <strong>Dozent</strong>
                  <div class="text-caption mb-2">
                    IT-Center Dortmund GmbH
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
                size="small"
            >
              <div class="d-flex">
                <strong class="me-6">1990-1999</strong>
                <div>
                  <strong>Key Accounter</strong>
                  <div class="text-caption mb-2">
                    Konzeptionelle Marketing und Vertriebstätigkeit bei Großkunden
                  </div>
                </div>
              </div>
            </v-timeline-item>
            ‚

          </v-timeline>
        </v-col>

        <v-divider :thickness="5"></v-divider>

        <v-col class="card" cols="12" lg="4" md="12" sm="12" xs="12">
          <h2 class="text-center mt-5"> Anmelden</h2>
          <p class="text-center mt-5 mx-10">
            Sie sind Student vom mir und möchten sich Dateien herunterladen? Dann melden Sie
            sich mit den von mir bereitgestellten Anmeldedaten an!
          </p>
          <v-row class="pt-7">
            <v-col class="justify-center d-flex icon" cols="12">
              <Icon icon="ic:baseline-log-in"/>
            </v-col>
            <!--            <v-col class="justify-start d-flex icon" cols="6">-->
            <!--              <Icon icon="mdi:register"/>-->
            <!--            </v-col>-->
            <v-col class="justify-center d-flex" cols="12">
              <v-btn v-if="!user" class="text-white" style="background-color: black" variant="outlined"
                     @click="loginDialog=true">
                Anmelden
              </v-btn>
              <v-btn v-if="user" class="text-white" style="background-color: black" variant="outlined" @click="logout">
                Ausloggen
              </v-btn>
            </v-col>
            <!--              Wenn der user halt admin is dann button anzeigen-->
            <v-col v-if="user" class="justify-center d-flex" cols="12">
              <v-btn class="text-white" style="background-color: black" variant="outlined" @click="regist=true">
                Registrieren
              </v-btn>
            </v-col>

            <v-col class="justify-center d-flex" cols="12">
              <v-btn v-if="user" class="text-white" style="background-color: black" variant="outlined"
                     @click="$router.push('/files')">
                Dateien
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-divider :thickness="5"></v-divider>


        <v-col class="card" cols="12" lg="3" md="12" sm="12" xs="12">
          <h2 class="text-center mt-5"> Kontaktdaten</h2>
          <v-row class="justify-center d-flex mt-5">
            <v-col cols="2">
              <Icon class="iconDaten" icon="ic:round-email"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>Ralf.Brickau@smcg.de</p>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="2">
              <Icon class="iconDaten" icon="material-symbols:phone-android"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>0157 89636558</p>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="2">
              <Icon class="iconDaten" icon="fluent-mdl2:website"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <p>www.ralf.Brickau.de</p>
            </v-col>
          </v-row>

        </v-col>

      </v-row>
    </div>

    <div id="about"
         style="height: 0; position: relative; top: -50px; pointer-events: none;"
    ></div>

    <div class="containerThree desktop hidden-md-and-down mt-3 ml-0" style="min-height: 800px; width: 100vw">
      <v-row style="width: 100%;">
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px; margin-left: 25%">
            <Icon class="mt-5 text-grey" icon="material-symbols:person" style="font-size: 200px"/>
          </div>
          <div class="d-flex justify-center text-white" style="width: 100%; margin-left: 25%">
            <h1>About him</h1>
          </div>
          <div class="d-flex justify-center mt-4 text text-white"
               style="text-align: right;font-size: 17px; margin-left: 25%">
            <b>Prof. Dr. Ralf Brickau erwarb einen Doppelabschluss an der Fachhochschule in Dortmund und der University
              of Plymouth, nach einem Studium der Betriebswirtschaftslehre.

              1993 promovierte er an der University of Plymouth und gleichzeitig erhielt er ein Diplom in Marketing vom
              Chartered Institute of Marketing.


              Er war anschließend als Key Account Manager und Berater für eine Handels- und Dienstleistungsagentur in
              der Lebensmittelbranche tätig.


              Nach einigen Lehraufträgen wurde Brickau 1998 als Professor an die FHW Berlin berufen. Danach wechselte
              er an die FH Dortmund bevor er im Jahr 2001 zur ISM kam, an der er 7 Jahre Dekan und Studiengangsleiter
              war. Als Visiting Professor übernimmt er auch heute noch an verschiedenen Hochschulen im In- und Ausland
              Lehraufträge.


              In den letzten 25 Jahren war er als Berater für zahlreiche Unternehmen, u.a. Volkswagen, BMW, Mercedes-
              Benz, Signal Iduna, REWE, Edeka, Ferrero, Fujitsu, BVB 09, Lambertz, Frosta, Apetito und Progas tätig. Er
              ist Managing Partner der Synergetic Management Consulting Group.


              Analyse, Planung und Strategie spielt nicht nur in seinem Job, sondern auch in seiner Freizeit eine
              wichtige Rolle: er nimmt regelmäßig an Segelregatten teil.


              Seine Forschungsschwerpunkte sind Strategieentwicklung, Markenaufbau, Vertrauensmanagement,
              neurowissenschaftliche Aspekte des POS-Marketings und CRM/Vertriebsmanagement in verschiedenen
              Branchen.</b>
          </div>
        </v-col>

        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
            <Icon class="mt-5 text-grey" icon="ic:baseline-anchor" style="font-size: 200px; margin-right: 40%"/>
          </div>

          <div class="d-flex justify-center text-white" style="width: 100%">
            <h1 id="about" style="margin-right: 40%">About Company</h1>
          </div>

          <div class="d-flex justify-center mt-4 text text-white"
               style="text-align: left; font-size: 17px; margin-right: 20% ">
            <b>Die Synergetic Management Consulting Group ist ein internationales Beratungsunternehmen, das sich auf
              die
              Bereiche Strategie, Organisation, Prozesse, Technologie und Veränderungsmanagement spezialisiert hat.
              Unsere
              Kunden stammen aus verschiedenen Branchen und Regionen, und wir arbeiten eng mit ihnen zusammen, um
              maßgeschneiderte Lösungen für komplexe Geschäftsprobleme zu entwickeln.

              Unser Beratungsansatz ist ganzheitlich und zielt darauf ab, die Effektivität und Effizienz der
              Geschäftsprozesse
              unserer Kunden zu verbessern und eine nachhaltige Wertschöpfung zu erzielen. Wir setzen auf eine enge
              Zusammenarbeit mit unseren Kunden, um eine fundierte Analyse und eine erfolgreiche Umsetzung von
              Lösungen
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
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </div>

    <div class="containerThree tablet hidden-lg-and-up mt-3 ml-0" style="min-height: 800px; width: 100vw">
      <v-row class="pl-6" style="width: 100%;">
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
            <Icon class="mt-5 text-grey" icon="material-symbols:person" style="font-size: 200px"/>
          </div>
          <div class="d-flex justify-center text-white" style="width: 100%">
            <h1>About him</h1>
          </div>
          <div class="mt-4 text text-white"
               style="text-align: center;font-size: 17px; margin-left: 3%; margin-right: 3%">
            <b>Prof. Dr. Ralf Brickau erwarb einen Doppelabschluss an der Fachhochschule in Dortmund und der University
              of Plymouth, nach einem Studium der Betriebswirtschaftslehre.

              1993 promovierte er an der University of Plymouth und gleichzeitig erhielt er ein Diplom in Marketing vom
              Chartered Institute of Marketing.


              Er war anschließend als Key Account Manager und Berater für eine Handels- und Dienstleistungsagentur in
              der Lebensmittelbranche tätig.


              Nach einigen Lehraufträgen wurde Brickau 1998 als Professor an die FHW Berlin berufen. Danach wechselte
              er an die FH Dortmund bevor er im Jahr 2001 zur ISM kam, an der er 7 Jahre Dekan und Studiengangsleiter
              war. Als Visiting Professor übernimmt er auch heute noch an verschiedenen Hochschulen im In- und Ausland
              Lehraufträge.


              In den letzten 25 Jahren war er als Berater für zahlreiche Unternehmen, u.a. Volkswagen, BMW, Mercedes-
              Benz, Signal Iduna, REWE, Edeka, Ferrero, Fujitsu, BVB 09, Lambertz, Frosta, Apetito und Progas tätig. Er
              ist Managing Partner der Synergetic Management Consulting Group.


              Analyse, Planung und Strategie spielt nicht nur in seinem Job, sondern auch in seiner Freizeit eine
              wichtige Rolle: er nimmt regelmäßig an Segelregatten teil.


              Seine Forschungsschwerpunkte sind Strategieentwicklung, Markenaufbau, Vertrauensmanagement,
              neurowissenschaftliche Aspekte des POS-Marketings und CRM/Vertriebsmanagement in verschiedenen
              Branchen.</b>
          </div>
        </v-col>

        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="d-flex justify-center" style="width: 100%; max-height: 250px">
            <Icon class="mt-5 text-grey" icon="ic:baseline-anchor" style="font-size: 200px"/>
          </div>

          <div class="d-flex justify-center text-white" style="width: 100%">
            <h1 id="about">About Company</h1>
          </div>
          <div class="mt-4 text text-white"
               style="text-align: center; font-size: 17px; margin-left: 3%; margin-right: 3%">
            <b>Die Synergetic Management Consulting Group ist ein internationales Beratungsunternehmen, das sich auf
              die
              Bereiche Strategie, Organisation, Prozesse, Technologie und Veränderungsmanagement spezialisiert hat.
              Unsere
              Kunden stammen aus verschiedenen Branchen und Regionen, und wir arbeiten eng mit ihnen zusammen, um
              maßgeschneiderte Lösungen für komplexe Geschäftsprobleme zu entwickeln.

              Unser Beratungsansatz ist ganzheitlich und zielt darauf ab, die Effektivität und Effizienz der
              Geschäftsprozesse
              unserer Kunden zu verbessern und eine nachhaltige Wertschöpfung zu erzielen. Wir setzen auf eine enge
              Zusammenarbeit mit unseren Kunden, um eine fundierte Analyse und eine erfolgreiche Umsetzung von
              Lösungen
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
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {Icon} from '@iconify/vue';
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data: () => ({
    regist: false,
    loginDialog: false,
  }),
  name: 'HomeView',
  components: {
    Icon
  },
  methods: {
    logout() {
      this.$store.state.user = false
      this.$router.push("/")
    },
    login() {
      this.loginDialog = false;
      this.$store.state.user = true;
      router.push('/files')
    }
  }
}
</script>

<style>
.icon {
  font-size: 100px;
}

.iconDaten {
  font-size: 40px;
}

.cardOne {
  border-bottom-left-radius: 300px;
  border-top-left-radius: 300px;
}

.cardTwo {

}

.cardThree {
  border-bottom-right-radius: 300px;
  border-top-right-radius: 300px;
}

.card {
  background-color: dodgerblue;
}
</style>

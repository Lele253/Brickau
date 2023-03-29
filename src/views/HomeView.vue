<template>
  <div class="home">
    <div class="containerOne desktop hidden-md-and-down">
      <v-row class="ml-0" style="height: 750px;width: 100vw">
        <v-col cols="6" sm="6">


          <!--          Ansicht mit Umbruch in Unternehmensberatung und ohne Umbruch-->

          <h1 class="text-white" style="font-size: 40px; margin-left: 10%;margin-right: 10%; margin-top: 125px">
            Ihr Dozent für Management und Consulting


          </h1>

          <p class="text-white" style="font-size: 20px; margin-left: 10%;margin-right: 10%; margin-top: 12%">
            Dozent an der International School of Management und dem ITC in Dortmund - Gast-Dozent an diversen
            Hochschulen im In- und Ausland.</p>

          <p class="text-white mt-5" style="font-size: 20px; margin-left: 10%;margin-right: 10%; margin-top: 12%">
            Managing Partner der Synergetic Management Consulting Group
          </p>

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
            Ihr Dozent für Management und Consulting
          </h1>
        </v-col>
        <v-col cols="12">

          <p class="text-center text-white"
             style="font-size: 20px; margin-left: 10%;margin-right: 10%">
            Dozent an der International School of Management und dem ITC in Dortmund - Gast-Dozent an diversen
            Hochschulen im In- und Ausland.</p>
          <p class="text-center text-white mt-5"
             style="font-size: 20px; margin-left: 10%;margin-right: 10%">
            Managing Partner der Synergetic Management Consulting Group
          </p>
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

        <v-col class="cardOne card d-flex align-center" cols="12" lg="4"
               md="12" sm="12" xs="12">
          <v-row>
            <v-col class="ContainerTwoCardOneColInhalt" cols="12">
              <h2 class="mt-5"> Anmelden</h2>
            </v-col>
            <v-col class="ContainerTwoCardOneColInhalt" cols="12">
              <p class="text-center" style="width: 300px">
                Sie sind Student vom mir und möchten sich Dateien herunterladen? Dann melden Sie
                sich mit den von mir bereitgestellten Anmeldedaten an!
              </p>
            </v-col>
            <v-col class="ContainerTwoCardOneColInhalt icon" cols="12">
              <Icon icon="ic:baseline-log-in"/>
            </v-col>
            <v-col v-if="!user" class="ContainerTwoCardOneColInhalt" cols="12">
              <v-btn class="text-white" style="background-color: black" variant="outlined"
                     @click="loginDialog=true">
                Anmelden
              </v-btn>
            </v-col>
            <v-col v-if="user" class="ContainerTwoCardOneColInhalt" cols="12">
              <v-btn class="text-white" style="background-color: black" variant="outlined" @click="logout">
                Ausloggen
              </v-btn>
            </v-col>
            <v-col class="ContainerTwoCardOneColInhalt" cols="12">
              <v-btn v-if="user1 !== 'Admin' && user" class="text-white" style="background-color: black"
                     variant="outlined"
                     @click="$router.push('/files')">
                Dateien
              </v-btn>
              <v-btn v-if="user1 === 'Admin'" class="text-white" style="background-color: black"
                     variant="outlined"
                     @click="$router.push('/verwaltung')">
                Verwaltung
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="cardTwo card" cols="12" lg="4" md="12" sm="12" xs="12"
        >
          <h2 class="text-center mt-5">Werdegang</h2>
          <v-timeline align="start" side="end">
            <v-timeline-item size="small">
              <div class="d-flex">
                <strong class="me-3">seit August 2021</strong>
                <div>
                  <strong>International School of Management</strong>
                  <div class="text-caption">
                    - Dekan und Studiengangsleiter <br>
                    - Dozent für Strategy & Planning, Marketing, CRM & Sales Mgt, Brand Mgt, Consulting, Market Research
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-15">1999</strong>
                <div>
                  <strong>Berufung zum Professor an der FH Dortmund</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-15">1998</strong>
                <div>
                  <strong>Berufung zum Professor an der FHw Berlin</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-10">seit Dez 2000</strong>
                <div>
                  <strong>IT-Center</strong>
                  <div class="text-caption">
                    Dozent Am IT-Center Dortmund GmbH und verschiedenen VWA, Lehraufträge an Partner-Hochschulen der ISM
                    im Ausland
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-6">seit 1999</strong>
                <div>
                  <strong>Unternehmensberater für verschiedene Unternehmen</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-9">1994-1999</strong>
                <div>
                  <strong>Key Accounter</strong>
                  <div class="text-caption">
                    Konzeptionelle Marketing-, Beratungs- und Vertriebstätigkeit bei Großkunden in der Food-Industrie
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-13">seit 1999</strong>
                <div>
                  <strong>
                    BWL-Studien-Abschlüsse an FH Dortmund, University of Plymouth, Chartered Institute of Marketing, PhD
                    an der University of Plymouth
                  </strong>
                </div>
              </div>
            </v-timeline-item>

            <br>

          </v-timeline>
        </v-col>

        <template class="login">
          <v-row justify="center">
            <v-dialog
                v-model="loginDialog"
                persistent
                width="512"
            >
              <v-card>
                <v-form @submit.prevent="login">
                  <v-card-title>
                    <span class="text-h5">Anmelden</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                              v-model="email"
                              label="Email"
                              required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                              v-model="password"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showPassword ? 'text' : 'password'"
                              label="Passwort"
                              required
                              @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </v-col>
                        <v-col v-if="error !== ''" cols="12">
                          <v-alert color="red">Der Nutzername oder das Passwort ist falsch!
                          </v-alert>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        variant="text"
                        @click="loginDialog = false, error = ''"
                    >
                      Close
                    </v-btn>
                    <v-btn
                        @click="login"
                    >
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-row>

        </template>


        <!--        // ein row align-center mit col und cols="12"-->
        <!--        // icon mit text col dflex-->

        <v-col class="card cardThree justify-center align-center d-flex pl-8" cols="3" lg="3" md="12" sm="12" xs="12">

          <v-row class="d-flex">
            <v-col cols="12">
              <h2 class="ml-16 mt-5">Kontaktdaten</h2>
            </v-col>
            <v-col class="align-center ml-5 d-flex" cols="12">
              <Icon class="iconDaten" icon="ic:round-email"/>
              <a class="ml-3" href="mailto:Ralf.Brickau@smcg.de">Ralf.Brickau@smcg.de</a>
            </v-col>
            <v-col class="d-flex align-center ml-5" cols="12">
              <Icon class="iconDaten" icon="material-symbols:phone-android"/>
              <a class="ml-3" href="tel:+4923197523952">+49 231 97523952</a>
            </v-col>
            <v-col class="d-flex align-center ml-5" cols="12">
              <Icon class="iconDaten" icon="fluent-mdl2:website"/>
              <a class="ml-3" href="https://www.brickau.de" target="_blank">www.brickau.de</a>
            </v-col>
          </v-row>

        </v-col>

      </v-row>
    </div>

    <div class="containerTwo tablet hidden-lg-and-up mt-10">
      <v-row class="mx-0" style="height: 50%; width: 100%;">

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
            <v-col class="justify-center d-flex" cols="12">
              <v-btn
                  v-if="user"
                  class="text-white" style="background-color: black"
                  variant="outlined"
                  @click="$router.push('/files')">
                Dateien
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-divider :thickness="5"></v-divider>

        <v-col class="card" cols="12" lg="5" md="12" sm="12"
               xs="12">
          <h2 class="text-center mt-5">Werdegang</h2>
          <v-timeline align="start" side="end">
            <v-timeline-item size="small">
              <div class="d-flex">
                <strong class="me-3">seit August 2021</strong>
                <div>
                  <strong>International School of Management</strong>
                  <div class="text-caption">
                    - Dekan und Studiengangsleiter <br>
                    - Dozent für Strategy & Planning, Marketing, CRM & Sales Mgt, Brand Mgt, Consulting, Market Research
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-15">1999</strong>
                <div>
                  <strong>Berufung zum Professor an der FH Dortmund</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-15">1998</strong>
                <div>
                  <strong>Berufung zum Professor an der FHw Berlin</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-10">seit Dez 2000</strong>
                <div>
                  <strong>IT-Center</strong>
                  <div class="text-caption">
                    Dozent Am IT-Center Dortmund GmbH und verschiedenen VWA, Lehraufträge an Partner-Hochschulen der ISM
                    im Ausland
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-6">seit 1999</strong>
                <div>
                  <strong>Unternehmensberater für verschiedene Unternehmen</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex">
                <strong class="me-9">1994-1999</strong>
                <div>
                  <strong>Key Accounter</strong>
                  <div class="text-caption">
                    Konzeptionelle Marketing-, Beratungs- und Vertriebstätigkeit bei Großkunden in der Food-Industrie
                  </div>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="black" size="small">
              <div class="d-flex justify-center">
                <strong class="me-13">seit 1999</strong>
                <div>
                  <strong>
                    BWL-Studien-Abschlüsse an FH Dortmund, University of Plymouth, Chartered Institute of Marketing, PhD
                    an der University of Plymouth
                  </strong>
                </div>
              </div>
            </v-timeline-item>

            ,

          </v-timeline>
        </v-col>

        <v-divider :thickness="5"></v-divider>


        <v-col class="card" cols="12" lg="3" md="12" sm="12" xs="12">
          <h2 class="text-center mt-5"> Kontaktdaten</h2>
          <v-row class="justify-center d-flex mt-5">
            <v-col cols="2">
              <Icon class="iconDaten" icon="ic:round-email"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <a href="mailto:ralf.brickau@ism.de">Ralf.Brickau@ism.de</a>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="2">
              <Icon class="iconDaten" icon="material-symbols:phone-android"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <a href="tel:+4923197523952">0231 97523952</a>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="2">
              <Icon class="iconDaten" icon="fluent-mdl2:website"/>
            </v-col>
            <v-col class="mt-2" cols="5" lg="5" sm="4">
              <a href="https://www.brickau.de">www.brickau.de</a>
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
            <b>Die Synergetic Management Consulting Group ist ein Beratungsunternehmen, das sich u.a. auf die Bereiche
              Strategische Analyse, Strategieentwicklung, Markenentwicklung, Vertrauens-Mgt., und Neurowissenschaftliche
              PoS-Gestaltung spezialisiert hat. Unsere Kunden stammen aus verschiedenen Branchen und Regionen, und wir
              arbeiten eng mit ihnen zusammen, um maßgeschneiderte Lösungen für deren strategische Ausrichtung zu
              entwickeln. Unser Beratungsansatz ist ganzheitlich und zielt darauf ab, die Effektivität und Effizienz
              unserer Kunden zu verbessern und eine nachhaltige Wertschöpfung zu erzielen. Wir setzen auf eine enge
              Zusammenarbeit mit unseren Kunden, um eine fundierte Analyse und eine erfolgreiche Umsetzung von Lösungen
              zu gewährleisten. Unser Leistungsportfolio umfasst auch die Durchführung von Schulungen und Workshops für
              Mitarbeiter*innen und Manager*innen. Unser kleines erfahrenes Team von Beratern verfügt über
              unterschiedliche fachliche Hintergründe und Branchenkenntnisse. Wir sind bekannt für unsere qualitativ
              hochwertigen Beratungsdienstleistungen und unsere umfassende Betreuung und Unterstützung unserer Kunden.
              Insgesamt sind wir bei der Synergetic Management Consulting Group stolz darauf, Unternehmen dabei zu
              unterstützen, komplexe Herausforderungen zu bewältigen und ihre Strategien zu verbessern, um nachhaltige
              Wertschöpfung zu erzielen.</b>
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
            <b>Die Synergetic Management Consulting Group ist ein Beratungsunternehmen, das sich u.a. auf die Bereiche
              Strategische Analyse, Strategieentwicklung, Markenentwicklung, Vertrauens-Mgt., und Neurowissenschaftliche
              PoS-Gestaltung spezialisiert hat. Unsere Kunden stammen aus verschiedenen Branchen und Regionen, und wir
              arbeiten eng mit ihnen zusammen, um maßgeschneiderte Lösungen für deren strategische Ausrichtung zu
              entwickeln. Unser Beratungsansatz ist ganzheitlich und zielt darauf ab, die Effektivität und Effizienz
              unserer Kunden zu verbessern und eine nachhaltige Wertschöpfung zu erzielen. Wir setzen auf eine enge
              Zusammenarbeit mit unseren Kunden, um eine fundierte Analyse und eine erfolgreiche Umsetzung von Lösungen
              zu gewährleisten. Unser Leistungsportfolio umfasst auch die Durchführung von Schulungen und Workshops für
              Mitarbeiter*innen und Manager*innen. Unser kleines erfahrenes Team von Beratern verfügt über
              unterschiedliche fachliche Hintergründe und Branchenkenntnisse. Wir sind bekannt für unsere qualitativ
              hochwertigen Beratungsdienstleistungen und unsere umfassende Betreuung und Unterstützung unserer Kunden.
              Insgesamt sind wir bei der Synergetic Management Consulting Group stolz darauf, Unternehmen dabei zu
              unterstützen, komplexe Herausforderungen zu bewältigen und ihre Strategien zu verbessern, um nachhaltige
              Wertschöpfung zu erzielen.</b>
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
import axios from "axios";

export default {
  async created() {
    this.getOrdner()
    const respons = await axios.get('http://leandro-graf.de:8080/auth/user');
    await this.$store.dispatch('user', respons.data);
    this.test()

  },
  computed: {
    ...mapGetters(['user']),

  },
  data: () => ({
    password: '',
    email: '',
    ordnerpfad: '',
    regist: false,
    loginDialog: false,
    status: '',
    user1: '',
    rechte: ['Admin', 'Nutzer'],
    ordner: [],
    erstellterOrdner: '',
    showPassword: false,
    error: ''
  }),
  name: 'HomeView',
  components: {
    Icon
  },

  methods: {
    test() {
      this.user1 = this.user.status
    },

    async getOrdner() {
      try {
        const response = await axios.get(
            "http://leandro-graf.de:8080/auth/ordner", {}
        );
        let x = response.data
        x.forEach((i) => {
          console.log(i == '.DS_Store')
          if (i != '.DS_Store') {
            this.ordner.push(i)
          }
        })
      } catch (error) {
        console.log("error");
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      location.reload();
    },
    async login() {
      try {
        const response = await axios.post('http://leandro-graf.de:8080/auth/login',
            {
              email: this.email,
              password: this.password
            });
        localStorage.setItem('token', response.data)
        await this.$store.dispatch('user', response.data.user)

        await location.reload()

      } catch (e) {
        this.error = e;
      }
    },
    async registrieren() {

      const respons = await axios.post('http://leandro-graf.de:8080/auth/Regist', {
        email: this.email,
        password: this.password,
        pfad: '/ISM/' + this.ordnerpfad + '/',
        status: this.status
      });
      console.log(respons)

    }
  },


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
  background-color: lightskyblue;
}

.ContainerTwoCardOneColInhalt {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 75px;
  /*text-white d-flex justify-end align-center*/
}
</style>

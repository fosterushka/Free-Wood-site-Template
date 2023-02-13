<template>
  <NavBar :city-name="cityName" :phone="phone"/>
  <IntroSection :city-name="cityName"/>
  <Advantages :advantages="advantages"/>
  <Catalog/>
  <Footer/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import IntroSection from "./components/IntroSection.vue";
import Advantages from "./components/Advantages.vue";
import Catalog from "./components/Catalog.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Advantages,
    Footer,
    IntroSection,
    Catalog
  },
  data() {
    return {
      cityName: "asdsa",
      phone: "adasdsdsaddsa",
      advantages() {
        return [
          {
            img: "assets/img/w1.png",
            text: "Качество древесины,<br> и честный объем"
          },
          {
            img: "assets/img/w2.png",
            text: "Бесплатная доставка"
          },
          {
            img: "assets/img/w3.png",
            text: "Доступные цены"
          }
        ];
      }
    }
  },
  computed: {}
}
</script>
<style scoped></style>
<template>
  <v-carousel height="100%" hide-delimiters progress="primary">
    <v-carousel-item v-for="(s, index) in data" :key="index">
      <v-sheet height="100%">
        <v-img :src="getImagePath(s.img)" :alt="s.title" cover />
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    img: "cyberpunk-1.jpg",
    link: "https://www.freepik.com/free-ai-image/cyberpunk-woman-warrior-portrait_60188073.htm",
    title: "Woman Warrior",
  },
  {
    img: "cyberpunk-2.jpg",
    link: "https://www.freepik.com/free-ai-image/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic_186023599.htm",
    title: "Street Night",
  },
  {
    img: "cyberpunk-3.jpg",
    link: "https://www.freepik.com/free-ai-image/illustration-rain-futuristic-city_170846001.htm",
    title: "Rain City",
  },
]);

const getImagePath = (imageFileName: string) => {
  return new URL(`../assets/${imageFileName}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.v-sheet {
  display: flex;
  position: relative;

  .v-img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>
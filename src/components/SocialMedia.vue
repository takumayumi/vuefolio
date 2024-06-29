<template>
  <ul>
    <li v-for="(sm, index) in data" :key="index">
      <a :href="sm.link" :title="sm.icon" target="_blank">
        <v-icon :icon="`mdi-${sm.icon}`" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref({
  github: {
    icon: "github",
    link: "https://github.com/",
  },
  instagram: {
    icon: "instagram",
    link: "https://www.instagram.com/",
  },
  linkedin: {
    icon: "linkedin",
    link: "https://www.linkedin.com/",
  },
  stackOverflow: {
    icon: "stack-overflow",
    link: "https://stackoverflow.com/",
  },
  twitter: {
    icon: "twitter",
    link: "https://www.twitter.com/",
  },
})
</script>

<style lang="scss" scoped>
ul {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;

  .v-icon {
    color: #FDF0FF;
  }
}

ul {
  background-color: #87548F;
}

.v-theme--dark ul {
  background-color: #303030;
}
</style>

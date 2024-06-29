<template>
  <section>
    <h2>SKILLS</h2>
    <ul>
      <li v-for="(s, index) in data" :key="index" class="center">
        <v-avatar color="surface-variant" size="x-large">
          <v-icon :icon="`mdi-${s.icon}`" />
        </v-avatar>
        <p>{{ s.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    icon: "web",
    text: "Front-end Web Development",
  },
  {
    icon: "tablet-cellphone",
    text: "Responsive UI/UX Design",
  },
  {
    icon: "open-in-app",
    text: "Cross-Browser Compatibility",
  },
  {
    icon: "ab-testing",
    text: "Testing / Debugging",
  },
  {
    icon: "wheelchair-accessibility",
    text: "Web Accessibility",
  },
  {
    icon: "flash",
    text: "Web Performance Optimization",
  },
  {
    icon: "magnify-scan",
    text: "Search Engine Optimization",
  },
  {
    icon: "head-question",
    text: "Problem-Solving",
  },
  {
    icon: "account-group",
    text: "Agile Development",
  },
  {
    icon: "database-outline",
    text: "Data Validation and Management",
  },
])
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;

  li {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
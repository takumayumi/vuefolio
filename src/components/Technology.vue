<template>
  <section>
    <h2>TOOLS AND TECHNOLOGIES</h2>
    <div>
      <v-chip v-for="(v, index) in data" :key="index" size="large">{{ v }}</v-chip>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref(["HTML 5", "CSS 3", "JavaScript", "SASS", "React", "Vue.js", "Bootstrap", "Git", "Less", "Jira", "Bitbucket", "NPM", "Node.js", "Figma", "Confluence", "Trello", "Slack", "Yarn"])
</script>

<style lang="scss" scoped>
div {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(6, 1fr);

  .v-chip {
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 767px) {
  div {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
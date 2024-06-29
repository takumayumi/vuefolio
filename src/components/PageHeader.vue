<template>
  <v-app-bar :elevation="0">
    <v-container>
      <v-row>
        <v-col>
          <v-app-bar-title>
            <router-link class="center" to="/">
              <img src="@/assets/yumi_pikachu.png" alt="main-logo" height="40" width="40" />
              <span>YUMI TAKUMA / Front-End Developer</span>
            </router-link>
          </v-app-bar-title>
        </v-col>
        <v-col>
          <div class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/resume">Resume</router-link>
            <router-link to="/projects">Projects</router-link>
            <v-icon @click="toggleDarkMode" v-if="isDarkMode" icon="mdi-lightbulb-on-10" variant="button" />
            <v-icon @click="toggleDarkMode" v-else icon="mdi-lightbulb-night" variant="button" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

let isDarkMode = ref(false);

onMounted(() => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkMode.value = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')!) : prefersDarkMode;
  updateDarkModeClass();
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
  updateDarkModeClass();
}

const updateDarkModeClass = () => {
  if (isDarkMode.value) {
    theme.global.name.value = 'dark';
  } else {
    theme.global.name.value = 'light';
  }

}
</script>

<style lang="scss" scoped>
.menu {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 100%;
  justify-content: end;
}

@media (max-width: 767px) {
  .v-col:first-child {
    display: none;
  }
}
</style>
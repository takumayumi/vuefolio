/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi'

const light = {
  dark: false,
  colors: {
    background: '#FEFCFF',
    surface: '#FDF0FF',
    'surface-variant': '#596387',
    'on-surface-variant': '#FDF0FF',
    primary: '#A0B0EE',
    'primary-darken-1': '#596387',
    secondary: '#EBF8FF',
    'secondary-darken-1': '#A5D8F3',
    error: '#FDF0FF'
  },
  variables: {
    'theme-on-background': '#596387',
    'theme-on-surface': '#596387',
    'theme-primary': '#FEFCFF',
  }
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      // darkTheme,
      light,
    },
  },
})

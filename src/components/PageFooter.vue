<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col>
          <p>© 2023 by <a href="takumayumi.pages.dev" target="_blank" title="@takumayumi">@takumayumi</a></p>
        </v-col>
        <v-col>
          <p>Made with <v-icon icon="$vuetify" variant="text" /></p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
footer {
  flex: none;

  .v-col:last-child {
    text-align: right;
  }
}

@media (max-width: 767px) {
  .v-col:last-child {
    display: none;
  }
}
</style>
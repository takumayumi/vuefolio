<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col md="5">
        <v-card>
          <div>
            <div>
              <v-img src="../assets/yumi_mimikkyu.png" alt="yumi_mimikkyu" height="140" width="140" />
            </div>
            <p>Yumi Takuma</p>
            <p>Front-End Developer</p>
          </div>
          <SocialMedia />
        </v-card>
      </v-col>
      <v-col md="7">
        <p>Quisque mauris ante, fermentum rutrum ante quis, egestas efficitur elit. Aliquam commodo tellus sit amet ex
          finibus malesuada vel congue lorem. Donec pharetra diam vitae consequat tempor.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-container {
  flex: 1 1 100%;
  min-height: 500px;
  padding: 0;

  .v-row {
    height: 100%;
  }

  .v-col {
    position: relative;

    .v-card,
    >p {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .v-card {
      border-radius: 20px;
      right: -140px;
      width: 400px;

      >div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;

        >div {
          border-radius: 100%;
          margin-bottom: 20px;
          padding: 40px;
        }
      }
    }

    >p {
      left: 180px;
      text-align: justify;
      width: 50%;
    }
  }
}

.v-row {
  .v-col {
    &:first-child {
      background-color: #A5D8F3;
    }

    .v-card {
      background-color: #EBF8FF;

      >div {
        >div {
          background-color: #87548F;
        }
      }
    }
  }
}

.v-theme--dark .v-row {
  .v-col {
    &:first-child {
      background-color: rgba(255, 255, 255, 0.25);
    }

    .v-card {
      background-color: #232323;

      >div {
        >div {
          background-color: #616161;
        }
      }
    }
  }
}

@media (max-width: 959px) {
  .v-container {
    position: relative;

    .v-col {
      position: static;

      .v-card {
        max-width: 400px;
        left: 50%;
        right: unset;
        transform: translate(-50%, -50%);
        top: 50%;
        width: 80%;
      }

      &:last-child p {
        display: none;
      }
    }
  }
}
</style>

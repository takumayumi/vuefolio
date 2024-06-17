<template>
  <div class="about-me">
    <div class="about-me__info gutter-y">
      <AlternateCardVue />
    </div>
    <div class="about-me__intro gutter gutter-y">
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <p>
        Curabitur finibus felis quis consectetur blandit. Phasellus dui nulla, tristique ut ornare ut, suscipit ut nisi. Etiam sed purus at orci vehicula ornare id vel metus. Quisque varius iaculis iaculis. Donec scelerisque, ante sed cursus lacinia, urna neque vulputate odio, sed bibendum nisl dui in urna. Proin nec lectus orci. Morbi iaculis felis et risus fringilla, quis commodo risus maximus.
      </p>
    </div>
  </div>
</template>

<script>
import AlternateCardVue from "./AlternateCard.vue";

export default {
  name: "AboutMe",
  components: {
    AlternateCardVue,
  },
};
</script>

<style lang="scss" scoped>
.about-me {
  align-items: center;
  display: flex;
  flex-direction: column;
  &__info {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    position: relative;
    width: 100%;
    &:before {
      background-color: var(--color-light-accent-2);
      content: "";
      bottom: 0;
      display: block;
      height: 300px;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  }
  &__intro {
    background-color: var(--color-light-accent-2);
    line-height: 1.5;
    h3 {
      font-weight: 700;
      margin-bottom: 24px;
    }
  }
}
@media screen and (min-width: 768px) {
  .about-me {
    flex-direction: row;
    &__info {
      align-items: flex-end;
      min-height: 600px;
      height: calc(100vh - 7.2em);
      justify-content: center;
      padding-top: 60px;
      width: 50%;
      &:before {
        height: 100%;
        top: 0;
        width: 85%;
      }
    }
    &__intro {
      background-color: transparent;
      color: unset;
      padding-right: 24%;
      width: 50%;
    }
  }
}
</style>

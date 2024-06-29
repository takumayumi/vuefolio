<template>
  <section>
    <h2>EXPERIENCE</h2>
    <div class="experience" v-for="(e, index) in data" :key="index">
      <v-img :src="getImagePath(e.img)" :alt="e.img" v-if="e.img" height="120" width="120" />
      <div class="details">
        <p v-if="e.date">{{ e.date }}</p>
        <p v-if="e.position">{{ e.position }}</p>
        <p v-if="e.company">{{ e.company }}</p>
        <p v-if="e.location">{{ e.location }}</p>
      </div>
      <ul v-if="e.descriptions" lines="one">
        <li v-for="(desc, idx) in e.descriptions" :key="idx">{{ desc }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    img: "sushi_dog.png",
    date: "Mar 2021 - Present",
    position: "Position Title",
    company: "Company Name",
    location: "Location",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget semper turpis, a bibendum risus. Vestibulum porttitor rhoncus felis non porta.",
      "Mauris gravida pharetra neque id gravida. Suspendisse a quam tellus. Integer eu accumsan leo. In fermentum, mauris nec maximus pulvinar, urna sapien porta elit, vitae viverra dolor diam mattis mauris.",
      "Aliquam tincidunt scelerisque efficitur. Fusce lectus elit, ornare ut metus vitae, ornare fermentum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "Etiam sollicitudin odio nec nunc tempor, at feugiat diam finibus. Sed a lacus rutrum, iaculis libero vitae, dignissim felis."
    ]
  },
  {
    img: "sushi_dog.png",
    date: "Nov 2018 - Jan 2021",
    position: "Position Title",
    company: "Company Name",
    location: "Location",
    descriptions: [
      "Aliquam ultricies justo tristique vehicula finibus. Nam ac neque tortor. Curabitur scelerisque dui sed mi tincidunt convallis.",
      "Aenean non erat ac nunc cursus laoreet quis quis metus. Vestibulum suscipit in dui non elementum.",
      "Curabitur ut volutpat arcu, ac sollicitudin felis. Maecenas aliquet ultricies condimentum.",
      "Nullam ornare, dui vel tincidunt elementum, turpis augue ultricies nunc, dictum blandit risus libero ut justo."
    ]
  },
  {
    img: "sushi_dog.png",
    date: "Jul 2016 - Oct 2018",
    position: "Position Title",
    company: "Company Name",
    location: "Location",
    descriptions: [
      "Maecenas lorem nisl, aliquet in tristique at, vehicula vitae massa. Nam eget leo felis.",
      "Ut sollicitudin interdum suscipit. Phasellus vulputate ex consectetur scelerisque rhoncus. Donec vulputate risus quis lobortis suscipit.",
      "uspendisse et nunc lorem. Phasellus vestibulum egestas dui in commodo.",
      "Cras augue dui, posuere vitae posuere ut, elementum ut turpis. Sed suscipit ex commodo velit rutrum, eu tincidunt est efficitur.",
      "Fusce eget ex congue, condimentum sem non, malesuada eros. Quisque nec nulla arcu."
    ]
  }
]);

const getImagePath = (imageFileName: string) => {
  return new URL(`../assets/${imageFileName}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.experience {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px 60px;

  .v-img {
    margin: 0 auto;
  }

  .details {
    grid-column: 2 / 4;
  }

  ul {
    grid-column: 1 / 4;
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 20px;
  }
}

.experience {
  background-color: #EBF8FF;
}

.v-theme--dark .experience {
  background-color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 767px) {
  .experience {
    .v-img {
      display: none;
    }

    .details {
      grid-column: 1 / 4;
    }
  }
}
</style>
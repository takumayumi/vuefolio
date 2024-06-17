<template>
  <div class="my-resume gutter gutter-y">
    <section>
      <h3>Experience</h3>
      <ExperienceCard :item="work1" />
      <ExperienceCard :item="work2" />
    </section>
    <section>
      <h3>Education</h3>
      <ExperienceCard :item="college" />
    </section>
    <section>
      <h3>Skills</h3>
      <div class="my-resume__card">
        <PrimarySkills />
        <TechnicalSkills />
      </div>
    </section>
    <section>
      <h3>Language</h3>
      <ExperienceCard :item="language" />
    </section>
  </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";
import PrimarySkills from "./PrimarySkills.vue";
import TechnicalSkills from "./TechnicalSkills.vue";

export default {
  app: "MyResume",
  components: {
    ExperienceCard,
    PrimarySkills,
    TechnicalSkills,
  },
  data() {
    return {
      work1: {
        img: "sushi_dog.png",
        date: "Mar 2021 - Present",
        position: "Position Title",
        company: "Company Name",
        location: "Location",
        descriptions: [
          "Sed porttitor pellentesque purus, ut aliquam mauris feugiat sit amet. Phasellus ac interdum massa, nec dignissim ligula. Donec lacinia eros sed velit imperdiet auctor. Donec suscipit a arcu at tincidunt. Etiam congue lectus nunc, vitae ullamcorper tortor auctor in. Nullam semper urna id urna interdum pulvinar.",
          "Quisque dapibus, enim non rhoncus pulvinar, sapien justo egestas enim, imperdiet lacinia sapien nisl id massa. Nunc auctor risus eget lectus interdum, eget malesuada nunc accumsan. Fusce non diam semper, blandit ex efficitur, elementum libero.",
        ],
        technology:
          "Backbone.js, Figma, Google Tag Manager, Gulp, JavaScript, jQuery, MS Azure, Next.js, Node.js, NPM, Post CSS, React, Sass, SEO, Sitecore 10, Sitecore JSS, Slick Carousel, Tailwind CSS, Typescript, Zurb Foundation, Yarn",
      },
      work2: {
        img: "sushi_dog.png",
        date: "Nov 2018 - Jan 2021",
        position: "Position Title",
        company: "Company Name",
        location: "Location",
        descriptions: [
          "Sed porttitor pellentesque purus, ut aliquam mauris feugiat sit amet. Phasellus ac interdum massa, nec dignissim ligula. Donec lacinia eros sed velit imperdiet auctor. Donec suscipit a arcu at tincidunt. Etiam congue lectus nunc, vitae ullamcorper tortor auctor in. Nullam semper urna id urna interdum pulvinar.",
          "Quisque dapibus, enim non rhoncus pulvinar, sapien justo egestas enim, imperdiet lacinia sapien nisl id massa. Nunc auctor risus eget lectus interdum, eget malesuada nunc accumsan. Fusce non diam semper, blandit ex efficitur, elementum libero.",
        ],
        technology:
          "ASP.NET, Bootstrap, C#, Confluence, DataTables, Dynatable, HTML, JIRA, jQuery, Material UI, MS SQL Node.js, NPM, Razor, React, Sass, Selectize, Webpack",
      },
      language: {
        descriptions: [
          "Tagalog (Native)",
          "Pangasinan (Native)",
          "English (Professional)",
          "Ilocano (Elementary)",
          "Japanese (Elementary)",
        ],
      },
      college: {
        img: "sushi_dog.png",
        date: "2011 - 2015",
        position: "Degree",
        company: "Company Title",
        location: "Location",
        technology:
          "CSS, Eclipse, HTML, IntelliJ IDEA, Java, JavaScript, MySQL, Apache NetBeans, PHP, SQL, Subversion",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.my-resume {
  align-items: center;
  background-color: var(--color-light-accent-2);
  display: flex;
  flex-direction: column;
  gap: 30px;
  section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 780px;
    width: 100%;
    h3 {
      color: var(--color-dark-primary);
      font-size: 20px;
      font-weight: 700;
    }
  }
  &__card {
    background-color: var(--color-light-accent-1);
    border-radius: 6px;
    box-shadow: 0 6px 12px var(--color-dark-accent);
    font-size: 14px;
    line-height: 1.5;
    padding: 30px;
  }
}
@media screen and (min-width: 768px) {
  .my-resume {
    gap: 42px;
    section {
      gap: 30px;
      h3 {
        font-size: 28px;
      }
    }
  }
}
</style>

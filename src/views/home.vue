<template>
  <div class="home page-container">
    <div class="banner" :style="{backgroundPosition: `${offsetX}px ${offsetY}px`}"></div>
    <div
      class="page-head d-flex flex-direction-column align-items-center justify-content-center"
    >
      <p class="mt-0 mb-4 fw-7 fs-8">I'm Tian Chen</p>
      <p class="mt-0 mb-8 fw-1 fs-1">
        Java Engineer | Front-end Development Engineer
      </p>
      <div class="mt-4 d-flex justify-content-between">
        <img class="mr-8" :src="getBg('mail.svg')" />
        <img class="mr-8" :src="getBg('GithubFilled.svg')" />
        <img class="mr-8" :src="getBg('LinkedinFilled.svg')" />
        <img :src="getBg('cv.svg')" />
      </div>
    </div>
    <div class="projects content-card clear-float">
      <h2 class="mt-0">Projects</h2>
      <div class="clear-float mt-5">
        <div
          v-for="(item, index) in MY_PROJECTS"
          :key="index"
          class="project-item p-4 mb-4 float-left overflow-hidden"
        >
          <h3 class="mt-0 mb-4 fs-3">&lt; {{ item.name }} &gt;</h3>

          <span
            class="d-inline-block ellipsis overflow-hidden mb-4"
            :alt="item.desc"
            >{{ item.desc }}</span
          >
          <div class="tags">
            <span
              v-for="(v, i) in item.keywords"
              :key="i"
              class="keyword"
              :style="{ backgroundColor: getColor(v) }"
            >
              {{ v }}
            </span>
          </div>
          <div
            class="cover-img"
            :style="{ backgroundImage: `url(${getBg(item.img)})` }"
          ></div>
        </div>
      </div>
    </div>
    <div class="about content-card d-flex">
      <div class="photo"></div>
      <div class="flex-1 about-text p-4">
        <h3>Anout Me</h3>
        <div v-html="INTRODUCTION"></div>
      </div>
    </div>
    <div class="intro content-card">
      <h2 class="mt-0">Introduction</h2>
      <div v-html="INTRODUCTION"></div>
    </div>

    <div class="work-exp content-card">
      <h2 class="mt-0">work experience</h2>
    </div>
    <div class="skills content-card">
      <h2 class="mt-0">Skills</h2>
    </div>
  </div>
</template>
  
  <script>
import { INTRODUCTION, MY_PROJECTS } from "@/constant";
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      INTRODUCTION,
      MY_PROJECTS,
      windowWidth: 0,
      windowHeight: 0,
      offsetX: 0,
      offsetY: 0
    };
  },
  computed: {
    getBg() {
      return function (url) {
        return require(`@/assets/${url}`);
      };
    },
    getColor() {
      return function (keyword) {
        if (keyword == "Java") {
          return "#ef8d07";
        } else if (keyword == "Spring") {
          return "#6db33f";
        } else if (keyword == "Vue") {
          return "#42b983";
        } else if (keyword == "ElementUI") {
          return "#409eff";
        } else if (keyword == "PostgreSQL") {
          return "#336791";
        } else if (keyword == "Php") {
          return "#7a86b8";
        } else if (keyword == "Bootstrap") {
          return "#712cf9";
        } else if (keyword == "MySQL") {
          return "#3E6E93";
        } else if (keyword == "HTML") {
          return "#e54c21";
        } else if (keyword == "Unity") {
          return "#000000";
        } else if (keyword == "C++") {
          return "#048";
        } else {
          return "#1890ff";
        }
      };
    },
  },
  methods: {
    updateMousePosition(event) {
      let x = Math.ceil((event.clientX - this.windowWidth / 2) / 20);
      let y = Math.ceil((event.clientY - this.windowHeight / 2) / 20);
      x = x > 20 ? 20 : (x < -20 ? -20 : x);
      y = y > 20 ? 20 : (y < -20 ? -20 : y);
      this.offsetX = 0 - x;
      this.offsetY = 0 - y;
    },
  },
  mounted() {
    this.windowWidth = document.documentElement.clientWidth;
    this.windowHeight = document.documentElement.clientHeight;
    window.addEventListener("mousemove", this.updateMousePosition);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.updateMousePosition);
  },
};
</script>
  
  <style>
@import "../style/home.scss";
</style>
  
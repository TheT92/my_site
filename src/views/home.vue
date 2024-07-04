<template>
  <div class="home page-container">
    <div class="banner overflow-hidden mt-4">
      <div
        class="banner-content d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div class="avatar mb-6"></div>
        <h1 class="mt-0 mb-0 fw-1">Hello! I'm</h1>
        <h1 class="mt-0 mb-4 fw-7">Tian Chen</h1>
        <h3 class="mt-0 mb-4 fw-1">Experienced Front-end development engineer</h3>
        <h3 class="mt-0 mb-4 fw-1">Experienced Java development engineer</h3>
      </div>
    </div>
    <div class="intro content-card">
      <h2 class="mt-0">Introduction</h2>
      <div v-html="INTRODUCTION"></div>
    </div>
    <div class="about content-card">
      <h2 class="mt-0">About Me</h2>
      <div v-html="INTRODUCTION"></div>
    </div>
    <div class="projects content-card clear-float">
      <h2 class="mt-0">Projects</h2>
      <div
        v-for="(item, index) in MY_PROJECTS"
        :key="index"
        class="project-item pl-2 pr-2 float-left"
      >
        <div
          class="cover-img"
          :style="{ backgroundImage: `url(${getBg(item.img)})` }"
        ></div>
        <h3 class="mt-2 mb-2">{{ item.name }}</h3>
        <div class="mb-2">
          <span v-for="(v, i) in item.keywords" :key="i" class="keyword" :style="{ backgroundColor: getColor(v) }">
            {{ v }}
          </span>
        </div>

        <span class="d-inline-block ellipsis overflow-hidden" :alt="item.desc">{{ item.desc }}</span>
      </div>
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
        if(keyword == 'Java') {
          return '#ef8d07';
        } else if(keyword == 'Spring') {
          return '#6db33f';
        } else if(keyword == 'Vue') {
          return '#42b983';
        } else if(keyword == 'ElementUI') {
          return '#409eff';
        } else if(keyword == 'PostgreSQL') {
          return '#336791';
        } else if(keyword =='Php') {
          return '#7a86b8';
        } else if(keyword == 'Bootstrap') {
          return '#712cf9';
        } else if(keyword =='MySQL') {
          return '#3E6E93';
        } else if(keyword == 'HTML') {
          return '#e54c21';
        } else if(keyword == 'Unity') {
          return '#000000';
        } else if(keyword == 'C++') {
          return '#048';
        }else {
          return '#1890ff';
        }
      };
    }
  },
  methods: {},
};
</script>
  
  <style>
@import "../style/home.scss";
</style>
  
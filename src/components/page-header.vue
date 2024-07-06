<template>
  <div class="page-header full-width d-flex justify-content-between align-items-center pl-4 pr-4">
    T!an
    <ul class="list-style-none">
      <li
        v-for="(item, index) in HEADER_LINKS"
        :key="index"
        class="d-inline-block"
      >
        <router-link
          :to="item.link"
          class="text-decoration-none text-white pl-8 pr-0"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
  
<script>
import { HEADER_LINKS } from "@/constant";
export default {
  name: "PageHeader",
  data() {
    return {
      HEADER_LINKS,
    };
  },
};
</script>
  
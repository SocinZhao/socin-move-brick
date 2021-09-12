<template>
  <div>
    <viewer :images="imagesList">
      <img v-for="src in imagesList" :src="src" :key="src" />
    </viewer>
  </div>
</template>
<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
Vue.use(Viewer);
export default {
  data() {
    return {
      imagesList: [
        "https://cdn.wwads.cn/creatives/6dtZJUntvUWrhKmLnpUciLGopdpxt3XFgc6v0cfJ.png",
        "https://cdn.wwads.cn/creatives/icIj2AZF5Ix6yaHVcFTUkrGg515GATPNwNHbm8rV.jpg"
      ]
    };
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    }
  }
};
</script>

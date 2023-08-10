<template>
    <div class="v-carousel-item" :style="{'min-width': minWidth + 'px'}">
      <img :src="require('../assets/' + item_data.img)" alt />
      <div class="item-content">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item_data: {
        type: Object,
        default: () => {}
      },
      imageSlide: {
        type: Boolean,
        default: true
      },
      minWidth: {
        type: Number,
        default: 300
      }
    }
  };
  </script>
  
  <style>
  .v-carousel-item {
    min-width: 300px;
  }
  </style>
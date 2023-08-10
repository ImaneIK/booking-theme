<template>
    <div class="wrapper">
      <div class="v-carousel" :style="{'margin-left' : '-'  +  (100 * currentSlideIndex) + '%'}">
        <CarouselItem
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
          :minWidth="slideWidth"
        >
          <p>{{item.name}}</p>
          <p>{{item.id}}</p>
        </CarouselItem>
      </div>
      <button @click="prev()">Prev</button>
      <button @click="next()">Next</button>
    </div>
  </template>
  
  <script>
  import CarouselItem from "./CarouselItem";
  export default {
    data() {
      return {
        currentSlideIndex: 0
      };
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => {}
      },
      interval: {
        type: Number,
        default: 0
      },
      slideWidth: {
        type: Number,
        default: 300
      }
    },
    components: {
      CarouselItem
    },
    methods: {
      prev() {
        if (this.currentSlideIndex > 0) {
          this.currentSlideIndex--;
          console.log(this.currentSlideIndex);
        }
      },
      next() {
        if (this.currentSlideIndex >= this.carousel_data.length - 1) {
          this.currentSlideIndex = 0;
        } else {
          this.currentSlideIndex++;
        }
      }
    },
    mounted() {
      if (this.interval > 0) {
        let vm = this;
        setInterval(() => {
          vm.next();
        }, vm.interval);
      }
    }
  };
  </script>
  
  <style>
  .wrapper {
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
  }
  .v-carousel {
    display: flex;
    transition: all 0.5s ease;
  }
  </style>
<template>
    <div class="bg-white py-8 px-6 shadow-md">
      <h2 class="text-3xl font-semibold text-center mb-4">{{ title }}</h2>
      <p class="text-5xl font-bold text-center">{{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      startValue: {
        type: Number,
        required: true,
      },
      endValue: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        default: 2000, // Animation duration in milliseconds
      },
    },
    data() {
      return {
        count: this.startValue,
      };
    },
    mounted() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCount();
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      observer.observe(this.$el);
    },
    methods: {
      animateCount() {
        const startTimestamp = performance.now();
        const updateCount = (timestamp) => {
          const progress = timestamp - startTimestamp;
          const increment = (progress / this.duration) * (this.endValue - this.startValue);
  
          if (progress < this.duration) {
            this.count = Math.ceil(this.startValue + increment);
            requestAnimationFrame(updateCount);
          } else {
            this.count = this.endValue;
          }
        };
  
        requestAnimationFrame(updateCount);
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for the statistic block here */
  </style>
  
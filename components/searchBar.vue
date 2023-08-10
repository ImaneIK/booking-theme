<template>
    <div class=" search-bar bg-opacity-20 backdrop-blur-lg backdrop-filter flex justify-center items-center gap-10 p-5">
      <div class="search-field bg-white bg-opacity-30 backdrop-blur rounded-lg p-2 flex items-center gap-5">
        <label for="from-date" class="text-white">From:</label>
        <input
          type="date"
          id="from-date"
          v-model="fromDate"
          class="border-none p-2 rounded bg-transparent focus:ring-2 focus:ring-green-400"
        />
      </div>
  
      <div class="search-field bg-white bg-opacity-30 backdrop-blur rounded-lg p-2 flex items-center gap-5">
        <label for="to-date" class="text-white">To:</label>
        <input
          type="date"
          id="to-date"
          v-model="toDate"
          class="border-none p-2 rounded bg-transparent focus:ring-2 focus:ring-green-400"
        />
      </div>
  
      <div class="search-field bg-white bg-opacity-30 backdrop-blur rounded-lg p-2 flex items-center gap-5">
        <label for="category" class="text-white">Category:</label>
        <select
          id="category"
          v-model="selectedCategory"
          class="border-none p-2 rounded bg-transparent focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Categories</option>
          <option value="single-desk">Single Desk</option>
          <option value="meeting-room">Meeting Room</option>
          <option value="conference-room">Conference Room</option>
        </select>
      </div>
  
      <button
        @click="search"
        class="bg-green-500 bg-opacity-70 text-white px-4 py-2 rounded hover:bg-opacity-80 backdrop-blur"
      >
        Search
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fromDate: '',
        toDate: '',
        selectedCategory: ''
      };
    },
    methods: {
      search() {
        // Implement the logic to perform the search based on the selected criteria
        // You can use this.fromDate, this.toDate, and this.selectedCategory to access the selected values
        console.log('From Date:', this.fromDate);
        console.log('To Date:', this.toDate);
        console.log('Selected Category:', this.selectedCategory);
      }
    }
  };
  </script>
  
  <style>
  .search-bar {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>
  
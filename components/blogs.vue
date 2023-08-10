<template>

    <div class="m-24">
      <div class=" font-semibold mb-12">
        <h1 class="text-sm">
          <span class="text-orange-600 tracking-wide">BLOG NEWS</span>
        </h1>
        <p class="pt-6 text-4xl font-normal w-full md:w-full">
          Latest Articles From METEOR
        </p>
      </div>
  
      <div class="blog-grid">
        <div
          v-for="post in blog"
          :key="post.id"
          class=" max-w-2xl mx-auto bg-white rounded-sm shadow-md"
        >
          <div>
            <img
              class="h-full w-full object-cover"
              :src="post.image.url"
              :alt="post.imageAlt"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-amber-600 font-medium">
              {{ post.category }}
            </div>
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>

            <p class="mt-2 text-sm text-slate-500">
              {{ post.excerpt }}  
            </p> 
          </div>
          <NuxtLink class="block underline underline-offset-4 px-3  text-xs font-semibold mx-4 mb-4" :to="`/blog/${post.slug}`">Read more</NuxtLink>
         
        </div>
      </div>
    </div>
      
    </template>
    
    <style>
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 columns */
      grid-template-rows: repeat(2, auto); /* 2 rows */
      gap: 20px; /* Adjust the gap between blogs as needed */
    }
    </style>


<script>
export default {
  data() {
    return {
      blog: [],
      loading: true
    };
  },
  async fetch() {
    let filter = { status: 'PUBLISH' };
    await this.getBlog(filter);
  },
  methods: {
    async getBlog(filter) {
      this.loading = true;
      try {
        const { data } = await this.$storeino.pages.search(filter);
        this.blog = data.results.slice(0, 3);
        console.log(this.blog[0]);
      } catch (e) {
        console.log(this.$settings.header.menu);
      }
      this.loading = false;
    },
  },
};

</script>




    
    <!-- <script>
    export default {

      <!-- data() {
        return {
          blog: [
            {
              id: 1,
              category: 'FUTURE',
              title: 'What is jobs market Great Reshuffle? ',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/11.jpg'),
              imageAlt: 'Closeup code',
              link: '#'
            },
            {
              id: 2,
              category: 'WORKER',
              title: 'How can employer help them survive',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 3,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 4,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 5,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 6,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 7,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 8,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
            {
              id: 9,
              category: 'SPACE',
              title: 'The diversity backlash is underways!',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
              imageSrc: require('@/assets/12.jpg'),
              imageAlt: 'React logo',
              link: '#'
            },
          ]
        };
      },

      name:'Blogs' -->
    <!-- }; -->
    <!-- </script> -->
    
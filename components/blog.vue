<template>
  <div class="m-12">

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
            v-for="post in posts"
            :key="post.id"
            class=" max-w-2xl mx-auto bg-white rounded-sm shadow-md"
          >
            <div>
              <img
                class="h-full w-full object-cover"
                :src="post.image.url"
                :alt="post.title"
              />
            </div>
            <div class="p-8" >
              <div v-if="post.categories && post.categories.length > 0" v-for="(category, categoryIndex) in post.categories" class="uppercase tracking-wide text-sm text-amber-600 font-medium">
                {{ category.name}}
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
  grid-template-columns: repeat(3, 1fr);
  /* 3 columns */
  grid-template-rows: repeat(2, auto);
  /* 2 rows */
  gap: 20px;
  /* Adjust the gap between blogs as needed */
}
</style>
<script>
export default {
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  async fetch() {
    let filter = { status: 'PUBLISH' };
    await this.getPosts(filter);
  },
  methods: {
    async getPosts(filter) {
      this.loading = true;
      try {
        const { data } = await this.$storeino.pages.search(filter);
        this.posts = data.results.slice(0, 3);
        console.log(this.posts[0]);
      } catch (e) {
        console.log(this.$settings.header.menu);
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>

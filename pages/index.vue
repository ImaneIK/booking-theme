
<template>
  <div>

    <Navbar class="fixed w-full p-4 bg-white z-10" />

    <Header class="mb-24" />

    <div class="flex justify-center">
      <Spaces class="mb-4" />
    </div>

    <Blog class="mb-48" />

    <Footer />


  </div>
</template>


<script>

import Posts from '@/components/sections/posts.vue'

export default {
  components:{
    Posts
  },
  data() {
    return {
      cards: [],
      loading: true
    };
  },
  async fetch(){
    let filter = { status: 'PUBLISH' };
    await this.getCards(filter);
  },
  
  methods: {
    async getCards(filter){
      this.loading = true;
      try{
        const { data } = await this.$storeino.products.search(filter)
        this.cards = data.results
        console.log("jsdkze")
        console.log(this.$storeino)
        console.log("jsdkze")
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
  },
};
</script>


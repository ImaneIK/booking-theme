<template>
  <div class="m-12 flex flex-col">
    <div class="font-semibold mb-12">
      <h1 class="text-sm">
        <span class="text-orange-600 tracking-wide">OUR SPACES</span>
      </h1>
      <p class="pt-6 text-4xl font-normal w-full md:w-full">
        Do More Than Just Work. <br /> Create. Innovate.
      </p>
    </div>

    <div class="flex justify-center">

      <img class="block w-1/3 mr-8 object-cover" src="../assets/11.jpg" />
      
      <div class="grid grid-cols-2 gap-x-8 gap-y-8">
      <div v-for="card in cards" :key="card.id" class="max-w-xs rounded overflow-hidden shadow-lg">
      <div><img v-for="image in card.images" class="h-auto" :src="image.src" :alt="card.title"></div>
        


        
        <div class="px-6 py-4">
          <div class="flex my-2 ">
            <fa class="text-amber-600 mr-2" :icon="['fas', 'location-dot']" />
            <h4 class="text-xs">New York, NY</h4>
          </div>




          <div class="flex">
            <div class="font-semibold text-xl mb-2">{{ card.name }}</div>
            <!-- <div class="px-6">
              <span class="bg-black rounded-full px-3 py-1 text-sm text-white font-semibold">
                {{ card.tag }}
              </span>
            </div> -->
          </div>
          <p class="text-gray-500 text-sm">{{ card.description }}</p>
        </div>


        <!-- <NuxtLink class=" underline underline-offset-4 px-4  text-xs font-semibold mb-8" :to="`/spaces/${card.id}`">Book Now
                        <fa class="text-amber-600" :icon="['fas', 'arrow-right']" /></NuxtLink> -->


      </div>
    
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  
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
        console.log(this.cards)
        console.log("jsdkze")
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
  },
};
</script>

<!--<script>
// export default {
//   data() {
//     return {
//       cards: [
//         {
//           id: 1,
//           title: 'Single office spaces',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
//           tag: '1-5 people',
//           image: require('@/assets/11.jpg'), 
//         },
//         {
//           id: 2,
//           title: 'Small Team Spaces',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
//           tag: '6-20 people',
//           image: require('@/assets/12.jpg'), 
//         },
//         {
//           id: 3,
//           title: 'Office suite',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
//           tag: '21-50 people',
//           image: require('@/assets/12.jpg'), 
//         },
//         {
//           id: 4,
//           title: 'Conference room',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
//           tag: '51-100 people',
//           image: require('@/assets/11.jpg'), 
//         },
//       ],
//     };
//   },
// };
// </script>


<style scoped></style>-->


<template>
    <div class="m-24">
        <div class=" font-semibold mb-12">
            <h1 class="text-sm">
                <span class="text-orange-600 tracking-wide">OUR SPACES</span>
            </h1>
            <p class="pt-6 text-4xl font-normal w-full md:w-full">
                Choose the space that suits <br /> you and your team.
            </p>
        </div>

        <div class="blog-grid-shop">
          

                <div v-for="space in spaces" :key="space.id" class="flex max-w-2xl mx-auto bg-white rounded-sm shadow-md">
      <div><img v-for="image in space.images" class="h-full" :src="image.src" :alt="space.title"></div>
                <div class="p-8">{{ space.name }}

                    



                    <p class="mt-2 text-xs text-gray-400 text-slate-500">
                        {{ space.description }}
                    </p>

                    <p>{{ space.slug }}</p>

                    <div class="flex py-4">
                        <div class="pr-4">
                            <span class="bg-black rounded-full px-3 py-1 text-xs text-white font-semibold">
                            {{ space.collections.name }}
                            </span>
                        </div>

                        <div class="pl-4">
                            <span class="bg-black rounded-full px-3 py-1 text-sm text-white font-semibold">
                                {{ space.price.salePrice }}$
                            </span>
                        </div>
                    </div>

                    <NuxtLink class=" underline underline-offset-4 px-3  text-xs font-semibold mb-4" :to="`/spaces/${space.slug}`">Book Now
                        <fa class="text-amber-600" :icon="['fas', 'arrow-right']" /></NuxtLink>
                </div>


            </div>
        </div>
    </div>
</template>
    
<style>
.blog-grid-shop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 2 columns */
    grid-template-rows: repeat(2, auto);
    /* 2 rows */
    gap: 20px;
}
</style>
    
<script>
export default {
    name: 'AvailableSpaces',
    data() {
    return {
      spaces: [],
      loading: true
    };
  },
  async fetch(){
    let filter = { status: 'PUBLISH' };
    await this.getSpaces(filter);
  },
  methods: {
    async getSpaces(filter){
      this.loading = true;
      try{
        const { data } = await this.$storeino.products.search(filter)
        this.spaces = data.results
        console.log("jsdkze")
        console.log(this.spaces[0].slug)
        console.log("jsdkze")
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
  },
    // data() {
    //     return {
    //         spaces: [
    //             {
    //                 id: 1,
    //                 category: '1-5 PEOPLE',
    //                 title: 'Private Desk',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia',
    //                 imageSrc: require('@/assets/11.jpg'),
    //                 imageAlt: '1 person',
    //                 price:'20$/month',
    //                 link: '#'
    //             },
    //             {
    //                 id: 2,
    //                 category: '6-20 PEOPLE',
    //                 title: 'Office Suit',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia',
    //                 imageSrc: require('@/assets/12.jpg'),
    //                 imageAlt: 'a team of 4',
    //                 price:'50$/month',
    //                 link: '#'
    //             },
    //             {
    //                 id: 3,
    //                 category: '21-50 PEOPLE',
    //                 title: 'Small Team Space',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia',
    //                 imageSrc: require('@/assets/12.jpg'),
    //                 imageAlt: 'a full team',
    //                 price:'100$/month',
    //                 link: '#'
    //             },
    //             {
    //                 id: 4,
    //                 category: '51-100 PEOPLE',
    //                 title: 'Conference Room',
    //                 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia',
    //                 imageSrc: require('@/assets/12.jpg'),
    //                 imageAlt: 'a conference room',
    //                 price:'200$/month',
    //                 link: '#'
    //             },
    //         ]
    //     };
    // }
};
</script>
    
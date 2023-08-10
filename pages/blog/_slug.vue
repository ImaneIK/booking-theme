<template>
   
   <div>



    <div class="max-w-2xl px-6 py-16 mx-auto space-y-12">
		<article class="space-y-8">
			<div class="space-y-6">
      <img :src="post.image.url" />
				<h1 class="text-4xl font-bold md:tracki md:text-5xl">{{ post.title }}</h1>
				<div class="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
					<div class="flex items-center md:space-x-2">
						<img src="https://source.unsplash.com/75x75/?portrait" alt="" class="w-4 h-4 border rounded-full bg-gray-500 border-gray-700">
						<p class="text-sm">Leroy Jenkins • July 19th, 2021</p>
					</div>
					<p class="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
				</div>
			</div>
			<div class="">
				<p>{{ post.content }}</p>
			</div>
		</article>
		<div>
			<div class="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
				<a rel="noopener noreferrer" href="#" class="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#MambaUI</a>
				<a rel="noopener noreferrer" href="#" class="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#TailwindCSS</a>
				<a rel="noopener noreferrer" href="#" class="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#Angular</a>
			</div>
			<div class="space-y-2">
				<h4 class="text-lg font-semibold">Related posts</h4>
				<ul class="ml-4 space-y-1 list-disc">
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Nunc id magna mollis</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Duis molestie, neque eget pretium lobortis</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
					</li>
				</ul>
			</div>
		</div>
	</div> 
      
</div>      
</template>
    
<script>
  


export default {
  data() {
    return {
     // cards: [],
      loading: true,
      post: null
    };
  },

  async fetch() {
        const { slug } = this.$route.params;
        try{
            const { data } = await this.$storeino.pages.get({ slug })
            this.post = data;
            console.log(this.post.slug)


        }catch(e){
            // Redirect to error page if post not exists
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
};

  
    // export default {
    //   components:{
    //   Navbar,
    //   Banner,
    //   Footer
    //   },

      
  
    //   async asyncData({ params }) {
    //   const blog = [
    //     {
    //           id: 1,
    //           category: 'FUTURE',
    //           title: 'What is jobs market Great Reshuffle? ',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/11.jpg'),
    //           imageAlt: 'Closeup code',
    //           link: '#'
    //         },
    //         {
    //           id: 2,
    //           category: 'WORKER',
    //           title: 'How can employer help them survive',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 3,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 4,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 5,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 6,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 7,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 8,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //         {
    //           id: 9,
    //           category: 'SPACE',
    //           title: 'The diversity backlash is underways!',
    //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //           imageSrc: require('@/assets/12.jpg'),
    //           imageAlt: 'React logo',
    //           link: '#'
    //         },
    //   ];
  
    //   const article = blog.find((item) => item.id === Number(params.id));
  
    //   return { article };
    // },
    // };
</script>
    
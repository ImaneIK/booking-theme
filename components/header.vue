<template>
   
  <div>
    <div
    class="overflow-hidden bg-fixed bg-no-repeat"
    :style="{
      'background-position': '50%',
      'background-image': `url(${require('@/assets/header.jpg')})`,
      height: '110vh'
    }">
    <div
      class="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed inset-0 "
      style="background-color: rgba(0, 0, 0, 0.5); ">
      <div class="flex px-24  h-full items-center">
        <div class="text-white ">
          <h1 class="text-sm pb-2">
            <span class=" tracking-wide ">WELCOME TO SPACEHUB</span>
          </h1>
          <h1 class="mb-6 text-5xl">The Workplace Will Not Feel <br/>Like a Place of Work<br/> Anymore.</h1>
          <h3 class="mb-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
          <!--<button
            type="button"
            class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light">
            Get started
          </button>-->
          <SearchBar/>

        </div>
      </div>
    </div>
  </div>

  <div class="relative grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 mx-4 " :style="{ marginTop: '-50px'}" style="z-index: 1;">
      <StatisticBlock title="Active members" :startValue="0" :endValue="100" :duration="2000" />
      <StatisticBlock title="Available spaces" :startValue="0" :endValue="20" :duration="2500" />
      <StatisticBlock title="Positive reviews" :startValue="0" :endValue="10" :duration="1500" />
    </div>
  </div>

</template>


<script>
import StatisticBlock from '@/components/StatisticBlock';
import SearchBar from '@/components/searchBar.vue';

    export default {
        name: 'Header',
      components: {
      StatisticBlock,
      SearchBar
      },
    }
</script>
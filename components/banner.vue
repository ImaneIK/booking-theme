<template>
   <div class="relative h-64 bg-cover bg-center" style="background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdevx.work%2Fblog%2Fwp-content%2Fuploads%2F2021%2F03%2FLOUNGE-01-1920x1024.jpg&f=1&nofb=1&ipt=bc89ea53d39a8da6df1ca59ed5daba3155d44fa3627e5071448aecd5da8be808&ipo=images')">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-sm text-white ">Home -> {{ $store.state.currentRouteName }} </h1>
  </div>
</div>

</template>

<script>
    export default {
        name:'Banner'
    }
</script>
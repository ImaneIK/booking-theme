<template>
    <div>
    <Navbar class="" />
    <Banner />
    <About/>
    <Blog />
    <div class="container">
  </div>
    <Footer/>
    </div>
    
</template>

<script>
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Blog from '@/components/blog.vue'
import Footer from '@/components/footer.vue'
import About from '@/components/about.vue'


export default {
 
  components:{
    Navbar,
    Banner,
    Blog,
    About

},
}
</script>
<template>
    <div>
    <Navbar class="" />
    <Banner />
    <AvailableSpaces/>
    <Blog />
    <div class="container">
  </div>
    <Footer/>
    </div>
    
</template>

<script>
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Blog from '../components/blog.vue'
import Footer from '../components/footer.vue'
import AvailableSpaces from '@/components/space.vue'

export default {
 
  components:{
    Navbar,
    Banner,
    Blog,
    AvailableSpaces,

},
}
</script>
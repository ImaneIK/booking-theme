<template>
    <div>
    <Navbar/>
    <Banner/>
    <Blogs/>
    <Footer/>
    </div>
    
</template>

<script>
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Blogs from '@/components/blogs.vue'
import Footer from '@/components/footer.vue'

export default {
 
  components:{
    Navbar,
    Banner,
    Blogs,

},
}
</script>
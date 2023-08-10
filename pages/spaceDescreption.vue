<template>
    <div>
    <Navbar class="" />
    <Banner />
    <div>
    <div v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">{{ product.name }}</NuxtLink>
    </div>
  </div>
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

export default {
    data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2' },
        // Add more products here
      ],
    };
  },
 
  components:{
    Navbar,
    Banner,
    Blog,

},
}
</script>
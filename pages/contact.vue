<template>
    <div>
    <Navbar class="" />
    <Banner />

    <div><span>{{ $settings.header.logo.src }}</span>
    <img :src="$settings.header.logo.src"/>
    <div v-for="item,i in Object.values($settings.home.banner)" :key="i" class="banner-item">
   <img :src="item.image.src" :alt="item.image.title" class="banner-image" width="400" height="200px">
   </div>
    </div>

    <div class="">
                      <img width="100" class="bg-white cursor-pointer mb-2" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
    <p>{{ item.name }}</p>
    </div>
                  <div class="bg-primary w-full py-4 ">
      <div class="container flex justify-start items-center">
        <meta itemprop="productID" :content="item._id" />
        <span class="text-xs"> <a href="">Home</a> > <a href="">Best seller</a> > <span class="text-gray-500">{{ item.name }}</span></span>
      </div>
    </div>

<ContactSection/>


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
import ContactSection from '@/components/contactSection'




export default {
    data() {
    return {
            loading: true,
            item: null,
            image: null,
            tab: 'description',
            quantity: {},
            variant: null,
            price: { salePrice: 0, comparePrice: 0 },
            socialMedia: [
                {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                }
            ]
        }
    },
    async fetch() {

        const { slug } = this.$route.params;
        try{
            const { data } = await this.$storeino.products.get({ slug })
            this.item = data;

            this.$store.state.seo.title = (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.seo.description || this.item.description || this.$settings.store_description;
            this.$store.state.seo.keywords = this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || [];
            if(this.item.images.length > 0){ this.$store.state.seo.image = this.item.images[0].src; }
            // New meta tags
            [ { hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
            { hid: "productID", itemprop: "productID", content: this.product && this.product ? this.product._id : 'productID' }
            ].forEach(meta=>{
                const index = this.$store.state.seo.metaTags.findIndex(m=>m.hid === meta.hid);
                if(index > -1){ this.$store.state.seo.metaTags.splice(index, 1, meta); }
                this.$store.state.seo.metaTags.push(meta);
            });
            this.loading = false;
            this.quantity = this.item.quantity;
            // Set default image if exists
            if(this.item.images.length > 0) this.setImage(0);
            // Set default variant if exists
            if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
            // Set default quantity
            this.quantitySelected(this.quantity.default);
            // Generate share urls
            let url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.name).replace(/\{url\}/gi, url);
            }
            if(!process.server){
               this.$storeino.fbpx('PageView')
          this.$storeino.fbpx('ViewContent',{
            content_name: this.item.name?this.item.name:'',
            content_ids: [this.item._id],
            content_type: "product",
            value: this.item.price.salePrice,
            currency: this.$store.state.currency.code
          })
              this.$tools.call('PAGE_VIEW', this.item);
            }

        }catch(e){
            // Redirect to error page if product not exists
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
        }
    },
    mounted() {
        console.log('item=====>',this.item);
        if(this.item) this.$tools.call('PAGE_VIEW', this.item);
        window.addEventListener("APP_LOADER", e => {
            window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                detail: {
                    product_id: this.item._id,
                    product_quantity: this.quantity.value,
                    product_variant: this.variant ? this.variant._id : undefined,
                    product_currency: this.$store.state.currency.code,
                    product_price: this.price
                }
            }));
        });
        if(this.item){
          this.$storeino.fbpx('PageView')
           this.$storeino.fbpx('ViewContent',{
              content_name: this.item.name?this.item.name:'',
              content_ids: [this.item._id],
              content_type: "product",
              value: this.item.price.salePrice,
              currency: this.$store.state.currency.code
            })
        }


        if(this.item){
            const iframes=document.querySelectorAll('iframe')
            for(const ifram of iframes){
            const width = ifram.getAttribute('width')
            const height = ifram.getAttribute('height')
            const parent = ifram.parentNode
            if (!parent.classList.contains('video-wrapper')) {
                const div = document.createElement("div");
                ifram.after(div)
                div.classList.add('video-wrapper');
                ifram.style.width=null;
                ifram.style.height=null;
                ifram.setAttribute('width','');
                ifram.setAttribute('height','');
                div.appendChild(ifram)
            }
            }
        }
    },
    methods: {
        addToCart() {
            // Call add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.item._id,
                quantity: this.quantity.value,
                price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null
            });
            if(this.$settings.sections.products.add_to_cart_to_checkout){
                setTimeout(() => {
                        window.location.href = '/checkout2';
                }, 500);
            }
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
        },
        addToWishlist(){
            this.$tools.call('ADD_TO_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
        },
        removeFromWishlist(){
            this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
        },
        buyNow() {
            // Add to cart and redirect to checkout
            this.addToCart();
            setTimeout(() => {
                window.location.href = '/checkout2';
            }, 500);
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            if(this.variant){
                this.price.salePrice = this.variant.price.salePrice * quantity;
                this.price.comparePrice = this.variant.price.comparePrice * quantity;
            }else{
                this.price.salePrice = this.item.price.salePrice * quantity;
                this.price.comparePrice = this.item.price.comparePrice * quantity;
            }
        },
        variantSelected(variant) {
            this.variant = variant;
            if(variant.imageId && this.item.images.length > 0){
                let index = this.item.images.findIndex(i=>i._id == variant.imageId);
                if(index == -1) index = 0;
                this.image = this.item.images[index];
            }else if(this.item.images.length > 0){
                this.image = this.item.images[0];
            }
            this.quantitySelected(this.item.quantity.value);
        },
        setImage(index){
            this.image = this.$tools.copy(this.item.images[index]);
        },
        setTab(tab){
            this.tab = tab;
            if(tab == 'reviews' && this.reviews.results.length == 0) this.getReviews();
        },
 
  components:{
    Navbar,
    Banner,
    Blog,
    ContactSection
    
    

},
}
}
</script>
<template>
    <div class="main-wrapper">

        <section class="hero-section ptb-60 min-vh-100 d-flex bg-dark text-white position-relative overflow-hidden" style="background: url('frontend/img/page-header-bg.svg')no-repeat bottom right">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-6">
                        <div class="hero-content-wrap">
                            <h5 class="text-warning">#{{$t('message.role')}}</h5>
                            <h1 class="fw-bold display-5">{{settings.app_name}}</h1>
                            <p class="lead">{{$t('message.title')}}</p>
                            <div class="action-btns mt-5">
                                <router-link to="/contact" class="btn btn-primary me-3">{{$t('message.contact')}}</router-link>
                                <router-link to='/about'  class="btn btn-outline-light">{{$t('message.about')}}</router-link>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-lg-6 col-md-8">
                        <div class="animated-img-wrap">
                            <img src="/frontend/img/screen/home.png" alt="shape" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section v-if="values.length > 0" class="promo-section ptb-120 bg-light ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6">
                        <div class="section-heading text-center" data-aos="fade-up">
                            <h2>{{$t('message.value')}}</h2>
                            <p>{{$t('message.serviceTitle')}}</p>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div v-for="value in values" class="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
                        <div class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom" data-aos="fade-up" :data-aos-delay="`10${fade ++}`">
                            <div class="promo-card-info mb-4">
                                <h3 class="display-5 fw-bold mb-4"><i :class="`far ${value.icon} text-success me-2`"></i>
                                </h3>
                                <h4>{{value.titre}}</h4>
                                <p class="justify">
                                    {{value.content}}
                                </p>
                            </div>
                        </div>
                    </div>
                

                </div>
            </div>
        </section>
        <!--customers section end-->

        <!--feature section start-->
        <section class="feature-section-two ptb-120">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-5 col-md-12">
                        <div class="section-heading" data-aos="fade-up">
                            <h4 class="h5 text-primary">{{$t('message.about')}}</h4>
                            <h2>{{settings.app_name}}</h2>
                            <p class="justify">{{abouts.content}}</p>
                          
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <div class="feature-img-wrap position-relative d-flex flex-column align-items-end">
                           
                            <img :src="getImgUrlAbout(abouts.img2)" alt="feature image" class="img-fluid rounded-custom">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="services.length > 0" class="feature-section ptb-120  bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-10">
                        <div class="section-heading text-center" data-aos="fade-up">
                            <h2>{{$t('message.services')}}</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="feature-grid">
                        
                            
                            <div v-for="service in services" class="feature-card bg-white   shadow-sm rounded-custom p-5" data-aos="fade-up" data-aos-delay="50">
                                <div class="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                                    <i class="fal fa-cog icon-sm text-warning"></i>
                                </div>
                                <div class="feature-content">
                                    <h3 class="h5">{{service.titre}}</h3>
                                    <p class="mb-0" v-if="service.content.length < 100">{{service.content}}</p>
                                    <p class="mb-0" v-else>{{service.content.substring(0,50)+".."}}</p>
                                    
                                </div>
                                <router-link :to="'/service/'+service.slug + '/' + service.id_pub " class="link-with-icon text-decoration-none mt-3">{{$t('message.plus')}}<i class="far fa-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="technology.length > 0" class="integration-section pt-60 pb-120">
            <div class="container">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-lg-6 col-md-12">
                        <div class="section-heading" data-aos="fade-up">
                       
                            <h2>{{$t('message.langage')}}</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="integration-wrapper position-relative w-100">
                            <!--animated shape start-->
                       
                            <!--animated shape end-->
                            <ul class="integration-list list-unstyled mb-0">
                                <li v-for="(tech, index) in technology" :key="tech.id" data-aos="fade-up" data-aos-delay="50">
                                    <div class="single-integration">
                                        <img :src="getImgUrlTech(tech.image)" src="" class="img-fluid">
                                        <h6 class="mb-0 mt-4">{{tech.titre}}</h6>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--integration section end-->

        <!--cat subscribe start-->

           <!-- Blog Start-->
           <section v-if="posts.length > 0" class="home-blog-section pt-60 pb-120">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-4 col-md-12">
                      <div class="section-heading">
                        <h4 class="h5 text-primary">{{$t('message.latest')}}</h4>
                        <h2>{{$t('message.latestSection')}}</h2>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                      <div class="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
                        <router-link to="/blog" class="btn btn-primary">{{$t('message.viewAll')}}</router-link>
                      </div>
                    </div>
                  </div>
                <div class="row">
                    <div class="swiper cyber-blog">
                        <div class="swiper-wrapper">

                            <div v-for="post in posts" :key="post.id_pub" class="swiper-slide position-relative">
                                <div class="cyber-single-article mb-4 mb-lg-0 p-3 border">
                                    <router-link :to="'/blog/'+post.slug + '/' + post.id_pub" class="cyber-article-img photo-article" v-bind:style="{ 'background-image': 'url(' + getImgUrl(post.image) + ')' }">
                                       
                                    </router-link>
                                    <div class="article-content">
                                        <div class="article-info d-flex py-3">
                                            <div class="pe-3">
                                                <a href="#" class="text-decoration-none">
                                                    <i class="fas fa-user pe-2"></i>
                                                    <span class="text-secondary">{{post.auteur}}</span>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" class="text-decoration-none">
                                                    <i class="fas fa-calendar pe-2"></i>
                                                    <span class="text-secondary">{{formatDate(post.created)}}</span>
                                                </a>
                                            </div>
                                        </div>
                                      
                                        <router-link :to="'/blog/'+post.slug + '/' + post.id_pub" class="text-decoration-none">
                                            <h2 class="h5 article-title limit-2-line-text">
                                                {{post.titre}}
                                            </h2>
                                        </router-link>
                                        <router-link :to="'/blog/'+post.slug + '/' + post.id_pub" class="link-with-icon text-decoration-none">{{$t('message.plus')}}<i class="far fa-arrow-right"></i></router-link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<style>
.photo-article{
    display:block;
    background-position: top center;
    background-size: cover;
    width: 100%;
    height:250px;
    border-radius:6px
}
.justify{
    text-align: justify
}
</style>

<script>
import {getSettings, getAbout, postNews,getServices, getPostsLimit, getTechnology, getValue} from '../config/serviceProvider';
import AuteurImage from '../components/AuteurImage.vue';
import {SOCKET_URL} from '../config';
import moment from 'moment';
import 'moment/locale/fr';




export default {
    data() {
        return {
            settings: {},
            abouts: {},
            fade:0,
            moment:'',
            posts: [],
            values:[],
            technology:[],
            services:[],
            lang:localStorage.getItem('lang'),
            components:AuteurImage,
            data: {
                email: ""
            },
            loading: false,
      
          
        };
        
    },
    async created() {
        await getSettings().then(res => {
            this.settings = res.data;
            console.log(this.settings);
        }).catch(error => {
            console.log(error);
        });
        await getAbout().then(res => {
            this.abouts = res.data;
            console.log(this.abouts);
        }).catch(error => {
            console.log(error);
        });
        await getPostsLimit(5).then(res => {
            this.posts = res.data;
            console.log(this.posts);
        }).catch(error => {
            console.log(error);
        });
        await getServices().then(res => { 
            this.services = res.data;
            console.log(this.services)
        }).catch(error => {
            console.log(error)
        })

        await getTechnology().then(res => { 
            this.technology = res.data;
            console.log(this.technology)
        }).catch(error => {
            console.log(error)
        })

        
        await getValue().then(res => { 
            this.values = res.data;
            console.log(this.values)
        }).catch(error => {
            console.log(error)
        })

        let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/frontend/js/app.js')
      document.head.appendChild(recaptchaScript)

   

    },
    methods: {
        formatDate(date){
            moment.locale(this.lang);
            return moment(date).format('DD/MM/YYYY')
        },
        getImgUrl: function (imagePath) {
            return SOCKET_URL + "posts/" + imagePath;
        },
        navigate(id, slug) {
            this.$router.push("/blog/" + slug + "/" + id);
        },
        navBlog() {
            this.$router.push("/blog");
        },
        getImgUrlLogo: function (imagePath) {
            return SOCKET_URL + "logo/" + imagePath;
        },
        getImgUrlTech(imagePath) {
                return SOCKET_URL + 'technology/' + imagePath;
        },
        getImgUrlAbout(imagePath) {
                return SOCKET_URL + 'about/' + imagePath;
        }
       
    },
    components: { AuteurImage }
}

</script>

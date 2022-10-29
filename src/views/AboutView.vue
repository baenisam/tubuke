<template>
  <div class="main-wrapper">
    <section class="about-header-section ptb-120 position-relative overflow-hidden bg-dark" style="background: url('/frontend/img/page-header-bg.svg')no-repeat center right">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading-wrap d-flex justify-content-between z-5 position-relative">
                        <div class="about-content-left">
                            <div class="about-info mb-5">
                                <h1 class="fw-bold display-5">{{$t('message.aboutTitle')}}</h1>
                             
                                <router-link to="/contact" class="btn btn-primary mt-4 me-3">{{$t('message.contact')}}</router-link>
                                <router-link to="/team" class="btn btn-soft-primary mt-4">{{$t('message.teamTitle')}}</router-link>
                            </div>
                            <img :src="getImgUrlAbout(about.img4)" alt="about" class="img-fluid about-img-first mt-5 rounded-custom shadow">
                        </div>
                        <div class="about-content-right">
                            <img :src="getImgUrlAbout(about.img1)" alt="about" class="img-fluid mb-5 rounded-custom shadow">
                            <img :src="getImgUrlAbout(about.img2)" alt="about" class="rounded-custom about-img-last shadow">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5">
        </div>
    </section>
    <!--about header section end-->

    <!--our story section start-->
    <section class="our-story-section pt-60 pb-120" style="background: url('/frontend/img/shape/dot-dot-wave-shape.svg')no-repeat left bottom">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5 col-md-12 order-lg-1">
                    <div class="section-heading sticky-sidebar">
                        <h4 class="h5 text-primary">{{$t('message.about')}}</h4>
                        <h2>{{$t('message.serviceTitle')}}</h2>
                        <p class="about-justify">{{about.content}}</p>
                    
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 order-lg-0">
                    <div class="story-grid-wrapper position-relative">
                        <!--animated shape start-->
                        <ul class="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                            <li class="layer" data-depth="0.02">
                                <img src="/frontend/img/color-shape/image-2.svg" alt="shape" class="img-fluid position-absolute color-shape-2 z-5">
                            </li>
                            <li class="layer" data-depth="0.03">
                                <img src="/frontend/img/color-shape/feature-3.svg" alt="shape" class="img-fluid position-absolute color-shape-3">
                            </li>
                        </ul>
                        <!--animated shape end-->
                        <div class="story-grid rounded-custom overflow-hidden position-relative">
                            
                            <div v-for="tech in technology" class="story-item bg-light border">
                                <h3 class="display-5 fw-bold mb-1 text-success">
                                    <img :src="getImgUrlTech(tech.image)" class="imgTech">
                                </h3>
                                <h6 class="mb-0">{{tech.titre}}</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--our story section end-->

    <!--feature section two start-->
    <section class="promo-section ptb-120 bg-light ">
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

    
    <section class="team-section ptb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="section-heading text-center">
                        <h5 class="h6 text-primary">{{$t('message.team')}}</h5>
                        <h2>{{$t('message.teamTitle')}}</h2>
                        <p>
                            {{$t('message.teamSection')}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="team in teams" class="col-lg-3 col-md-6">
                    <div class="team-single-wrap mt-5">
                        <div class="team-img rounded-custom">
                            <img :src="getImgUrl(team.photo)" alt="team" class="img-fluid position-relative" />
                            <ul class="list-unstyled team-social-list d-flex flex-column mb-0">
                                <li class="list-inline-item">
                                    <a target="_blank" :href="`${team.linkedin}`"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a target="_blank" :href="`${team.twitter}`"><i class="fab fa-twitter"></i></a>
                                </li>
            
                                <li class="list-inline-item">
                                    <a target="_blank" :href="`${team.facebook}`"><i class="fab fa-facebook-f"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="team-info mt-4 text-center">
                            <h5 class="h6 mb-1">{{team.nom}} {{team.post_nom}}</h5>
                            <p class="text-muted small mb-0">{{team.fonction}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!--testimonial section start-->


</div>

</template>
<style>
.about-justify{
    text-align:justify
}
.imgTech{
    width:50px
}
.justify{
    text-align: justify
}
</style>

<script>
import {getTeam, getAbout, getTechnology, getValue} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';


export default {
    data(){
        return{
            teams:[],
            values:[],
            about:{},
            technology:[]
        }
    },
   async created(){
 

      await getTeam().then(res => { 
            this.teams = res.data;
            console.log(this.teams)
        }).catch(error => {
            console.log(error)
        })

        await getAbout().then(res => { 
            this.about = res.data;
            console.log(this.about)
        }).catch(error => {
            console.log(error)
        })
        await getValue().then(res => { 
            this.values = res.data;
            console.log(this.values)
        }).catch(error => {
            console.log(error)
        })

        await getTechnology().then(res => { 
            this.technology = res.data;
            console.log(this.technology)
        }).catch(error => {
            console.log(error)
        })

        let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/frontend/js/app.js')
      document.head.appendChild(recaptchaScript)
    },
    methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + 'team/' + imagePath;
    },

    getImgUrlAbout: function (imagePath) {
      return SOCKET_URL + 'about/' + imagePath;
    },

    getImgUrlTech: function (imagePath) {
      return SOCKET_URL + 'technology/' + imagePath;
    }
}
}

</script>


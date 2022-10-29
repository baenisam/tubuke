<template>
    <main>
        <section class="page-header position-relative overflow-hidden ptb-120 bg-dark" style="background: url('frontend/img/page-header-bg.svg')no-repeat bottom left">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <h1 class="display-5 fw-bold">{{$t('message.serviceTitle')}}</h1>
                        <p class="lead">{{$t('message.contactSection')}}</p>
                    </div>
                </div>
                  </div>
        </section>
    <!--page header section end-->

    <!--feature section start-->
    <section class="feature-section ptb-120">
        <div class="container">
            <div class="row align-items-lg-center justify-content-between">
                <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                    <div class="mb-4">
                        <h2>{{post.titre}}</h2>
                        <p>
                            {{post.content}}
                        </p>
                    </div>
                    
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="pr-lg-4 mt-md-4 position-relative">
                        <div class="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                            <img :src="getImgUrl(post.image)" alt="" class="img-fluid shadow-sm rounded-custom">
                            <div class="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
</template>
<script>
import {oneService, getPosts, getSettings, getPostsLimit, postNews} from '../config/serviceProvider';
import {SOCKET_URL} from '../config';
import BlogSideVue from '../components/BlogSide.vue';
import BlogSide from '../components/BlogSide.vue';


export default {
    data() {
        return {
            post: [],
            posts: [],
            components: BlogSideVue,
            settings: {},
            data: {
                email: ""
            },
            id: this.$route.params.id,
            slug: this.$route.params.slug
        };
    },
    async created() {
    
        await oneService(this.slug, this.id).then(res => {
            if (res.status == 1) {
                this.post = res.data;
            } else {
                this.$router.push('/error')
            } 
        }).catch(error => {
            console.log(error);
            if(error.request.status === 404){
              this.$router.push({name:'error'})
            }
        });
        
        await getSettings().then(res => {
            this.settings = res.data;
            console.log(this.settings);
        }).catch(error => {
            console.log(error);
        });

        document.title = this.post.titre;
    },
    methods: {
        getImgUrl: function (imagePath) {
            return SOCKET_URL + "posts/" + imagePath;
        },
        navBlog() {
            this.$router.push("/blog");
        },
        navigate(id, slug) {
            this.$router.push("/blog/" + slug + "/" + id);
            onePost(slug, id).then(res => {
                if (res.status == 1) {
                    this.post = res.data;
                }
                else if (res.status == 0) {
                    //await this.$router.push({name:'error'})
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getImgUrlLogo: function (imagePath) {
            return SOCKET_URL + "logo/" + imagePath;
        },
        saveNews() {
            postNews(this.data.email).then(res => {
                if (res.status === 1) {
                    this.$toast.success(res.message);
                    this.data.email = "";
                }
                else {
                    this.$toast.error(res.message);
                }
            }).catch(error => {
                if (error.response) {
                    console.log(error.response.data.message);
                    this.$toast.error(error.response.data.message);
                }
                else if (error.request) {
                    console.log(error.request.message);
                }
                else {
                    console.log("Error", error.message.message);
                }
            });
        }
    },
    components: { BlogSide }
}

</script>
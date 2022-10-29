<template>
  <main>
    <section
      class="page-header position-relative overflow-hidden ptb-120 bg-dark"
      style="
        background: url('assets/img/page-header-bg.svg') no-repeat bottom left;
      "
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-12">
            <h1 class="fw-bold display-5">
             {{post.titre}}
            </h1>
          </div>
        </div>
      
        
      </div>
    </section>
    <!--page header section end-->

    <!--blog details section start-->
    <section class="blog-details ptb-120">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-8 pe-lg-5">
            <div class="blog-details-wrap">
             
          <div class="photo-article rounded-custom img-fluid"  v-bind:style="{ 'background-image': 'url(' + getImgUrl(post.image) + ')' }">

          </div>

              <p class="justify">
                {{post.content}}
              </p>

          
            </div>
          </div>
        <BlogSide/>
        </div>
      </div>
      <!--newsletter subscription container start-->
      <div class="container">
        <!--cat subscribe start-->
        <div
          class="bg-dark ptb-60 px-5 mt-100 position-relative overflow-hidden rounded-custom"
          style="
            background: url('assets/img/page-header-bg.svg') no-repeat center
              bottom;
          "
        >
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-9">
              <div
                class="subscribe-info-wrap text-center position-relative z-2"
              >
                <div class="section-heading">
                  <h4 class="h5 text-warning">{{$t('message.forLatest')}}</h4>
                  <h2>{{$t('message.newsLetter')}}</h2>

                </div>
                <div class="form-block-banner mw-60 m-auto mt-5">
                  <form
                    id="email-form2"
                    name="email-form"
                    class="subscribe-form d-flex"
                  >
                    <input
                      type="email"
                      class="form-control me-2"
                      v-model="data.email"
                      data-name="Email"
                      placeholder="Enter your email"
                      id="Email2"
                      required=""
                    />
                    <input
                      type="button"
                      value="Join!"
                      @click="saveNews()"
                      data-wait="Please wait..."
                      class="btn btn-primary"
                    />
                  </form>
                </div>
           
              </div>
            </div>
          </div>
          <div
            class="bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5"
          ></div>
        </div>
        <!--cat subscribe end-->
      </div>
      <!--newsletter subscription container end-->
    </section>
    <!--blog details section end-->

    <!--related blog start-->
    <section class="related-blog-list ptb-120 bg-light">
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
              <a href="#" @click="navBlog()" class="btn btn-primary">{{$t('message.viewAll')}}</a>
            </div>
          </div>
        </div>
        <div class="row">
            <div v-for="post in posts" class="col-lg-4 col-md-6">
                <div class="single-article rounded-custom my-3">
                    <router-link :to="'to'" @click="navigate(post.id_pub, post.slug)" class="article-img">
                        <img :src="getImgUrl(post.image)" alt="article" class="img-fluid">
                    </router-link>
                    <div class="article-content p-4">
                        <div class="article-category mb-4 d-block">
                            <a href="javascript:;" class="d-inline-block text-dark badge bg-warning-soft">{{post.category}}</a>
                        </div>
                        <router-link :to="'to'" @click="navigate(post.id_pub, post.slug)">
                            <h2 class="h5 article-title limit-2-line-text">{{post.titre}}</h2>
                        </router-link>
                        <p class="limit-2-line-text">{{post.content.substring(0,200)+"..."}}</p>

                        <a href="javascript:;">
                            <div class="d-flex align-items-center pt-4">
                                <div class="avatar">
                                    <img src="/frontend/img/testimonial/6.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3">
                                </div>
                                <div class="avatar-info">
                                    <h6 class="mb-0 avatar-name">{{post.auteur}}</h6>
                                    <span class="small fw-medium text-muted">{{post.created}}</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

  </main>
</template>
<style>

.photo-article{
    display:block;
    background-position: top center;
    background-size: cover;
    width: 100%;
    height:400px;

}
@media only screen 
  and (max-width: 720px)
  {
    .photo-article{
      height: 200px;
    }
  }


</style>
<script>
import {onePost, getPosts, getSettings, getPostsLimit, postNews} from '../config/serviceProvider';
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
    
        await onePost(this.slug, this.id).then(res => {
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
        await getPostsLimit(3).then(res => {
            this.posts = res.data;
            console.log(this.posts);
        }).catch(error => {
            console.log(error);
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

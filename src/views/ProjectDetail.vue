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
                    <button
                      type="button"
                      @click="saveNews()"
                 
                      class="btn btn-primary"
                    >
                    <Span v-if="loading" class="spinner-border spinner-border-sm"></Span>
                    <Span v-else>Join</Span> 
                  </button>
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


  </main>
</template>
<style>
.justify{
    text-align:justify
}
.article{
    width:100%
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
import {oneProject, getPosts, getSettings, getPostsLimit, postNews} from '../config/serviceProvider';
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
            slug: this.$route.params.slug,
            loading: false
        };
    },
    async created() {
        await oneProject(this.slug, this.id).then(res => {
            if (res.status == 1) {
                this.post = res.data;
            }
            else if (res.status == 0) {
                //await this.$router.push({name:'error'})
            }
        }).catch(error => {
            console.log(error);
        });
        await getPostsLimit().then(res => {
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
        getImgUrlLogo: function (imagePath) {
            return SOCKET_URL + "logo/" + imagePath;
        },
        saveNews() {
            this.loading = true;
            postNews(this.data.email).then(res => {
                if (res.status === 1) {
                    this.$toast.success(res.message);
                    this.data.email = "";
                    this.loading = false;
                }
                else {
                    this.$toast.error(res.message);
                    this.loading = false;
                }
            }).catch(error => {
                if (error.response) {
                    console.log(error.response.data.message);
                    this.$toast.error(error.response.data.message);
                    this.loading = false;
                }
                else if (error.request) {
                    console.log(error.request.message);
                    this.loading = false;
                }
                else {
                    console.log("Error", error.message.message);
                    this.loading = false;
                }
            });
        }
    },
    components: { BlogSide }
}

</script>

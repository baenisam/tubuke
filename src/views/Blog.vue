<template>
  <div class="main-wrapper">
    <section
      class="page-header position-relative overflow-hidden ptb-120 bg-dark"
      style="
        background: url('frontend/img/page-header-bg.svg') no-repeat center
          bottom;
      "
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-heading text-center">
              <h1 class="display-5 fw-bold">{{ $t("message.blogSection") }}</h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-xl-8">
            <a
              v-for="cat in category"
              class="btn btn-soft-primary btn-pill btn-sm m-2"
            >
              <router-link :to="'/blog/category/' + cat.id_cat">
                <span>{{ cat.nom }}</span>
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--page header section end-->

    <!--blog section start-->
    <section class="masonary-blog-section ptb-120">
      <div class="container">
        <div class="row">
          <div v-for="post in posts" class="col-lg-4 col-md-6">
            <div class="single-article rounded-custom my-3">
              <router-link
                :to="'to'"
                @click="navigate(post.id_pub, post.slug)"
                class="article-img"
              >
                <img
                  :src="getImgUrl(post.image)"
                  alt="article"
                  class="img-fluid"
                />
              </router-link>
              <div class="article-content p-4">
                <div class="article-category mb-4 d-block">
                  <a
                    href="javascript:;"
                    class="d-inline-block text-dark badge bg-warning-soft"
                    >{{ post.category }}</a
                  >
                </div>
                <router-link
                  :to="'to'"
                  @click="navigate(post.id_pub, post.slug)"
                >
                  <h2 class="h5 article-title limit-2-line-text">
                    {{ post.titre }}
                  </h2>
                </router-link>
                <p class="limit-2-line-text">
                  {{ post.content.substring(0, 200) + "..." }}
                </p>

                <a href="javascript:;">
                  <div class="d-flex align-items-center pt-4">
                    <div class="avatar">
                      <img
                        :src="getImgUrlLogo(settings.short_cut)"
                        alt="avatar"
                        width="40"
                        class="img-fluid rounded-circle me-3"
                      />
                    </div>
                    <div class="avatar-info">
                      <h6 class="mb-0 avatar-name">{{ post.auteur }}</h6>
                      <span class="small fw-medium text-muted">{{
                        post.created
                      }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!--pagination start-->
        <div class="row justify-content-center align-items-center mt-5">
          <div class="col-auto my-1">
            <a href="#" class="btn btn-soft-primary btn-sm">Previous</a>
          </div>
          <div class="col-auto my-1">
            <nav>
              <ul class="pagination rounded mb-0">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-auto my-1">
            <a href="#" class="btn btn-soft-primary btn-sm">Next</a>
          </div>
        </div>
        <!--pagination end-->
      </div>
    </section>
  </div>
</template>
<script>
import {
  getBlogCategory,
  getPosts,
  getSettings,
} from "../config/serviceProvider";
import { SOCKET_URL } from "../config";

export default {
  data() {
    return {
      category: [],
      settings: {},
      posts: [],
      url: SOCKET_URL,
    };
  },
  async created() {
    await getBlogCategory()
      .then((res) => {
        this.category = res.data;
        console.log(this.category);
      })
      .catch((error) => {
        console.log(error);
      });

    await getSettings()
      .then((res) => {
        this.settings = res.data;
        console.log(this.settings);
      })
      .catch((error) => {
        console.log(error);
      });

    await getPosts()
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    getImgUrl: function (imagePath) {
      return SOCKET_URL + "posts/" + imagePath;
    },
    navigate(id, slug) {
      this.$router.push("/blog/" + slug + "/" + id);
    },
    getImgUrlLogo: function (imagePath) {
      return SOCKET_URL + "logo/" + imagePath;
    },
  },
};
</script>

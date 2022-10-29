<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';
import {onMounted} from 'vue';
import {getSettings} from './config/serviceProvider';
import {SOCKET_URL} from './config';

onMounted(() => {
  getSettings().then(res => {
    console.log(res.data)
    const favicon = document.getElementById("favicon");
      favicon.href = SOCKET_URL + 'logo/' + res.data.short_cut;

      const logo = document.getElementById("ourLogo");
      logo.src = SOCKET_URL + 'logo/' + res.data.logo;
  }).catch(error => {
    console.log(error)
  })


});
</script>


<template>
  <main>
    <Header/>
    <RouterView />
    <Footer/>
  </main>
</template>







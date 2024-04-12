<script setup>
import Header from './components/Header.vue'
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <div class="RuggedFrame_frameContainer__6D0wE">
      <div class="RuggedFrame_frameMainBackground__j9_FH"></div>
      <div class="RuggedFrame_frameHexBackground__FRpzd"></div>
      <div id="top" class="RuggedFrame_frame__3MbLU">
         <Header/>

            <router-view> </router-view>

         <Footer/>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>

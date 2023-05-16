<template>
  <TheHeader />
  <main>
    <section class="page">
      <div class="page-content container">
        <ChessBoard />
        <SideBar />
      </div>
    </section>
    <!-- ./page -->
  </main>
  <!-- ./main -->
  <TheFooter />
</template>

<script setup lang="ts">
import ChessBoard from "@/components/ChessBoard.vue";
import SideBar from "@/components/SideBar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
}
</style>

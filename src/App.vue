<template>
  <TheHeader />
  <!-- ./header -->
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
  <!-- ./footer -->
</template>

<script setup lang="ts">
import ChessBoard from "@/components/ChessBoard.vue";
import SideBar from "@/components/SideBar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<style lang="scss">
.page-content {
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>

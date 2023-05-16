<template>
  <section class="page">
    <ChessBoard />
    <SideBar />
  </section>
</template>

<script setup lang="ts">
import ChessBoard from "@/components/Chessboard.vue";
import SideBar from "@/components/Sidebar.vue";
</script>

<style scoped lang="scss">
.page {
  display: flex;
}
</style>

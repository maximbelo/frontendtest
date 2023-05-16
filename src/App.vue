<template>
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
</template>

<script setup lang="ts">
import ChessBoard from "@/components/ChessBoard.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
}
</style>

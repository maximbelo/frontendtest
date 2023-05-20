<template>
  <header>
    <div class="header-content container">
      <div class="logo">
        <a href="https://www.chess.com/"
          ><img src="/images/chesscom-logo.png" alt="Chess.com logo"
        /></a>
      </div>
      <h1>ChessClickathon.</h1>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  margin: 32px 0;
}

.header-content {
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    width: 88%;
  }

  a {
    display: flex;
  }

  img {
    height: 59px;
    width: 192px;

    @media (max-width: 768px) {
      height: 37px;
      width: 131px;
      margin-bottom: 10px;
    }
  }
}
</style>

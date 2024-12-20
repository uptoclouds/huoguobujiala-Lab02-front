<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    resource: string;
  }>(),
  {
    resource: 'page',
  }
);
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-yellow-500 text-white">
    <!-- 错误提示标题 -->
    <h1 class="text-6xl font-extrabold mb-4 text-center">
      Oops!
    </h1>

    <!-- 错误描述 -->
    <h3 class="text-2xl font-semibold mb-8 text-center">
      The <span class="text-3xl font-bold text-black">{{ props.resource }}</span> you're looking for is not here.
    </h3>

    <!-- 返回首页按钮 -->
    <router-link
      :to="{ name: 'event-list-view' }"
      class="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-lg font-medium py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform"
    >
      Back to the home page
    </router-link>
  </div>
</template>

<style scoped>
/* 添加渐变动画效果 */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-br {
  animation: gradientAnimation 10s ease infinite;
}
</style>

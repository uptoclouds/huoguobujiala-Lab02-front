<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header class="py-6">
      <!-- Container for centering the content -->
      <div class="flex justify-center items-center bg-blue-200 w-full py-6">
        <div class="max-w-screen-xl w-full px-4 flex flex-col items-center">
          <!-- Title -->
          <h1 class="text-6xl font-bold text-blue-800 mb-4">
            Olympic Medal Table
          </h1>

          <!-- Navigation -->
          <nav class="flex space-x-4">
  <RouterLink class="font-bold text-xl text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">
    Country    
  </RouterLink>
  <span class="mx-4">
    <i class="fas fa-circle"></i> <!-- 使用 Font Awesome 图标 -->
  </span>
  <RouterLink class="font-bold text-xl text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">
    About
  </RouterLink>
</nav>
        </div>
      </div>
    </header>

    <!-- Main content area -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';

const store = useEventStore();
const { event } = storeToRefs(store);
</script>

<template>
  <div v-if="event" class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto transform transition-transform duration-300 hover:scale-105">
    <!-- 标题 -->
    <h1 class="text-4xl font-extrabold mb-8 text-center text-white uppercase tracking-widest">
      🌍 {{ event.countryName }}
    </h1>

    <!-- 导航 -->
    <nav class="flex justify-center items-center mb-8">
      <div class="flex space-x-8">
        <RouterLink
          :to="{ name: 'event-detail-view' }"
          class="bg-white text-purple-600 hover:text-purple-800 px-6 py-3 rounded-full shadow-lg hover:shadow-2xl font-semibold transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-info-circle mr-2"></i>Country Details
        </RouterLink>
        <RouterLink
          :to="{ name: 'event-register-view' }"
          class="bg-white text-purple-600 hover:text-purple-800 px-6 py-3 rounded-full shadow-lg hover:shadow-2xl font-semibold transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-comments mr-2"></i>Comments
        </RouterLink>
        <RouterLink
          :to="{ name: 'event-edit-view' }"
          class="bg-white text-purple-600 hover:text-purple-800 px-6 py-3 rounded-full shadow-lg hover:shadow-2xl font-semibold transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-pencil-alt mr-2"></i>Sports Programs
        </RouterLink>
      </div>
    </nav>

    <!-- 路由视图 -->
    <RouterView :event="event" class="bg-white p-8 rounded-2xl shadow-xl mt-6 border-t-8 border-indigo-500" />
  </div>
</template>

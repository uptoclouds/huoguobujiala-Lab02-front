<script setup lang="ts">
import { type Event } from '@/type'
defineProps<{
  event: Event
}>()
</script>
<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cursor-pointer border border-gray-600 p-10 w-[1200px] mb-4 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg">
      <div class="flex flex-row items-center">
        <h2 class="text-2xl font-semibold mb-2">{{ event.countryName }}</h2>
        <div class="flex flex-row items-start space-y-2">
          <span class="font-medium">Rank: {{ event.rank }}</span>
          <span class="font-medium">Total Medals: {{ event.totalMedalNum }}</span>
          <span class="font-medium">Gold Medals: {{ event.goldMedalNum }}</span>
          <span class="font-medium">Silver Medals: {{ event.silverMedalNum }}</span>
          <span class="font-medium">Bronze Medals: {{ event.bronzeMedalNum }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
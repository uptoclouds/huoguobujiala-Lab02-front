<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/type'
const props = defineProps<{
  event: Event
  id: 'String'
}>()
const { event } = toRefs(props)
</script>
<template>
  <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Rank: {{ event.rank }}</h2>
      <p class="text-gray-600">TrankChangeType: {{ event.rankChangeType }}</p>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
        <div>
          <i class="fas fa-trophy text-gold-500 mr-2"></i>
          <p class="text-lg font-semibold">Gold Medals</p>
        </div>
        <p class="text-lg font-semibold">{{ event.goldMedalNum }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
        <div>
          <i class="fas fa-trophy text-silver-500 mr-2"></i>
          <p class="text-lg font-semibold">Silver Medals</p>
        </div>
        <p class="text-lg font-semibold">{{ event.silverMedalNum }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
        <div>
          <i class="fas fa-trophy text-bronze-500 mr-2"></i>
          <p class="text-lg font-semibold">Bronze Medals</p>
        </div>
        <p class="text-lg font-semibold">{{ event.bronzeMedalNum }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 自定义颜色 */
.text-gold-500 { color: #FFD700; }
.text-silver-500 { color: #C0C0C0; }
.text-bronze-500 { color: #CD7F32; }
</style>
<script setup lang="ts">
import type { Event } from '@/type'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-class">
    <div class="event-details">
      <h2 class="text-2xl font-semibold">{{ event.countryName }}</h2>
      <span class="block mt-2">{{ event.countryName }} on {{ event.countryName }}</span>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-details:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
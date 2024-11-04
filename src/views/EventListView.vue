<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/type'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1 class="text-3xl font-bold text-center my-6">Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="flex justify-between w-full max-w-md mt-4">
      <div class="flex-1 text-left">
        <RouterLink
          id="page-prev"
          :to="{ name: 'event-list-view', query: { page: page - 1 } }"
          rel="prev"
          v-if="page !== 1"
          class="text-blue-500 hover:underline"
        >
          &#60; Prev Page
        </RouterLink>
      </div>

      <div class="flex-1 text-right">
        <RouterLink
          id="page-next"
          :to="{ name: 'event-list-view', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="text-blue-500 hover:underline"
        >
          Next Page &#62;
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>


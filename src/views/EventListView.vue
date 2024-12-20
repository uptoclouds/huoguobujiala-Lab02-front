<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import { type Event } from '@/type';
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService';

const events = ref<Event[] | null>(null); // 允许 events 为 null 或 Event 数组
const totalEvents = ref(0);
const itemsPerPage = ref(2); // 默认显示 2 个国家信息

const selectedCountries = ref<Event[]>([]); // 存储多个选中的国家

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / itemsPerPage.value);
  return page.value < totalPages;
});

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const page = computed(() => props.page);

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(itemsPerPage.value, page.value)
      .then(({ evented, total }) => {
        events.value = evented;
        totalEvents.value = total;
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  });
});

const safeItemsPerPage = computed({
  get: () => itemsPerPage.value.toString(),
  set: (value) => {
    const num = parseInt(value, 10);
    itemsPerPage.value = isNaN(num) || num < 1 ? 1 : num;
  },
});

const selectCountry = (country: Event) => {
  if (!selectedCountries.value.find((selected) => selected.id === country.id)) {
    selectedCountries.value.push(country);
  }
};
</script>

<template>
  <div class="bg-gradient-to-br from-cyan-700 via-indigo-800 to-purple-900 min-h-screen py-10 px-4 text-white">
    <!-- 页面标题 -->
    <h1 class="text-5xl font-extrabold text-center mb-12 underline decoration-yellow-500 decoration-wavy">
      Olympic Country Information
    </h1>

    <!-- 国家信息展示部分 -->
    <div class="grid grid-cols-1 gap-8">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
        @click="selectCountry(event)"
        class="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 p-6 rounded-xl shadow-xl border-4 border-transparent hover:border-8 hover:border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300"
      />
    </div>

    <!-- 每页显示的国家数量 -->
    <div class="mt-12 text-center">
      <label class="text-xl font-medium mb-4 inline-block">
        Countries per page:
      </label>
      <input
        v-model="safeItemsPerPage"
        type="number"
        min="1"
        class="w-32 border border-gray-300 text-gray-700 rounded-md p-2 text-center focus:outline-none focus:ring-2 focus:ring-yellow-500 ring-animate"
        placeholder="Enter here"
      />
    </div>

    <!-- 分页控制 -->
    <div class="flex justify-between items-center max-w-4xl mx-auto mt-8">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page !== 1"
        class="inline-flex items-center px-6 py-3 text-lg font-medium bg-gradient-to-r from-teal-500 to-green-500 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
      >
        &#60; Prev Page
      </RouterLink>
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="inline-flex items-center px-6 py-3 text-lg font-medium bg-gradient-to-r from-teal-500 to-green-500 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
@keyframes ringAnimation {
  0% {
    box-shadow: 0 0 0 2px transparent;
  }
  50% {
    box-shadow: 0 0 0 2px #ffcc00;
  }
  100% {
    box-shadow: 0 0 0 2px transparent;
  }
}

.ring-animate {
  animation: ringAnimation 2s infinite;
}
</style>

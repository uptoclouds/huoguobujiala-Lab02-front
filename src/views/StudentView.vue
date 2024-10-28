<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentEvent } from '@/type'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const events = ref<StudentEvent[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Information For Student (need VPN)</h1>
  <!-- new element -->
  <div class="students">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

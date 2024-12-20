<template>
  <div class="relative">
    <!-- 主容器 -->
    <div class="max-w-xl mx-auto my-8 p-6 bg-gradient-to-br from-green-200 via-white to-blue-200 rounded-2xl shadow-2xl">
      <p class="text-2xl font-bold text-gray-800 mb-6 text-center underline decoration-green-400 decoration-wavy">
        Leave a comment for the athletes
      </p>
      <input
        v-model="newCommentText"
        placeholder="Type your comment here..."
        class="w-full p-4 mb-6 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 placeholder-gray-400"
      />
      <button
        @click="addComment"
        class="w-full p-4 text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        Add Comment
      </button>
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="mt-6 p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        <p class="text-gray-800 font-medium text-lg">
          {{ comment.text }}
        </p>
      </div>
    </div>

    <!-- 弹出层 -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
    >
      <div
        class="p-8 bg-white rounded-xl shadow-xl text-center animate-bounce"
      >
        <h2 class="text-3xl font-bold text-green-500 mb-4">Great Job!</h2>
        <p class="text-lg text-gray-700 mb-6">
          Your comment has been added successfully! Keep inspiring others!
        </p>
        <button
          @click="closePopup"
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import { useCommentsStore } from '@/stores/message';
import type { Comment } from '@/type';

const props = defineProps<{
  event: { countryName: string; id: string };
}>();

const store = useCommentsStore();
const comments = computed(() =>
  store.getAllComments().filter((comment) => comment.eventId === props.event.id)
);
const newCommentText = ref('');
const showPopup = ref(false);

const addComment = () => {
  if (newCommentText.value.trim()) {
    const newComment: Comment = {
      id: Date.now().toString(),
      text: newCommentText.value,
      eventId: props.event.id,
    };
    store.addComment(newComment);
    newCommentText.value = '';

    // 显示弹出层
    showPopup.value = true;

    // 自动关闭弹出层
    setTimeout(() => {
      showPopup.value = false;
    }, 30000);
  }
};

const closePopup = () => {
  showPopup.value = false;
};
</script>

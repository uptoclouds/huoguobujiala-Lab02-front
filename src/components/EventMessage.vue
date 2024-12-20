<template>
    <div>
      <p>Leave a comment for the event</p>
      <input v-model="newCommentText" placeholder="Type a comment" />
      <button @click="addComment" :style="{ backgroundColor: '#4CAF50', color: 'white' }"> Add Comment </button>
      <div v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, computed } from 'vue';
  import { useCommentsStore } from '@/stores/message';
  import type { Comment } from '@/type'; // 确保路径正确
  
  const props = defineProps<{
    event: { countryName: string; id: string };
  }>();
  const store = useCommentsStore();
  const comments = computed(() => store.getAllComments());
  const newCommentText = ref('');
  
  const addComment = () => {
    if (newCommentText.value.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        text: newCommentText.value,
        eventId: props.event.id
      };
      store.addComment(newComment);
      newCommentText.value = ''; // 清空输入框
    }
  };
  </script>
  
  <style scoped>
  /* 你的样式 */
  </style>
import { defineStore } from 'pinia';
import type { Comment } from '@/type';

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [] as Comment[] 
  }),
  actions: {
    addComment(comment: Comment) {
      this.comments.push(comment);
    },
    getAllComments() {
      return this.comments;
    }
  }
});
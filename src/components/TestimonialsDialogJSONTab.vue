<template>
  <div class="testimonials-tab__json">
    <textarea
      class="testimonials-tab__json-input"
      :value="JSON.stringify(testimonials)"
      @input="handleInput($event)"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ITestimonial } from '@/interfaces';

// Incoming props from the parent.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  testimonials: {
    type: Array as () => ITestimonial[],
    default: () => [],
    required: true,
  },
});

// When a testimonial(s) is updated, emit an event to the parent
// to change the prop themeselves. Props should NOT be edited
// from child components.
const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:testimonials', value: ITestimonial[]): void;
}>();

/**
 * When a user types in the textarea, parse the JSON and emit.
 *
 * @param {Event} e Event object when user submits
 *
 * @returns {void}
 * @author Nick Mwalo <mwalonick@gmail.com>
 */
const handleInput = (e: Event): void => {
  // Get the input from the event target.
  const input = (e.target as HTMLTextAreaElement).value;

  // Parse the data into JSON.
  const data = JSON.parse(input);

  // Emit the data to the parent.
  emit('update:testimonials', data);
};
</script>

<style scoped>
.testimonials-tab__json {
  height: 100%;
}

.testimonials-tab__json-input {
  width: 100%;
  height: 100%;

  border: 2px solid #d4d4d4;
  border-radius: 6px;

  padding: 1rem;
}
</style>

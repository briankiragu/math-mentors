<template>
  <div>
    <div class="form-group col-12">
      <textarea
        id="testimonials"
        type="text"
        rows="20"
        class="form-control"
        :value="JSON.stringify(testimonials)"
        @input="handleInput($event)"
      ></textarea>
    </div>
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

const handleInput = (e: Event) => {
  // Get the input from the event target.
  const input = (e.target as HTMLTextAreaElement).value;

  // Parse the data into JSON.
  const data = JSON.parse(input);

  // Emit the data to the parent.
  emit('update:testimonials', data);
};
</script>

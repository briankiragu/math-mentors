<template>
  <div>
    <div class="form-group col-12">
      <textarea
        type="text"
        id="testimonials"
        rows="20"
        class="form-control"
        @input="handleInput($event)"
        >{{ testimonials }}</textarea
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITestimonial } from '@/interfaces';

// Incoming props from the parent.
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
  (e: 'update:testimonials', value: ITestimonial[]): void;
}>();

const handleInput = (e: Event) => {
  // Get the input from the event target.
  const input = (e.target as HTMLTextAreaElement).value;

  // Parse the data into JSON.
  const data = JSON.parse(input);

  // Emit the data to the parent.
  //
};
</script>

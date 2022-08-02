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

<<<<<<< HEAD
const handleInput = (
  event: Event,
  id: number,
  field: 'testimonials'
): void => {
  // Find the testimonial that we are editing.
  const testimonial = props.testimonials.find(
    (testimonial) => testimonial.id === id
  );
};

=======
const handleInput = (e: Event) => {
  // Get the input from the event target.
  const input = (e.target as HTMLTextAreaElement).value;
>>>>>>> 87caaff72b4955ee1629963dc45d63d3e7029262

  // Parse the data into JSON.
  const data = JSON.parse(input);

  // Emit the data to the parent.
  //
};
</script>

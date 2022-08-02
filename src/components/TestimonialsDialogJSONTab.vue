<template>
  <div>
    <div class="form-group col-12">
      <textarea
        type="text"
        id="testimonials"
        class="form-control"
        @input="handleInput($event, testimonials)"
        >{{ testimonials }}</textarea
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITestimonial } from '@/interfaces';
import { onMounted } from 'vue';
import TestimonialsDialogVue from './TestimonialsDialog.vue';
import TestimonialsDialogFormTabVue from './TestimonialsDialogFormTab.vue';

// Incoming props from the parent.
const props = defineProps({
  testimonials: { type: Array as () => ITestimonial[], required: true },
});

// When a testimonial(s) is updated, emit an event to the parent
// to change the prop themeselves. Props should NOT be edited
// from child components.
const emit = defineEmits<{
  (e: 'update:testimonials', value: ITestimonial[]): void;
}>();


</script>

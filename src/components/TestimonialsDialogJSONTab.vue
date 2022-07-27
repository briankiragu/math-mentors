<template>
  <div>
    <div
      v-for="testimonial of testimonials"
      :key="`testimonial-${testimonial.id}-json`"
      class="mb-2"
    >
      {{ testimonial }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITestimonial } from '@/interfaces';

const props = defineProps({
  testimonials: { type: Array as () => ITestimonial[], required: true },
});

const emit = defineEmits<{
  (e: 'update:testimonials', value: ITestimonial[]): void;
}>();
</script>

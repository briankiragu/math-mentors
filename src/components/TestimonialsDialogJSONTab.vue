<template>
  <h1>This is the JSON tab</h1>
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

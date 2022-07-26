<template>
  <div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          class="form-control"
          autocomplete="name"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="profession">Profession</label>
        <input
          type="text"
          id="profession"
          class="form-control"
          autocomplete="organization-title"
        />
      </div>
      <div class="form-group col-12">
        <label for="message">Message</label>
        <textarea type="text" id="message" class="form-control"></textarea>
      </div>
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

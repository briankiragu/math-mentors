<template>
  <div>
    <div
      v-for="testimonial of testimonials"
      :key="`testimonial-${testimonial.id}-form`"
      class="mb-4 form-row"
    >
      <!-- Testimonial author -->
      <div class="form-group col-md-6">
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          class="form-control"
          autocomplete="name"
          :value="testimonial.author"
          @input="handleInput($event, testimonial.id, 'author')"
        />
      </div>

      <!-- Testimonial author's profession -->
      <div class="form-group col-md-6">
        <label for="profession">Profession</label>
        <input
          type="text"
          id="profession"
          class="form-control"
          autocomplete="organization-title"
          :value="testimonial.author_profession"
          @input="handleInput($event, testimonial.id, 'author_profession')"
        />
      </div>

      <!-- Testimonial message -->
      <div class="form-group col-12">
        <label for="message">Message</label>
        <textarea
          type="text"
          id="message"
          class="form-control"
          @input="handleInput($event, testimonial.id, 'message')"
          >{{ testimonial.message }}</textarea
        >
      </div>
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

/**
 * When a user updates a field in the form, look for the testimonial
 * within the props and update the relevant field.
 *
 * @param {Event} event The event object.
 * @param {number} id The ID of the testimonial to update.
 * @param {string} field The field in the testimonial to update.
 *
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const handleInput = (
  event: Event,
  id: number,
  field: 'author' | 'author_profession' | 'message'
): void => {
  // Find the testimonial that we are editing.
  const testimonial = props.testimonials.find(
    (testimonial) => testimonial.id === id
  );

  // If a testimonial was found...
  if (testimonial !== undefined) {
    // Get the input from the user.
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement)
      .value;

    // Update the field that was provided.
    testimonial[field] = value;

    // Update the updated_at field.
    testimonial.updated_at = new Date().toISOString();

    // Emit the data to the parent.
    //
  }
};
</script>

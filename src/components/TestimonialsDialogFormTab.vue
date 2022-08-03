<template>
  <div>
    <!-- Button to add a testimonial. -->
    <button class="btn btn-info my-3" @click.prevent="handleNewTestimonial">
      Add a testimonial
    </button>

    <!-- List of testimonial inputs. -->
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
          @input.lazy="handleInput($event, testimonial.id, 'author')"
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
          @input.lazy="handleInput($event, testimonial.id, 'author_profession')"
        />
      </div>

      <!-- Testimonial message -->
      <div class="form-group col-12">
        <label for="message">Message</label>
        <textarea
          type="text"
          id="message"
          class="form-control"
          @input.lazy="handleInput($event, testimonial.id, 'message')"
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
 * Whenever a user clicks the button, add a new empty testimonial to the list
 * and emit an event to the parent with the updated list of data.
 *
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const handleNewTestimonial = (): void => {
  // Create a new empty testimonial.
  const testimonial: ITestimonial = {
    id: props.testimonials.length + 1,
    author: '',
    author_profession: '',
    message: '',
    created_at: new Date().toISOString(),
    updated_at: null,
  };

  // Create a deep clone of the testimonials array.
  const clone = JSON.parse(JSON.stringify(props.testimonials));

  // Add the new testimonial to the clone.
  clone.push(testimonial);

  // Emit the new testimonials array to the parent.
  emit('update:testimonials', clone);
};

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
  // Create a deep copy of the testimonials. This is to ensure that
  // we do not edit a reference to the prop.
  const clone: ITestimonial[] = JSON.parse(JSON.stringify(props.testimonials));

  // Find the index testimonial that we are editing.
  const testimonialIndex = clone.findIndex(
    (testimonial) => testimonial.id === id
  );

  // If a testimonial was found...
  if (testimonialIndex !== -1) {
    // Get the input from the user.
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement)
      .value;

    // Update the field that was provided.
    clone[testimonialIndex][field] = value;

    // Update the updated_at field.
    clone[testimonialIndex].updated_at = new Date().toISOString();

    // Emit the updated testimonials to the parent.
    emit('update:testimonials', clone);
  }
};
</script>

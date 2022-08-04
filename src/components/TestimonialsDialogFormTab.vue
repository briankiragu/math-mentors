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
      class="position-relative rounded-lg bg-light mb-4 p-3 form-row"
    >
      <!-- Delete button -->
      <button
        type="button"
        class="delete-testimonial close position-absolute rounded-circle"
        aria-label="Close"
        @click.prevent="handleDeleteTestimonial(testimonial.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M16 9H8v10h8V9zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12z"
            opacity=".3"
          />
          <path
            d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
          />
        </svg>
      </button>

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
  clone.unshift(testimonial);

  // Emit the new testimonials array to the parent.
  emit('update:testimonials', clone);
};

/**
 * It deletes a testimonial from the array using its ID
 * and emits the updated array to the parent.
 *
 * @param {number} id The ID of the testimonial to remove.
 *
 * @returns {void}
 * @author Nick Mwalo <mwalonick@gmail.com>
 */
const handleDeleteTestimonial = (id: number): void => {
  // Create a deep clone of the testimonials array.
  const clone: ITestimonial[] = JSON.parse(JSON.stringify(props.testimonials));

  // Find the index of the removed testimonial.
  const testimonialIndex = clone.findIndex(
    (testimonial) => testimonial.id === id
  );

  // If the is not found...
  if (testimonialIndex !== -1) {
    // Remove the testimonial from the array of testimonials.
    clone.splice(testimonialIndex, 1);

    // Emit the new testimonials array to the parent.
    emit('update:testimonials', clone);
  }
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

<style scoped>
.delete-testimonial {
  width: 38px;
  height: 38px;
  top: 5px;
  right: 8px;
  background-color: #cbd5e1;
}
</style>

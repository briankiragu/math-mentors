<template>
  <div>
    <!-- Button to add a testimonial. -->
    <button
      class="form-tab__new-testimonial"
      @click.prevent="handleNewTestimonial"
    >
      Add a testimonial
    </button>

    <!-- List of testimonial inputs. -->
    <div
      v-for="(testimonial, index) of testimonials"
      :key="`testimonial-${index}-form`"
      class="form-tab__testimonial"
    >
      <!-- Delete button -->
      <button
        type="button"
        class="form-tab__testimonial__delete"
        aria-label="Close"
        @click.prevent="handleDeleteTestimonial(index)"
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

      <!-- Testimonial name -->
      <div class="form-tab__testimonial__field">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          autocomplete="name"
          :value="testimonial.name"
          @input="handleInput($event, index, 'name')"
        />
      </div>

      <!-- Testimonial author's title -->
      <div class="form-tab__testimonial__field">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          autocomplete="organization-title"
          :value="testimonial.title"
          @input="handleInput($event, index, 'title')"
        />
      </div>

      <!-- Testimonial quote -->
      <div class="form-tab__testimonial__field">
        <label for="quote">Quote</label>
        <textarea
          id="quote"
          type="text"
          rows="6"
          :value="testimonial.quote"
          @input="handleInput($event, index, 'quote')"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
  // eslint-disable-next-line no-unused-vars
  (e: 'update:testimonials', value: ITestimonial[]): void;
}>();

/**
 * Whenever a user clicks the button, add a new empty testimonial to the list
 * and emit an event to the parent with the updated list of data.
 *
 * @returns {void}
 * @name Brian Kariuki <bkariuki@hotmail.com>
 */
const handleNewTestimonial = (): void => {
  // Create a new empty testimonial.
  const testimonial: ITestimonial = {
    id: props.testimonials.length + 1,
    name: '',
    title: '',
    quote: '',
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
 * @name Nick Mwalo <mwalonick@gmail.com>
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
 * @param {number} index The index of the testimonial to update.
 * @param {string} field The field in the testimonial to update.
 *
 * @returns {void}
 * @name Brian Kariuki <bkariuki@hotmail.com>
 */
const handleInput = (
  event: Event,
  index: number,
  field: 'name' | 'title' | 'quote'
): void => {
  // Create a deep copy of the testimonials. This is to ensure that
  // we do not edit a reference to the prop.
  const clone: ITestimonial[] = JSON.parse(JSON.stringify(props.testimonials));

  // Get the testimonial via its index
  const testimonial = clone.at(index);

  // If a testimonial was found...
  if (testimonial) {
    // Get the input from the user.
    const { value } = event.target as HTMLInputElement | HTMLTextAreaElement;

    // Update the field that was provided.
    testimonial[field] = value;

    // Update the updated_at field.
    testimonial.updated_at = new Date().toISOString();

    // Emit the updated testimonials to the parent.
    emit('update:testimonials', clone);
  }
};
</script>

<style scoped>
.form-tab__new-testimonial {
  border: none;
  border-radius: 4px;

  margin-bottom: 0.6rem;
  padding: 0.7rem 1.2rem;

  background-color: #22c55e;

  color: #f0fdf4;
  font-size: 0.9rem;
  font-weight: 300;

  cursor: pointer;
}
.form-tab__testimonial {
  position: relative;

  border: none;
  border-radius: 8px;

  margin-bottom: 1.6rem;
  padding: 1rem 1.4rem 0.6rem 1.4rem;

  background-color: #e0f2fe;
}

.form-tab__testimonial__delete {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  width: 30px;
  height: 30px;

  border: none;
  border-radius: 100%;

  background-color: #f0f9ff;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s ease-in;
  cursor: pointer;
}

.form-tab__testimonial__delete:hover {
  background-color: #f87171;
}

.form-tab__testimonial__delete svg {
  width: 20px;
  height: 20px;
}

.form-tab__testimonial__field {
  margin-bottom: 0.8rem;

  display: flex;
  flex-direction: column;
}

.form-tab__testimonial__field label {
  margin-bottom: 0.2rem;

  color: #475569;
  font-size: 0.85rem;
  font-weight: 400;
}

.form-tab__testimonial__field input,
.form-tab__testimonial__field textarea {
  border: 1px solid #bae6fd;
  border-radius: 4px;

  padding: 0.5rem 0.8rem;

  color: #6b7280;
  font-family: 'Inter', sans-serif;

  transition: border-color 0.2s ease-in;
}

.form-tab__testimonial__field input:hover,
.form-tab__testimonial__field textarea:hover {
  border-color: #7dd3fc;
}

.form-tab__testimonial__field input:focus,
.form-tab__testimonial__field textarea:focus {
  outline: none;
  border-color: #60a5fa;
}

.form-tab__testimonial__field input {
  margin-right: 1.8rem;
}
</style>

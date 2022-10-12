// Define the SFC component.
const TestimonialsDialogFormTab = {
  name: 'TestimonialsDialogFormTab',

  props: {
    testimonials: { type: Array, default: () => [], required: true },
  },

  emit: ['update:testimonials'],

  setup(props, { emit }) {
    /**
     * Whenever a user clicks the button, add a new empty testimonial to the list
     * and emit an event to the parent with the updated list of data.
     *
     * @returns {void}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleNewTestimonial = () => {
      // Create a new empty testimonial.
      const testimonial = {
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
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleDeleteTestimonial = (id) => {
      // Create a deep clone of the testimonials array.
      const clone = JSON.parse(JSON.stringify(props.testimonials));

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
     * @param {'name' | 'title' | 'quote'} field The field in the testimonial to update.
     *
     * @returns {void}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleInput = (event, index, field) => {
      // Create a deep copy of the testimonials. This is to ensure that
      // we do not edit a reference to the prop.
      const clone = JSON.parse(JSON.stringify(props.testimonials));

      // Get the testimonial via its index
      const testimonial = clone.at(index);

      // If a testimonial was found...
      if (testimonial) {
        // Get the input from the user.
        const { value } = event.target;

        // Update the field that was provided.
        testimonial[field] = value;

        // Update the updated_at field.
        testimonial.updated_at = new Date().toISOString();

        // Emit the updated testimonials to the parent.
        emit('update:testimonials', clone);
      }
    };

    // Return the methods and data.
    return { handleNewTestimonial, handleDeleteTestimonial, handleInput };
  },

  template: `
    <div>
      <!-- Button to add a testimonial. -->
      <button
        class="button form-tab__new-testimonial"
        @click.prevent="handleNewTestimonial()"
      >
        Add a testimonial
      </button>

      <!-- List of testimonial inputs. -->
      <div
        v-for="(testimonial, index) of testimonials"
        :key="index"
        class="form-tab__testimonial"
      >
        <!-- Delete button -->
        <button
          type="button"
          class="button form-tab__testimonial__delete"
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
  `,
};

export default TestimonialsDialogFormTab;

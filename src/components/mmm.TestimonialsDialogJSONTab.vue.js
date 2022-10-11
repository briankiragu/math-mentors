const TestimonialsDialogJSONTab = {
  name: 'TestimonialsDialogJSONTab',
  props: {
    testimonials: { type: Array, default: () => [], required: true },
  },

  emit: ['update:testimonials'],

  setup(_, { emit }) {
    /**
     * When a user types in the textarea, parse the JSON and emit.
     *
     * @param {Event} e Event object when user submits
     *
     * @returns {void}
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleInput = (event) => {
      // Get the input from the event target.
      const { value } = event.target;

      // Parse the data into JSON.
      const data = JSON.parse(value);

      // Emit the data to the parent.
      emit('update:testimonials', data);
    };

    // Return the methods and data.
    return { handleInput };
  },

  template: `
    <div class="testimonials-tab__json">
      <textarea
        class="testimonials-tab__json-input"
        :value="JSON.stringify(testimonials)"
        @input="handleInput($event)"
      ></textarea>
    </div>
  `,
};

export default TestimonialsDialogJSONTab;

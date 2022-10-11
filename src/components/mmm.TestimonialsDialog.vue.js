/* global Vue */

// Import the data composable.
import useData from '../composables/useData.js';

// Import the form tab component.
const TestimonialsDialogFormTab = Vue.defineAsyncComponent(() =>
  import('./mmm.TestimonialsDialogFormTab.vue.js')
);

// Import the HTML tab component.
const TestimonialsDialogJSONTab = Vue.defineAsyncComponent(() =>
  import('./mmm.TestimonialsDialogJSONTab.vue.js')
);

// Define the component.
const TestimonialsDialog = {
  name: 'TestimonialsDialog',
  components: {
    TestimonialsDialogFormTab,
    TestimonialsDialogJSONTab,
  },

  setup() {
    // Import methods for fetching data.
    const { getTestimonials, setTestimonials } = useData();

    // We want to get a template reference to the dialog.
    const dialogEl = Vue.ref(null);

    // Keeps track of which tab is active. Default is HTML.
    const activeTab = Vue.ref('HTML');

    // List of testimonials to edit.
    const testimonials = Vue.ref([]);

    // Check whether there are testimonials to edit.
    const hasTestimonials = Vue.computed(() => testimonials.value.length > 0);

    /**
     * Show the dialog.
     *
     * @returns {Promise<void>}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const showDialog = async () => {
      // When the component is mounted, fetch the testimonials.
      // Get the testimonials from the source (file or API).
      testimonials.value = await getTestimonials(
        `https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=getconfig&config=testimonials`
      );

      // If the testimonials are not empty.
      if (hasTestimonials.value) {
        // If the dialog is closed, open it.
        dialogEl.value?.showModal();
      } else {
        // eslint-disable-next-line no-alert
        window.alert(`Error: unable to get data from the web server.`);
      }
    };

    /**
     * Close the dialog with the correct type.
     *
     * @param {'close' | 'cancel'} action Closing action type.
     *
     * @returns {void}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const closeDialog = (action) => {
      // If the dialog is open, close it.
      dialogEl.value?.close(action);
    };

    /**
     * Handle when a user clicks on a tab.
     *
     * @param {string} tab The tab to activate.
     * @returns {void}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleTabClick = (tab) => {
      activeTab.value = tab;
    };

    /**
     * Handle when a user submits the form. Submit the updated testimonials to the API.
     *
     * @returns {Promise<void>}
     * @author Brian Kariuki <bkariuki@hotmail.com>
     * @author Nick Mwalo <mwalonick@gmail.com>
     */
    const handleSubmit = async () => {
      // Ensure the testimonials are not null.
      if (testimonials.value) {
        // Update the testimonials.
        await setTestimonials(
          `https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=saveconfig&config=testimonials`,
          testimonials.value
        );

        // Close the dialog.
        closeDialog('close');

        // Reload the page.
        window.location.reload();
      }
    };
  },

  template: `
    <div>
      <!-- Dialog trigger -->
      <button type="button" class="dialog-trigger" @click.prevent="showDialog">
        Edit
      </button>

      <!-- Dialog content -->
      <dialog
        id="testimonials"
        ref="dialogEl"
        class="dialog-content"
        modal-mode="mega"
      >
        <form method="dialog" @submit.prevent="handleSubmit">
          <!-- Dialog header -->
          <header class="dialog-content__header">
            <h3>Update Testimonials</h3>
            <button @click.prevent="closeDialog('close')">
              <img
                src="@/assets/icons/close.svg"
                alt="Close icon"
                width="25"
                height="25"
              />
            </button>
          </header>

          <!-- Dialog content -->
          <article v-if="hasTestimonials" class="dialog-content__body">
            <!-- Tab headings -->
            <nav class="dialog-content__body__tab">
              <button
                class="dialog-content__body__tab-item"
                :class="{ active: activeTab === 'HTML' }"
                @click.prevent="handleTabClick('HTML')"
              >
                HTML
              </button>
              <button
                class="dialog-content__body__tab-item"
                :class="{ active: activeTab === 'JSON' }"
                @click.prevent="handleTabClick('JSON')"
              >
                JSON
              </button>
            </nav>

            <!-- Tab body -->
            <main class="dialog-content__body__tab-content">
              <TestimonialsDialogFormTab
                v-show="activeTab === 'HTML'"
                v-model:testimonials="testimonials"
              />
              <TestimonialsDialogJSONTab
                v-show="activeTab === 'JSON'"
                v-model:testimonials="testimonials"
              />
            </main>
          </article>

          <!-- Dialog footer -->
          <footer>
            <menu class="dialog-content__footer">
              <button
                autofocus
                type="reset"
                class="dialog-content__footer-cancel"
                @click.prevent="closeDialog('cancel')"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="dialog-content__footer-confirm"
                value="confirm"
              >
                Update testimonials
              </button>
            </menu>
          </footer>
        </form>
      </dialog>
    </div>
  `,
};

// Export component.
export default TestimonialsDialog;

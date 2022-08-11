<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#editTestimonialsModal"
    >
      Edit
    </button>

    <!-- Modal -->
    <div
      id="editTestimonialsModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="editTestimonialsModalLabel"
      aria-hidden="true"
      style="z-index: 9999;"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal header -->
          <div class="modal-header">
            <h5 id="editTestimonialsModalLabel" class="modal-title">Edit</h5>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <!-- Tab headings -->
            <header class="mb-2">
              <button
                class="btn btn-primary mr-1"
                @click.prevent="handleTabClick('HTML')"
              >
                HTML
              </button>
              <button
                class="btn btn-secondary"
                @click.prevent="handleTabClick('JSON')"
              >
                JSON
              </button>
            </header>

            <!-- Tab body -->
            <main>
              <TestimonialsDialogFormTab
                v-show="currentActiveTab === 'HTML'"
                v-model:testimonials="testimonials"
              />
              <TestimonialsDialogJSONTab
                v-show="currentActiveTab === 'JSON'"
                v-model:testimonials="testimonials"
              />
            </main>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { onMounted, ref } from 'vue';
import TestimonialsDialogFormTab from '@/components/TestimonialsDialogFormTab.vue';
import TestimonialsDialogJSONTab from '@/components/TestimonialsDialogJSONTab.vue';
import useData from '@/composables/useData';
import { ITestimonial } from '@/interfaces';

// Import methods for fetching data.
const { getTestimonials } = useData();

// Keeps track of which tab is active. Default is HTML.
const currentActiveTab = ref<string>('HTML');

// List of testimonials to edit.
const testimonials = ref<ITestimonial[]>([]);

// When the component is mounted, fetch the testimonials.
onMounted(async () => {
  // Get the testimonials from the source (file or API).
  testimonials.value = await getTestimonials(`../../server/testimonials.cfg`);
});

// fetching data from api
fetch(
  'https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=getconfig&config=testimonials'
)
  .then((res) => {
    if (res.ok) {
      console.log('GET request');
    } else {
      console.log('GET request none');
    }
    return res;
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .then((error) => console.log(error));

fetch(
  'https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=getconfig&config=testimonials',
  {
    method: 'PUT',
    headers: {
      'content-type': 'testimonial/json',
    },
    body: JSON.stringify({
      author: '',
      author_profession: '',
      message: '',
      created_at: new Date().toISOString(),
      updated_at: null,
    }),
  }
)
  .then((res) => {
    if (res.ok) {
      console.log('PUT request');
    } else {
      console.log('PUT request none');
    }
    return res;
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .then((error) => console.log(error));

/**
 * Handle when a user clicks on a tab.
 *
 * @param {string} tab The tab to activate.
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const handleTabClick = (tab: 'HTML' | 'JSON'): void => {
  currentActiveTab.value = tab;
};
</script>

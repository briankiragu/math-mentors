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
                :class="{'active':currentActiveTab==='HTML'}"
                @click.prevent="handleTabClick('HTML')"
              >
                HTML
              </button>
              <button
                class="btn btn-secondary"
                :class="{'active':currentActiveTab==='JSON'}"
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
  testimonials.value = await getTestimonials(
    `https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=getconfig&config=testimonials`
  );
});

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

<style scoped>
  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height:540px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(29, 26, 26, 0.603);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    margin: auto;
  }
  button[type=button] {
    cursor: pointer; 
    margin-right: 10px;
    padding: 1px 0;
    font-size: 17px;
    text-align: center;
    font-weight: 200;
    border-radius: 5px;
  
  }
  .active {
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    background-color:#0066ff
  }

</style>

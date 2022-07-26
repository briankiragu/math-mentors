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
      class="modal fade"
      id="editTestimonialsModal"
      tabindex="-1"
      aria-labelledby="editTestimonialsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal header -->
          <div class="modal-header">
<<<<<<< HEAD
            <h5 class="modal-title" id="edittestimonialModalLabel">Edit</h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div class="row">
              <div class="row-4">
                <div class="list-group" id="list-tab" role="tablist">
                  <a
                    class="list-group-item list-group-item-action active"
                    id="list-html-list"
                    data-toggle="list"
                    href="#list-html"
                    role="tab"
                    aria-controls="html"
                    >HTml
                  </a>

                  <a
                    class="list-group-item list-group-item-action"
                    id="list-json-list"
                    data-toggle="list"
                    href="#list-json"
                    role="tab"
                    aria-controls="json"
                    >Json
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">...</div>
=======
            <h5 class="modal-title" id="editTestimonialsModalLabel">Edit</h5>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <!-- Tab headings -->
            <header>
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
>>>>>>> dec5219569556cc3188f4436cbefb004a7228f75
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

<<<<<<< HEAD
<script setup lang="ts"></script>
=======
<script setup lang="ts">
import { ref } from 'vue';
import TestimonialsDialogFormTab from '@/components/TestimonialsDialogFormTab.vue';
import TestimonialsDialogJSONTab from '@/components/TestimonialsDialogJSONTab.vue';
import { ITestimonial } from '@/interfaces';

// Keeps track of which tab is active. Default is HTML.
const currentActiveTab = ref<string>('HTML');

// List of testimonials to edit.
const testimonials = ref<ITestimonial[]>([
  {
    id: 1,
    message: 'This is the message',
    author: 'Brian',
    author_profession: 'coder',
    created_at: '26-07-22',
  },
  {
    id: 2,
    message: 'This is the message',
    author: 'Nick',
    author_profession: 'coder',
    created_at: '26-07-22',
  },
  {
    id: 3,
    message: 'This is the message',
    author: 'Lawrence',
    author_profession: 'manager',
    created_at: '26-07-22',
  },
]);

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
>>>>>>> dec5219569556cc3188f4436cbefb004a7228f75

<template>
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
      <form method="dialog">
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
        <article class="dialog-content__body">
          <!-- Tab headings -->
          <nav class="dialog-content__body__nav">
            <button
              class="dialog-content__body__nav-item"
              :class="{ active: activeTab === 'HTML' }"
              @click.prevent="handleTabClick('HTML')"
            >
              HTML
            </button>
            <button
              class="dialog-content__body__nav-item"
              :class="{ active: activeTab === 'JSON' }"
              @click.prevent="handleTabClick('JSON')"
            >
              JSON
            </button>
          </nav>

          <!-- Tab body -->
          <main>
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

// We want to get a template reference to the dialog.
const dialogEl = ref<HTMLDialogElement | null>(null);

// Keeps track of which tab is active. Default is HTML.
const activeTab = ref<string>('HTML');

// List of testimonials to edit.
const testimonials = ref<ITestimonial[]>([]);

/**
 * Show the dialog.
 *
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const showDialog = (): void => {
  // If the dialog is closed, open it.
  dialogEl.value?.showModal();
};

/**
 * Close the dialog with the correct type.
 *
 * @param {'close' | 'cancel'} action Closing action type.
 *
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const closeDialog = (action: 'close' | 'cancel'): void => {
  // If the dialog is open, close it.
  dialogEl.value?.close(action);
};

/**
 * Handle when a user clicks on a tab.
 *
 * @param {string} tab The tab to activate.
 * @returns {void}
 * @author Brian Kariuki <bkariuki@hotmail.com>
 */
const handleTabClick = (tab: 'HTML' | 'JSON'): void => {
  activeTab.value = tab;
};

// When the component is mounted, fetch the testimonials.
onMounted(async () => {
  // Get the testimonials from the source (file or API).
  testimonials.value = await getTestimonials(
    `https://new.mastermathmentor.com/mmm/admin_cmd.ashx?cmd=getconfig&config=testimonials`
  );
});
</script>

<style scoped>
button {
  border: 2px solid transparent;
  border-radius: 8px;

  padding: 0.7rem 1.4rem;

  font-size: 0.9rem;
  font-weight: 400;

  transition: all 0.2s ease-in;
  cursor: pointer;
}

button:focus {
  outline: none;
}

.dialog-trigger {
  background-color: #1d4ed8;

  color: #eff6ff;
}

.dialog-content {
  border: none;
  border-radius: 18px;

  box-shadow: 0px 2px 25px 4px rgba(0, 0, 0, 0.1);

  padding: 0;

  transition: opacity 0.5s ease-out;
}

.dialog-content__header {
  box-shadow: 0px 7px 25px 2px rgba(0, 0, 0, 0.1);

  padding: 1.6rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4rem;
}

.dialog-content__header h3 {
  margin: 0;
}

.dialog-content__header button {
  width: 45px;
  height: 45px;

  outline: none;
  border: none;
  border-radius: 100%;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background 0.2s ease-in;
}

.dialog-content__header button:hover {
  background-color: #e2e8f0;
}

.dialog-content__body {
  height: 50vh;

  overflow-y: auto;

  margin: 0;
  padding: 1.2rem 2rem;
}

.dialog-content__body__nav {
  margin-bottom: 1rem;
}

.dialog-content__body__nav-item {
  border-radius: 0;

  background-color: transparent;
}

.dialog-content__body__nav-item:hover {
  border-radius: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-color: #e2e8f0;
}

.dialog-content__body__nav-item.active {
  border-radius: 0;
  border-bottom: 2px solid #2563eb;
}

.dialog-content__footer {
  box-shadow: 0px -7px 25px 2px rgba(0, 0, 0, 0.1);

  margin: 0;
  padding: 1.4rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-content__footer-cancel {
  background: none;

  color: #334155;
}

.dialog-content__footer-cancel:hover {
  background: #e2e8f0;
  border: 2px solid #e2e8f0;
}

.dialog-content__footer-cancel:focus {
  border: 2px solid #cbd5e1;
}

.dialog-content__footer-confirm {
  border: 2px solid #1d4ed8;
  background: #1d4ed8;

  color: #eff6ff;
}
</style>

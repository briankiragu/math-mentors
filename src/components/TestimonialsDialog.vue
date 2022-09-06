<template>
  <div>
    <!-- Dialog trigger -->
    <button type="button" @click.prevent="showDialog">Edit</button>

    <!-- Dialog content -->
    <dialog id="testimonials" ref="dialogEl" modal-mode="mega">
      <form method="dialog">
        <!-- Dialog header -->
        <header>
          <h3>Update Testimonials</h3>
          <button @click.prevent="closeDialog('close')"></button>
        </header>

        <!-- Dialog content -->
        <article></article>

        <!-- Dialog footer -->
        <footer>
          <menu>
            <button
              autofocus
              type="reset"
              @click.prevent="closeDialog('cancel')"
            >
              Cancel
            </button>
            <button type="submit" value="confirm">Update testimonials</button>
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
const dialogEl = ref<HTMLDialogElement>(null);

// Keeps track of which tab is active. Default is HTML.
const currentActiveTab = ref<string>('HTML');

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
  currentActiveTab.value = tab;
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
#testimonials {
  transition: opacity 0.5s ease-out;
}
</style>

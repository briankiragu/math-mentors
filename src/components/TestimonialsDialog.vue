<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#edittestimonialModal"
    >
      EDIT
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="edittestimonialModal"
      tabindex="-1"
      aria-labelledby="edittestimonialModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="edittestimonialModalLabel">Edit</h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

    <div class="row">
      <div class="row-4">
        <div
         class="list-group" 
         id="list-tab" 
         role="tablist"
         >
        <a 
          class="list-group-item list-group-item-action active" 
          id="list-html-list"
          data-toggle="list" 
          href="#list-html"
          role="tab" 
          aria-controls="html">HTml
        </a>

        <a 
          class="list-group-item list-group-item-action" 
          id="list-json-list" 
          data-toggle="list"
           href="#list-json" 
           role="tab" 
           aria-controls="json">Json
        </a>
        </div>
      </div>
    </div>
    
          <div class="modal-body">...</div>
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

</script>

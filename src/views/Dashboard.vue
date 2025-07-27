<template lang="">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <vue-awesome-paginate
            :total-items="50"
            v-model="currentPage"
            :items-per-page="5"
            :max-pages-shown="5"

            :container-class="'inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse'"

            :paginate-buttons-class="'relative mx-[-1px] inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"

            :active-page-class="'relative mx-[-1px] inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20 bg-blue-50 text-blue-600 border-blue-500 z-30 !bg-blue-50 !text-blue-600 !border-blue-500'"

            :back-button-class="'relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"

            :next-button-class="'relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"
            @page-change="onPageChange"
            >
            <!-- Prev button SVG -->
      <template #prev-button-content>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </template>

      <!-- Next button SVG -->
      <template #next-button-content>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </template>
            </vue-awesome-paginate>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const totalItems = 100
const itemsPerPage = 10

function onPageChange(page) {
  console.log('Trang mới:', page)
}
</script>
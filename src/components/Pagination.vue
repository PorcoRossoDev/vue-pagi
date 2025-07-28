<template lang="">
  <div class="my-5 text-center">
      <vue-awesome-paginate
          :total-items="total"
          :items-per-page="per_page"
          :max-pages-shown="5"
          :container-class="'inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse'"
          :paginate-buttons-class="'relative mx-[-1px] inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"
          :active-page-class="'relative mx-[-1px] inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20 bg-blue-50 text-blue-600 border-blue-500 z-30 !bg-blue-50 !text-blue-600 !border-blue-500'"
          :back-button-class="'relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"
          :next-button-class="'relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50 bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"
          v-model="current_page"
          >
          <!-- Prev button SVG -->
          <template #prev-button>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </template>

          <!-- Next button SVG -->
          <template #next-button>
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
import { onMounted, ref, watch, computed } from 'vue';
const current_page = ref(1)

const props = defineProps(['paginate'])
const emit = defineEmits(['fetchPage'])

const total = computed(() => props.paginate?.total || 0)
const per_page = computed(() => props.paginate?.per_page || 10)

watch(current_page, (next) => {
  emit('fetchPage', next)
})

</script>
<!-- components/Pagination.vue -->
<template>
  <ul class="flex space-x-1 mt-4">
    <li>
      <button @click="$emit('change', currentPage - 1)" :disabled="currentPage === 1">
        &laquo; Previous
      </button>
    </li>

    <li v-for="page in totalPages" :key="page">
      <button
        :class="page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-100'"
        @click="$emit('change', page)"
      >
        {{ page }}
      </button>
    </li>

    <li>
      <button @click="$emit('change', currentPage + 1)" :disabled="currentPage === totalPages">
        Next &raquo;
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number,
})
</script>

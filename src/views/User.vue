<template lang="">
    <!-- Table Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Header -->
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Users
                </h2>
                <p class="text-sm text-gray-600 dark:text-neutral-400">
                    Add users, edit and more.
                </p>
                </div>

                <div>
                <div class="inline-flex gap-x-2">
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    View all
                    </a>

                    <router-link :to="{name: 'users.add'}" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        Add user
                    </router-link>
                </div>
                </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead class="bg-gray-50 dark:bg-neutral-800">
                <tr>
                    <th scope="col" class="ps-6 py-3 text-start">
                    <label for="hs-at-with-checkboxes-main" class="flex">
                        <input type="checkbox" class="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main">
                        <span class="sr-only">Checkbox</span>
                    </label>
                    </th>

                    <th scope="col" class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Name
                        </span>
                    </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Position
                        </span>
                    </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Status
                        </span>
                    </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Portfolio
                        </span>
                    </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Created
                        </span>
                    </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-end"></th>
                </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr v-for="user in users.users" :key="user.id">
                    <td class="size-px whitespace-nowrap">
                    <div class="ps-6 py-3">
                        <label for="hs-at-with-checkboxes-1" class="flex">
                        <input type="checkbox" class="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1">
                        <span class="sr-only">Checkbox</span>
                        </label>
                    </div>
                    </td>
                    <td class="size-px whitespace-nowrap">
                    <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div class="flex items-center gap-x-3">
                        <img class="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
                        <div class="grow">
                            <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{ user.firstName}} {{ user.lastName }}</span>
                            <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ user.email }}</span>
                        </div>
                        </div>
                    </div>
                    </td>
                    <td class="h-px w-72 whitespace-nowrap">
                    <div class="px-6 py-3">
                        <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                        <span class="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                    </div>
                    </td>
                    <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3">
                        <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                        <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                        Active
                        </span>
                    </div>
                    </td>
                    <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3">
                        <div class="flex items-center gap-x-3">
                        <span class="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                        <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                            <div class="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </td>
                    <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-3">
                        <span class="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                    </div>
                    </td>
                    <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-1.5">
                        <a class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#">
                        Edit
                        </a>
                    </div>
                    </td>
                </tr>

                </tbody>
            </table>

            <!-- End Table -->
            <Pagination v-if="users.paginate && users.paginate.total" :paginate="users.paginate" @fetchPage="fetchUsers" />

            </div>
        </div>
        </div>
    </div>
    <!-- End Card -->
    <!-- End Table Section -->
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { TailwindPagination } from 'laravel-vue-pagination'
import { userStore } from '@/store/user'
import axios from 'axios'
import Pagination from '@/components/Pagination.vue'

const users = userStore()
const paginate = ref({})

const fetchUsers = async (page = 1) => {
  await users.fetchUsers(page)
}

onMounted(() => {
    fetchUsers()
})

</script> 
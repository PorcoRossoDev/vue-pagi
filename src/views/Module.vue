<template lang="">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Header -->
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Modules
                </h2>
                <p class="text-sm text-gray-600 dark:text-neutral-400">
                    Add module, edit and more.
                </p>
                </div>

                <div>
                <div class="inline-flex gap-x-2">
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    View all
                    </a>
                    <n-button ghost @click="showModal = true" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-red-900 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Start me up
                    </n-button>
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
                    <tr v-for="(item) in module.data" :key="item.id">
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
                            <FlashOutline class="w-5 h-5" />
                            <div class="grow">
                                <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{{ item.label }}</span>
                            </div>
                            </div>
                        </div>
                        </td>
                        <td class="h-px w-72 whitespace-nowrap">
                        <div class="px-6 py-3">
                            <n-button strong secondary round type="warning">
                                {{ item.name }}
                            </n-button>
                            <!-- <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200"></span> -->
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
                <!-- <Pagination v-if="users.paginate && users.paginate.total" :paginate="users.paginate" @fetchPage="fetchUsers" /> -->

                </div>
            </div>
            </div>
        </div>
        
    </div>
    <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="Dialog"
        content="Are you sure?"
        positive-text="Submit"
        negative-text="Cancel"
        @positive-click="submitCallback"
        @negative-click="cancelCallback"
    >
    Thông tin
    </n-modal>
</template>
<script setup>
import { FlashOutline } from "@vicons/ionicons5";
import { onMounted, ref } from 'vue';
import {moduleStore} from '@/store/module'
const module = moduleStore()
const showModal = ref(false)

onMounted(async () => {
    await module.fetchModule()
})
</script>
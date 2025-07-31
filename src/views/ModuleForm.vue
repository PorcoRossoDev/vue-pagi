<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <n-space vertical size="large">
        <!-- Tên module -->
        <n-form-item
          label="Tên module"
          :feedback="errors.label?.[0]"
          :validation-status="errors.label ? 'error' : undefined"
        >
          <n-input v-model:value="label" placeholder="Tên Module">
            <template #prefix>
              <n-icon :component="FlashOutline" />
            </template>
          </n-input>
        </n-form-item>
  
        <!-- Mã module -->
        <n-form-item
          label="Mã module"
          :feedback="errors.name?.[0]"
          :validation-status="errors.name ? 'error' : undefined"
        >
          <n-input v-model:value="name" placeholder="Mã: product, post...">
            <template #prefix>
              <n-icon :component="FlashOutline" />
            </template>
          </n-input>
        </n-form-item>
  
        <!-- Nút submit -->
        <n-button @click.prevent="saveModule" strong secondary type="primary">
          {{ isEdit ? "Cập nhật" : "Thêm" }}
        </n-button>
      </n-space>
    </div>

  </template>
    
<script setup>
  import { ref } from "vue";
  import {
    useMessage,
    NFormItem,
    NInput,
    NButton,
    NIcon,
    NSpace,
  } from "naive-ui";
  import { FlashOutline } from "@vicons/ionicons5";
  import { moduleStore } from "@/store/module";
  
  const label = ref("");
  const name = ref("");
  const errors = ref({});
  const isEdit = ref(false); // Bạn có thể gán true/false tùy theo tình huống
  
  const module = moduleStore();
  const message = useMessage();
  
  const saveModule = async () => {
    const payload = {
      label: label.value,
      name: name.value,
    }
    try {
      await module.saveModule(payload, isEdit.value ? "update" : "store");
      errors.value = {}; // Xoá lỗi cũ nếu có
      message.success("Thao tác thành công!");
      // Reset form nếu cần
      label.value = "";
      name.value = "";
      isEdit.value = false;
    } catch (err) {
      if (err.response?.status === 422) {
        errors.value = err.response.data.errors || {};
        const firstError = Object.values(errors.value)[0]?.[0];
        message.error("Có lỗi, Xin vui lòng thử lại.");
      } else {
        message.error("Đã xảy ra lỗi không xác định.");
      }
    }
  };
  </script>
    
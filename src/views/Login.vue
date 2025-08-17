<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-full" :content-style="{ overflow: 'visible' }">
      <!-- Left banner -->
      <div class="hidden lg:flex flex-1 bg-[#F8FAFC] relative">
        <div class=" pt-20 ps-20">
          <img class="w-36 mb-6" src="https://dashcode-next-shadcn-live.vercel.app/images/logo/logo.svg" alt="logo" />
          <h4 class="text-4xl leading-[48px]">
            Unlock your Project
            <span class="text-gray-800 font-bold">performance</span>
          </h4>
        </div>
        <img
          class="absolute left-0 bottom-0 w-full h-auto"
          src="https://dashcode-next-shadcn-live.vercel.app/images/auth/ils1.svg"
          alt="illustration"
        />
      </div>

      <!-- Right content -->
      <div class="flex-1 flex items-center justify-center bg-white">
        <div class="flex flex-1 flex-col max-w-lg w-full items-center">
          <n-card
          class="w-full"
          :bordered="false"
          size="huge"
        >
          <div class="text-center mb-8">
            <img
              class="w-36 mx-auto mb-4 lg:hidden"
              src="https://dashcode-next-shadcn-live.vercel.app/images/logo/logo.svg"
              alt="logo"
            />
            <h4 class="font-medium text-2xl">Sign in</h4>
            <p class="text-gray-500">Sign in to your account to start using Dashcode</p>
          </div>

          <n-form class="space-y-4">
            <n-form-item label="Email">
              <n-input v-model:value="form.email" type="email" placeholder="Enter your email" />
            </n-form-item>

            <n-form-item label="Password">
              <n-input
                v-model:value="form.password"
                type="password"
                show-password-on="click"
                placeholder="Enter your password"
              />
            </n-form-item>

            <div class="flex justify-between items-center">
              <n-checkbox v-model:checked="form.remember">Keep me signed in</n-checkbox>
              <a href="/forgot-password" class="text-sm font-medium text-primary">
                Forgot Password?
              </a>
            </div>

            <n-button
              type="primary"
              block
              size="large"
              @click="onSubmit"
            >
              Sign In
            </n-button>
          </n-form>
          </n-card>

          <div class="text-xs font-normal text-default-500 z-[999] pb-10 text-center">Copyright 2025, Dashcode All Rights Reserved.</div>
          </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { 
  NConfigProvider,
  NLayout,
  NCard,
  NInput,
  NButton,
  NForm,
  NFormItem,
  NCheckbox,
  NDivider
} from 'naive-ui'
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: true
})

const onSubmit = () => {
  console.log('Form data:', form.value)
}

// đổi màu chủ đạo từ xanh → emerald (Tailwind xanh lá)
const themeOverrides = {
  common: {
    primaryColor: '#0F172A',
    primaryColorHover: '#34d399',
    primaryColorPressed: '#059669',
    primaryColorSuppl: '#6ee7b7',
    borderColor: '#0F172A',       // màu viền (outline mặc định)
    borderColorHover: '#0F172A',  // viền khi hover
    borderColorPressed: '#0F172A',// viền khi nhấn
  },
  Input: {
    border: '1px solid #D0D5DD',
    borderHover: '1px solid #7c3aed',    // màu viền khi hover
    borderFocus: '1px solid #7c3aed',    // màu viền khi focus
    boxShadowFocus: '0 0 0 3px rgba(124,58,237,.2)', // “outline” khi focus
    placeholderColor: '#9ca3af',
    textColor: '#111827',
    caretColor: '#7c3aed',
    borderRadius: '12px',
    heightMedium: '48px'
  },
  Button: {
    borderFocus: '1px solid #0F172A',
    boxShadowFocus: '0 0 0 2px rgba(37, 99, 235, 0.3)'
  }
}
</script>

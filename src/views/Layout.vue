<template>
    <n-layout has-sider style="min-height: 100vh">
      <!-- Sider -->
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :native-scrollbar="false"
        :inverted="inverted"
        @collapse="collapsed = true"
        @expand="collapsed = false"
        :theme-overrides="menuTheme"
      >
        <!-- Logo -->
        <div class="logo-area py-4 text-center text-white font-bold text-lg">
          <span v-if="!collapsed">My Admin</span>
          <span v-else>M</span>
        </div>
  
        <!-- Menu -->
        <n-menu
          :options="menuOptions"
          :collapsed="collapsed"
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="20"
          :default-selected-keys="['dashboard']"
        />
      </n-layout-sider>
  
      <!-- Main Layout -->
      <n-layout>
        <!-- Header -->
        <n-layout-header
          bordered
          class="flex items-center justify-between px-4 py-2"
          style="height: 56px;"
        >
          <div class="text-xl font-semibold text-gray-700">Dashboard</div>
          <div class="flex items-center gap-3">
            <n-button size="small" @click="toggleTheme">
              {{ inverted ? '🌞' : '🌙' }}
            </n-button>
            <n-button size="small" type="error">Logout</n-button>
          </div>
        </n-layout-header>
  
        <!-- Content -->
        <n-layout-content class="p-6" style="background: #f5f5f5;">
          <n-card title="Welcome" hoverable>
            <p>This is your dashboard content.</p>
          </n-card>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </template>
  
  <script setup>
  import { ref, h } from 'vue'
  
  const collapsed = ref(false)
  const inverted = ref(false)
  
  const toggleTheme = () => {
    inverted.value = !inverted.value
  }
  
  // Menu cấu hình
  const menuOptions = [
    {
      label: 'Dashboard',
      key: 'dashboard',
      icon: () => h('i', { class: 'i-material-symbols-dashboard-outline' })
    },
    {
      label: 'Users',
      key: 'users',
      icon: () => h('i', { class: 'i-material-symbols-group-outline' })
    },
    {
      label: 'Settings',
      key: 'settings',
      icon: () => h('i', { class: 'i-material-symbols-settings-outline' }),
      children: [
        { label: 'General', key: 'general' },
        { label: 'Security', key: 'security' }
      ]
    }
  ]
  
  const themeOverrides = {
    Menu: {
        itemColorActive: 'red',
        itemTextColorActive: '#ffffff',
        itemTextColor: '#333333',
        itemColorHover: '#ecf5ff',
        itemPadding: '10px 20px'
    }
    }
  
  </script>
  
  <style scoped>
  .logo-area {
    background-color: #001529;
    color: white;
  }
  
  .n-layout-header {
    background-color: #ffffff;
  }
  
  .n-layout-content {
    background-color: #f5f5f5;
  }
  </style>
  
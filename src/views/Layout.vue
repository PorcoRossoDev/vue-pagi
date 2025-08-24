<template>
  <n-layout class="h-screen" has-sider sider-placement="left" :inverted="inverted" >
    <!-- Sider -->
    <n-layout-sider  
      :static="true" 
      bordered 
      collapse-mode="width" 
      :collapsed="collapsed" 
      :collapsed-width="64" 
      :width="240"
      show-trigger 
      :native-scrollbar="true" 
      :inverted="inverted" 
      @collapse="handleCollapse" 
      @expand="handleExpand">
      <!-- Logo -->
      <div class="logo-area py-4 text-center text-white font-bold text-lg">
        <span v-if="!collapsed" class="whitespace-nowrap">My Admin</span>
        <span v-else>M</span>
      </div>

      <!-- Menu -->
      <n-scrollbar class="max-h-[90vh]" trigger="hover">
        <n-menu
          :options="displayedMenuOptions" 
          :collapsed="collapsed" 
          :inverted="inverted" 
          :collapsed-width="64" 
          has-sider
          :collapsed-icon-size="20" 
          :default-selected-keys="['dashboard']"
          :indent="indent" 
          :expand-on-hover="true"
          :theme-overrides="{
            itemColorActive: '#635BFF',         // ✅ nền khi active
            itemTextColorActive: '#fff',        // chữ khi active
            itemIconColorActive: '#fff',        // icon khi active
            
            itemColorHover: '#f2f1ff',          // ✅ nền khi hover
            itemTextColorHover: '#635BFF',      // chữ khi hover
            itemIconColorHover: '#635BFF',      // icon khi hover
            
            itemColorActiveHover: '#635BFF',    // giữ màu active khi hover
            itemTextColorActiveHover: '#fff',   // chữ khi hover + active
            itemIconColorActiveHover: '#fff',   // icon khi hover + active
          }"
        />
      </n-scrollbar>
    </n-layout-sider>

    <!-- Main Layout -->
    <n-layout>
      <n-scrollbar>
        <!-- Header -->
        <n-layout-header bordered class="flex items-center justify-between px-4 py-2 sticky top-0 z-50">
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
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>
            <n-card title="Welcome" hoverable>
              <p>This is your dashboard content.</p>
            </n-card>


        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { ref, h, computed } from 'vue'
import { Icon } from "@iconify/vue";
import {
  Home,
  Users,
  Settings,
  Lock,
  BarChart,
  FileText,
  Database,
  MessageSquare,
  Folder,
  Image,
  Tag,
  Edit3,
  ShoppingCart,
  Clock,
  Activity,
  ShoppingBag,
  CreditCard
} from 'lucide-vue-next'

const collapsed = ref(false)
const inverted = ref(false)
const indent = ref(20) // Khoảng cách thụt lề

const handleCollapse = () => {
  collapsed.value = true
  indent.value = 0 // khi collapse chỉ hiển thị icon
}

const handleExpand = () => {
  collapsed.value = false
  indent.value = 20 // khi mở lại trả về indent cũ
}

const toggleTheme = () => {
  inverted.value = !inverted.value
}

// Menu cấu hình
// SidebarMenu.ts

const menuOptions = [
  {
    label: 'Dashboard',
    type: 'group',
    key: 'group-dashboard',
    children: [
      {
        label: 'Overview',
        key: 'dashboard-overview',
        icon: () => h(Icon, { icon: 'solar:widget-add-line-duotone', width: 20 })
      },
      {
        label: 'Analytics',
        key: 'dashboard-analytics',
        icon: () => h(Icon, { icon: 'solar:chart-line-duotone', width: 20 }),
        children: [
          {
            label: 'Reports',
            key: 'analytics-reports',
            icon: () => h(FileText)
          },
          {
            label: 'Trends',
            key: 'analytics-trends',
            icon: () => h(Activity)
          },
          {
            label: 'Real-time',
            key: 'analytics-realtime',
            icon: () => h(Clock)
          }
        ]
      },
      {
        label: 'Cart',
        key: 'dashboard-cart',
        icon: () => h(ShoppingCart),
        children: [
          {
            label: 'Orders',
            key: 'cart-orders',
            icon: () => h(ShoppingBag)
          },
          {
            label: 'Payments',
            key: 'cart-payments',
            icon: () => h(CreditCard)
          }
        ]
      }
    ]
  },
  // Giữ nguyên các nhóm khác
  {
    label: 'Content',
    type: 'group',
    key: 'group-content',
    children: [
      {
        label: 'Bài viết',
        key: 'posts',
        icon: () => h(FileText)
      },
      {
        label: 'Danh mục',
        key: 'categories',
        icon: () => h(Folder)
      },
      {
        label: 'Thẻ (Tags)',
        key: 'tags',
        icon: () => h(Tag)
      },
      {
        label: 'Media',
        key: 'media',
        icon: () => h(Image)
      },
      {
        label: 'Trình soạn thảo',
        key: 'editor',
        icon: () => h(Edit3)
      }
    ]
  },
  {
    label: 'Management',
    type: 'group',
    key: 'group-management',
    children: [
      {
        label: 'Users',
        key: 'management-users',
        icon: () => h(Users)
      },
      {
        label: 'Data',
        key: 'management-data',
        icon: () => h(Database)
      }
    ]
  },
  {
    label: 'System',
    type: 'group',
    key: 'group-system',
    children: [
      {
        label: 'Settings',
        key: 'system-settings',
        icon: () => h(Settings)
      },
      {
        label: 'Security',
        key: 'system-security',
        icon: () => h(Lock)
      },
      {
        label: 'Logs',
        key: 'system-logs',
        icon: () => h(MessageSquare)
      }
    ]
  }
]


// Khi collapsed thì flatten bỏ group
const displayedMenuOptions = computed(() => {
  return menuOptions.map(option => {
    if (option.type === 'group') {
      return {
        ...option,
        title: collapsed.value ? '•••' : option.title, // Thay bằng ký tự khi collapse
      }
    }
    return option
  })
})

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

<style scoped>
/* Bo góc phần content của item + cắt tràn để pseudo ::before không tràn ra */
:deep(.n-menu .n-menu-item .n-menu-item-content) {
  border-radius: 12px !important;
  overflow: hidden; /* quan trọng */
}

/* Pseudo tạo nền hover/active – phải bo góc cả nó */
:deep(.n-menu .n-menu-item .n-menu-item-content::before) {
  border-radius: 12px !important;
}

/* (tuỳ chọn) đảm bảo trạng thái selected cũng bo góc */
:deep(.n-menu .n-menu-item.n-menu-item--selected .n-menu-item-content),
:deep(.n-menu .n-menu-item.n-menu-item--selected .n-menu-item-content::before) {
  border-radius: 12px !important;
}

/* Thêm box-shadow khi active */
:deep(.n-menu .n-menu-item.n-menu-item--selected .n-menu-item-content) {
  box-shadow: 0 17px 20px -8px #4d5bec3b;
}

/* Bo góc và nền cho active */
:deep(.n-menu .n-menu-item.n-menu-item--selected .n-menu-item-content::before) {
  box-shadow: 0 17px 20px -8px #4d5bec3b; /* ✅ shadow ở đây */
}
:deep(.n-menu-item-content.n-menu-item-content--selected::before) {
  box-shadow: 0 17px 20px -8px #4d5bec3b;
}
</style>
<template lang="">
    <div>
        <n-message-provider>
            <Menu />
            <router-view></router-view>
        </n-message-provider>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
</script>
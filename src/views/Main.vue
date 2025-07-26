<template lang="">
    <div>
        <Menu />
        <router-view></router-view>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
</script>
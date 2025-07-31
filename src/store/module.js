import api from "@/plugin/api";
import backendAPI from "@/plugin/backendAPI";
import { defineStore } from "pinia";
import router from '@/router' // đường dẫn tới router/index.js

export const moduleStore = defineStore('module', {
    state: () => ({
        data: null,      // danh sách module
        loading: false,   // trạng thái loading
        error: null       // lỗi chung
    }),
    actions: {
        // Thêm & sửa module
        async saveModule(payload, action = 'store') {
            try {
            this.loading = true
            this.error = null
            const { data } = await backendAPI.post(`module/${action}`, payload)
            return data
            } catch (err) {
            this.error = err.response?.data?.message || 'Đã có lỗi xảy ra'
            throw err // ném lại để phía Vue xử lý lỗi cụ thể (422...)
            } finally {
            this.loading = false
            }
        },
        async fetchModule(){
            try {
                const {data} = await backendAPI.get('module')
                this.data = data
                return data
            } catch (error) {
                
            }
        }
    }
})
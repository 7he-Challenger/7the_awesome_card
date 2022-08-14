<script>
    export default {
        name: 'backcard'
    }
</script>

<script setup>
    import { computed } from 'vue'
    import { baseUrl } from '@/composables/configs'

    const  props = defineProps({
        data: {
            type: Object,
            default: null
        },
        focused: {
            type: Boolean,
            default: false
        }
    })

    const styles = computed(() => `background-image: url('${baseUrl}/images/moon-bg.jpg')`)
    const cw = computed(() => props.data?.cw ? props.data.cw : '')
</script>

<template>
    <div 
        class="card-content card-back d-flex flex-column justify-content-between" 
        :style="styles"
        :class="focused ? 'active' : 'unactive'"
    >
        <div class="gray-line"></div>

        <div class="px-2">
            <div class="form-group">
                <label class="text-right w-100 py-2">CW</label>
                <input type="password" class="form-control text-right" :value="cw" disabled>
            </div>

            <div class="d-flex justify-content-end">
                <img class="icon-card" :src="baseUrl + '/images/visa.webp'" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import '@/assets/back.scss'
</style>
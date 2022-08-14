<script>
    export default {
        name: 'frontcard'
    }
</script>

<script setup>
    import { computed } from 'vue'
    import { baseUrl } from '@/composables/configs'
    import { fillCardNumber } from '@/composables/inputValidations'

    const reformatCardNumber = fillCardNumber()

    const props = defineProps({
        data: {
            type: Object,
            default: null
        },
        focused: {
            type: Boolean,
            default: false
        },
        target: {
            type: String,
            default: ''
        }
    })

    const styles = computed(() => `background-image: url('${baseUrl}/images/moon.webp')`)
    
    const fullname = computed(() => {
        return props.data?.cardHolder ? props.data?.cardHolder : 'FULL NAME'
    })

    const month = computed(() => {
        return props.data?.month && props.data?.month != 'Month' ? props.data?.month : 'MM'
    })

    const year = computed(() => {
        return props.data?.year && props.data?.year != 'Year' ? props.data?.year.substring(2, 4) : 'YY'
    })

    const cardNumber = computed(() => {
        return props.data?.cardNumber ? reformatCardNumber(props.data?.cardNumber) : reformatCardNumber('')
    })

    const classe = computed(() => {
        let focus = !props.focused ? 'active ' : 'unactive '
        let target = props.target
        return focus + target
    })

    const classeBorder = computed(() => props.target ? 'active' : '')

</script>

<template>
    <div 
        class="card-content card-front px-2 py-2 d-flex flex-column justify-content-between h-100 relative" 
        :style="styles"
        :class="classe"
    >
        <div class="border-focus" :class="classeBorder"></div>

        <div class="d-flex justify-content-between">
            <div class="icon-card">
                <i class="bi bi-credit-card-fill"></i>
            </div>
            <img class="icon-card" :src="baseUrl + '/images/visa.webp'" alt="">
        </div>

        <div class="card-front-info my-2">
            <div class="card-number my-2">
                <div v-for="(numItem, i) in cardNumber" :key="'number-'+i" class="text-center span-number">
                    <span class="card-number-item" v-for="(num, j) in numItem.split('')" :key="'numitem-'+j">
                        {{ num }}
                    </span>
                </div>
            </div>

            <div class="row gx-2">
                <div class="col-md-8">
                    <div class="card-holder d-flex flex-column justify-content-start">
                        <div class="text-left">Card Holder</div>
                        <div class="text-left py-2">
                            {{ fullname }}
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card-expires d-flex flex-column justify-content-end">
                        <span class="text-right">Expires</span>
                        <span class="text-right py-2">
                            {{ month }} / {{ year }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import '@/assets/front.scss'
</style>
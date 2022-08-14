<script setup>
    import { baseUrl } from '@/composables/configs'
    import cardFront from '@/components/cardFront.vue'
    import cardBack from '@/components/cardBack.vue'
    import { useCreditCardValidation } from '@/composables/inputValidations'
    import { useFormCard } from '@/composables/formCard'

    const handleInputKey = useCreditCardValidation()
    const { form, months, years, handleFormatCard, dataFront, dataBack, inputFocusing, cwFocus, inputTarget, inptTarget } = useFormCard()
</script>

<template>
    <div id="card-container">
        <div class="card card-awesome relative">

            <div class="card-platform">
                <div class="card-physic-container relative">
                    <cardFront :data="dataFront" :focused="cwFocus" :target="inptTarget"/>
                    <cardBack :data="dataBack" :focused="cwFocus"/>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group my-4">
                    <label for="cardnumber" class="label-form">Cards Number</label>
                    <input 
                        type="text" 
                        id="cardnumber" 
                        name="cardnumber" 
                        @keypress="handleInputKey"
                        class="form-control"
                        :value="form.cardNumber"
                        @input="handleFormatCard"
                        @focus="inputTarget"
                        @blur="inputTarget"
                        maxlength="19" 
                    >
                </div>

                <div class="form-group my-4">
                    <label for="cardholder" class="label-form my-2">Cards holder</label>
                    <input 
                        type="text" 
                        id="cardholder" 
                        class="form-control" 
                        v-model="form.cardHolder"
                        @focus="inputTarget"
                        @blur="inputTarget"
                    >
                </div>

                <div class="row my-4">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="cardmonth" class="label-form my-2">Expiration date</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <select 
                                        name="" 
                                        id="cardmonth" 
                                        class="form-select" 
                                        v-model="form.month"
                                        @focus="inputTarget"
                                        @blur="inputTarget"
                                    >
                                        <option :value="month" v-for="(month, i) in months" :key="'month'+i">{{ month }}</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <select 
                                        name="" 
                                        id="cardyear" 
                                        class="form-select" 
                                        v-model="form.year"
                                        @focus="inputTarget"
                                        @blur="inputTarget"
                                    >
                                        <option :value="year" v-for="(year, i) in years" :key="'year'+i">{{ year }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="cardcw" class="label-form my-2">CW</label>
                            <input 
                                type="text" 
                                id="cardcw" 
                                class="form-control" 
                                pattern="[0-9.]+"
                                maxlength="4" 
                                @keypress="handleInputKey"
                                v-model="form.cw"
                                @blur="inputFocusing"
                                @focus="inputFocusing"
                            >
                        </div>
                    </div>
                </div>

                <div>
                    <button type="button" class="btn btn-primary btn-lg btn-submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import '@/assets/app.scss'
</style>



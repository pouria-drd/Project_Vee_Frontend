<script>
import BtnTypes from '../enums/BtnTypes';
import Spinner from './icons/Spinner.vue';

export default {
    name: "CustomButton",

    components: {
        Spinner,
    },

    props: {
        busy: {
            type: Boolean,
            default: false,
        },

        canClick: {
            type: Boolean,
            default: true,
        },

        type: {
            type: String,
            default: BtnTypes.PRIMARY,
        },
    },

    data() {
        return {

        };
    },

}
</script>

<template>
    <button class="text-base font-yekanX rounded-lg" :class="[type,
        { 'busy': busy },
        { 'disabled': !canClick }]" :disabled="busy || !canClick">

        <span v-if="busy" class="flex flex-row items-center justify-center gap-2">
            <spinner />
            <p class="text-white">لطفا صبر کنید</p>
        </span>
        <slot v-else />
    </button>
</template>


<style scoped>
.disabled {
    transition: 0.5s;
    cursor: not-allowed;
    background-color: rgb(100, 120, 140)
}

.busy {
    opacity: 0.9;
    cursor: wait;
    transition: 0.5s;
}
</style>
<script>
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
        }
    },

}
</script>

<template>
    <button :class="[
        { 'busy': busy },
        { 'disabled': !canClick },
    ]" :disabled="busy || !canClick">

        <span v-if="busy" class="flex flex-row items-center justify-center gap-2">
            <spinner />
            <p>لطفا صبر کنید</p>
        </span>
        <slot v-else />
    </button>
</template>


<style scoped>
.disabled {
    opacity: 0.8;
    transition: 0.5s;
    cursor: not-allowed
}

.busy {
    opacity: 0.8;
    cursor: wait;
    transition: 0.5s;
}
</style>
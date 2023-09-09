<script>
import VeeIcon from '../components/icons/Vee_Icon.vue';

export default {
    components: {
        VeeIcon
    },
}

</script>

<template>
    <main>
        <div class="flex items-center justify-center h-[90vh]">
            <div class="flex justify-center">
                <div
                    class="flex flex-col justify-center w-[93vw] md:w-[65vw] lg:w-[55vw] dark:bg-vee-black bg-white border-slate-200 dark:border-slate-600 border-[1px] rounded-xl gap-4 p-4 transition">

                    <div class="flex justify-center">
                        <vee-icon width="64" height="64" />
                    </div>

                    <!-- <div class="flex justify-center">
                    <p class="text-2xl">
                        ثبت نام
                    </p>
                </div> -->
                </div>
            </div>
        </div>
    </main>
</template>
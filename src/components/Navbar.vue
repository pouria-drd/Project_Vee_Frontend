<script >
import XIcon from "../components/icons/X_Icon.vue";
import veeIcon from "../components/icons/Vee_Icon.vue";
import menuIcon from "../components/icons/Menu_Icon.vue";

export default {
    components: {
        XIcon,
        veeIcon,
        menuIcon,
    },

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        HandleSideNav() {
            this.isOpen = !this.isOpen;
        },
    },
}

</script>

<template>
    <main>
        <!-- Top nav ******************************************************************* -->
        <nav id="topNav" class="dark:bg-vee-black bg-white border-slate-200 dark:border-slate-600 
      border-b-[1px] h-[10vh] flex items-center justify-end rounded-b-lg">

            <div class="flex w-1/3 p-4">
                <a href="/">
                    <h1 class="hover:scale-105 transition text-3xl font-ds">Vee</h1>
                </a>
            </div>

            <div class="flex justify-center w-1/3 p-3">
                <a href="/">
                    <vee-icon class="hover:scale-105 transition" width="50" height="50" />
                </a>
            </div>

            <div class="flex justify-end w-1/3 p-4 transition">
                <menu-icon v-if="!isOpen" class="hover:scale-105 transition" @click="HandleSideNav" />
                <x-icon v-else class="hover:scale-105 transition" @click="HandleSideNav" />
            </div>
        </nav>

        <!-- Side nav ****************************************************************** -->

        <nav id="sideNav"
            class="dark:bg-vee-black bg-white h-[90vh] fixed top-[10.1vh] right-0 z-10 rounded-l-lg border-slate-200 dark:border-slate-600"
            :class="{ 'w-[70vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border-l-[1px]': isOpen, 'w-0': !isOpen }"
            style="transition: 0.5s;">

            <div class="flex flex-col h-full gap-4 p-4 dark:text-white text-base font-yekanX font-normal">

                <router-link :to="{ name: 'sign-in' }" class=" flex justify-end rounded-xl p-4"
                    active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100">
                    ورود
                </router-link>

                <router-link :to="{ name: 'sign-up' }" class="flex justify-end rounded-xl p-4"
                    active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100">
                    ثبت نام
                </router-link>

            </div>

        </nav>

        <!-- end *********************************************************************** -->
    </main>
</template>

<script>
import HelpIcon from "../components/icons/Help_Icon.vue";
import AboutIcon from "../components/icons/About_Icon.vue";
import LogoutIcon from "../components/icons/Logout_Icon.vue";
import ProfileIcon from "../components/icons/Profile_Icon.vue";
import SupportIcon from "../components/icons/Support_Icon.vue";
import SettingsIcon from "../components/icons/Settings_Icon.vue";

export default {
    name: "FloatingSidebar",

    components: {
        HelpIcon,
        AboutIcon,
        LogoutIcon,
        ProfileIcon,
        SupportIcon,
        SettingsIcon,
    },

    props: {
        user: {
            type: Object,
            default: null,
        }
    }
}
</script>
<template>
    <div
        class="fixed flex flex-col w-56 h-fit p-2 rounded-vee-br-10 dark:bg-vee-black bg-white z-10 font-yekanX border-2 border-slate-400 dark:border-white">

        <div class="flex flex-col items-center justify-center border-slate-400 dark:border-white border-b p-2 gap-1">
            <p class="text-lg">{{ user.username }}</p>
            <p class="text-sm ss02">{{ user.email }}</p>
        </div>

        <div class="flex flex-col items-end justify-center border-slate-400 dark:border-white border-b py-2 gap-1">
            <router-link class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2" :to="{ name: 'profile' }"
                active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100 rounded-vee-br-10">
                <p class="text-sm">پروفایل</p>
                <profile-icon />
            </router-link>

            <router-link class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2" :to="{ name: 'settings' }"
                active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100 rounded-vee-br-10">
                <p class="text-sm">تنظیمات</p>
                <settings-icon />
            </router-link>
        </div>

        <div class="flex flex-col items-end justify-center border-slate-400 dark:border-white border-b py-2 gap-1">
            <router-link class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2" :to="{ name: 'about' }"
                active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100 rounded-vee-br-10">
                <p class="text-sm">درباره</p>
                <about-icon />
            </router-link>

            <router-link class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2" :to="{ name: 'help' }"
                active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100 rounded-vee-br-10">
                <p class="text-sm">راهنما</p>
                <help-icon />
            </router-link>
        </div>

        <div class="flex flex-col items-end justify-center py-2 gap-1">
            <router-link class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2" :to="{ name: 'support' }"
                active-class="dark:bg-black dark:bg-opacity-20 bg-slate-100 rounded-vee-br-10">
                <p class="text-sm">پشتیبانی</p>
                <support-icon />
            </router-link>

            <button class="flex flex-row items-center justify-end w-full h-10 p-2 gap-2 text-vee-red">
                <p class="text-sm text-vee-red">خروج</p>
                <logout-icon />
            </button>
        </div>
    </div>
</template>
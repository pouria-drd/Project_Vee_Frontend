<script>
import XIcon from "../components/icons/X_Icon.vue";
import FloatingSidebar from "./FloatingSidebar.vue";
import VeeIcon from "../components/icons/Vee_Icon.vue";
import MenuIcon from "../components/icons/Menu_Icon.vue";
import UserIcon from "../components/icons/User_Icon.vue";

export default {
    name: "MyNavbar",

    components: {
        XIcon,
        VeeIcon,
        MenuIcon,
        UserIcon,
        FloatingSidebar
    },

    data() {
        return {
            isMenuOpen: false,

            user: {
                username: "pouria",
                email: "test2@example.com",
                profileImageURL: "https://i.pravatar.cc/100?img=13",
            }
        };
    },

    methods: {
        ToggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },

    watch: {
        $route(to, from) {
            this.isMenuOpen = false;
        }
    },
}

</script>

<template>
    <main>
        <!-- Top nav ******************************************************************* -->
        <nav id="topNav" class="dark:bg-vee-bg-dark bg-white
             border-slate-400 dark:border-br-blue border-b-2
             flex items-center justify-end px-8 w-full h-[10vh] fixed">

            <div class=" flex w-1/3 ">
                <a href=" /">
                    <h1 class="hover:scale-105 transition text-3xl font-ds">Vee</h1>
                </a>
            </div>

            <div class="flex justify-center w-1/3">
                <a href="/">
                    <vee-icon class="hover:scale-105 transition" width="50" height="50" />
                </a>
            </div>

            <div class="flex justify-end w-1/3 transition">
                <user-icon class="hover:scale-105 transition" @click="ToggleMenu" />
            </div>
        </nav>

        <floating-sidebar v-if="isMenuOpen" :user="user" class="top-[12vh] right-3" />
    </main>
</template>

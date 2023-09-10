<script>
import BtnTypes from "../enums/BtnTypes.js";
import MyButton from '../components/CustomButton.vue';
import VeeIcon from '../components/icons/Vee_Icon.vue';
import RefreshIcon from '../components/icons/Refresh_Icon.vue';

export default {
    components: {
        MyButton,
        VeeIcon,
        RefreshIcon,
    },

    data() {
        return {
            loginFormData: {
                username: "",
                password: "",
                captchaCode: "",
            },

            canSendLoginData: false,
            isProcessingLoginData: false,

            BtnType: BtnTypes,
        };
    },

    methods: {
        LoginUser() {
            this.isProcessingLoginData = true;
            console.log(this.loginFormData);

            setInterval(() => {
                this.isProcessingLoginData = false;
            }, 3000);

            setInterval(() => {
                window.location.reload();
            }, 4500);
        },

        RequestCaptcha() {
            console.log(this.loginFormData);
        },
    },

    computed: {
        CanSendLoginData() {
            if (this.loginFormData.username.length < 3 ||
                this.loginFormData.password.length < 9 ||
                this.loginFormData.captchaCode.length < 5) {

                this.canSendLoginData = false;
                return false;

            } else {

                this.canSendLoginData = true;
                return true;
            }
        },
    },
}

</script>

<template>
    <main class="flex items-center justify-center h-[90vh]">
        <div class="flex flex-col gap-6 p-10 overflow-auto
                dark:bg-vee-black bg-white
                  border-slate-400 dark:border-br-blue 
                  border-2 rounded-vee-br-10">

            <div class="flex justify-center">
                <vee-icon width="64" height="64" />
            </div>

            <div class="flex justify-center">
                <input class="base-input w-full h-12 ss02 r2l" type="email" placeholder="ایمیل / نام کاربری"
                    v-model="loginFormData.username">
            </div>

            <div class="flex justify-center">
                <input class="base-input w-full h-12 ss02 r2l" type="password" placeholder="رمز عبور"
                    v-model="loginFormData.password">
            </div>

            <div class="flex flex-row gap-2">
                <div class="border-2 dark:border-white border-slate-400 w-5/12 rounded-lg">

                </div>

                <div class="flex items-center justify-center w-2/12 border-2 dark:border-white border-slate-400 rounded-lg">
                    <button @click="RequestCaptcha">
                        <refresh-icon class="dark:text-white text-vee-gray" />
                    </button>
                </div>

                <input class="base-input w-5/12 h-12 ss02 text-center" type="tel" maxlength="5" placeholder="کد کپچا"
                    v-model="loginFormData.captchaCode">
            </div>

            <div class="flex justify-center">
                <my-button class="w-full h-12" @click="LoginUser" :type="BtnType.PRIMARY" :canClick="CanSendLoginData"
                    :busy="isProcessingLoginData">
                    ورود
                </my-button>
            </div>
        </div>
    </main>
</template>
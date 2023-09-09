<script>
import MyButton from '../components/CustomButton.vue';
import VeeIcon from '../components/icons/Vee_Icon.vue';
import RefreshIcon from '../components/icons/Refresh_Icon.vue';

export default {
    components: {
        MyButton,
        VeeIcon,
        RefreshIcon
    },

    data() {
        return {
            formData: {
                username: "",
                password: "",
                captchaCode: "",
            },

            canSendData: false,
            isProcessing: false,
        };
    },

    methods: {
        LoginUser() {
            this.isProcessing = true;
            console.log(this.formData);

            setInterval(() => {
                this.isProcessing = false;
            }, 3000);

            setInterval(() => {
                window.location.reload();
            }, 4500);
        },
    },

    computed: {
        CanSendData() {
            if (this.formData.username.length < 3 ||

                this.formData.captchaCode.length < 5) {

                this.canSendData = false;
                return false;

            } else {

                this.canSendData = true;
                return true;
            }
        },
    },
}

</script>

<template>
    <main>
        <form class="flex items-center justify-center h-[90vh]">
            <div
                class="flex flex-col dark:bg-vee-black bg-white border-slate-200 dark:border-slate-600 border-[1px] rounded-xl gap-6 p-10 overflow-auto">

                <div class="flex justify-center">
                    <vee-icon width="64" height="64" />
                </div>

                <div class="flex justify-center">
                    <input class="base-input w-full h-12 ss02 r2l" type="email" placeholder="ایمیل / نام کاربری"
                        v-model="formData.username">
                </div>

                <div class="flex justify-center">
                    <input class="base-input w-full h-12 ss02 r2l" type="password" placeholder="رمز عبور"
                        v-model="formData.password">
                </div>

                <div class="flex flex-row gap-2">
                    <div class="border-2 dark:border-white border-vee-gray w-5/12 rounded-lg">

                    </div>

                    <div
                        class="flex items-center justify-center w-2/12 border-2 dark:border-white border-vee-gray rounded-lg">
                        <button>
                            <refresh-icon class="dark:text-white text-vee-gray" />
                        </button>
                    </div>

                    <input class="base-input w-5/12 h-12 ss02 text-center" type="tel" maxlength="5" placeholder="کد کپچا"
                        v-model="formData.captchaCode">
                </div>

                <div class="flex justify-center">
                    <my-button @click="LoginUser" :canClick="CanSendData" :busy="isProcessing"
                        class="bg-vee-bg-blue w-full h-12 text-white text-base font-yekanX rounded-lg transition">
                        ورود
                    </my-button>
                </div>
            </div>
        </form>
    </main>
</template>
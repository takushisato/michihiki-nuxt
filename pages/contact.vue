<template>
<div>
    <Header />
        <div class="container m-auto text-center select-none text-lg">
            <h1 class="pt-20">不具合やバグ、その他問題がございましたらお手数ですが下記問い合わせフォームより連絡お願いします。</h1>
            <section class="contact-container">
                <template v-if="!finished">
                <form name="contact" method="POST" data-netlify="true" class="contact" @submit.prevent>
                    <p class="mt-4 mb-4">
                    <label>
                        お名前:
                        <input v-model="form.name" class="contact-label border border-gray-300" type="text" name="name" />
                    </label>
                    </p>
                    <p class="mt-4 mb-4">
                    <label>
                        メールアドレス:
                        <input v-model="form.email" class="contact-label border border-gray-300" type="email" name="email" />
                    </label>
                    </p>
                    <p class="mt-4 mb-4">
                    <label>
                        お問い合わせ内容:
                        <textarea id="form-content" class="contact-label border border-gray-300 pb-80" v-model="form.content" name="content" />
                    </label>
                    </p>
                    <p class="mt-4 mb-4">
                    <button @click="handleSubmit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" v-text="'送信'" />
                    </p>
                </form>
                </template>
                <template v-else>
                <p v-text="'お問い合わせ頂きありがとうございました。'" />
                <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
                </template>
            </section>
        </div>
    <Footer />
</div>
</template>
<script>
import axios from 'axios'
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
export default {
    components: {
    Header,
    Footer
    },
    data() {
        return {
        form: {
            name: '',
            email: '',
            content: ''
        },
        finished: false
        }
    },
    methods: {
        encode(data) {
        return Object.keys(data)
            .map(
            (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join('&')
        },
    handleSubmit() {
        const axiosConfig = {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        axios
            .post(
            '/',
            this.encode({
                'form-name': 'contact',
                ...this.form
            }),
            axiosConfig
            )
            .then(() => {
            this.finished = true
            })
        }
    }
}
</script>
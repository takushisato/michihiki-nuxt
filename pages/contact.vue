<template>
<div>
    <Header />
        <div class="container m-auto text-center select-none text-lg">
            <h1 class="pt-20">不具合やバグ、その他問題がございましたらお手数ですが下記の問い合わせフォームより連絡お願いします。</h1>
            <section>
                <template v-if="!finished">
                    <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" class="contact" @submit.prevent>
                        <p class="mt-4 mb-4">
                        <label><span class="text-red-600">（必須）</span>
                            お名前:
                            <input v-model="form.name" class="contact-label border border-gray-300" type="text" placeholder="お名前" name="name" />
                        </label>
                        </p>
                        <p class="mt-4 mb-4">
                        <label><span>（任意）</span>
                            メールアドレス:
                            <input v-model="form.email" class="contact-label border border-gray-300" placeholder="メールアドレス" type="email" name="email" />
                        </label>
                        </p>
                        <p class="mt-4 mb-4">
                        <label><span class="text-red-600">（必須）</span>
                            お問い合わせ内容:
                            <textarea v-model="form.content" id="form-content" class="contact-label border border-gray-300 pb-80" placeholder="問い合わせ内容" name="content" />
                        </label>
                        </p>
                        <p class="mt-4 mb-4">
                        <button @click="handleSubmit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" v-text="'送信'" />
                        </p>
                    </form>
                    <p class="text-xl text-red-600">{{ Validation.result }}</p>
                </template>
                <template v-else>
                    <p class="mt-40 mb-10" v-text="'ご連絡ありがとうございました。'" />
                    <p class="hover:opacity-30 text-xl"><nuxt-link to="/" v-text="'TOPへ'" /></p>
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
        Validation:{
        result: '',
        },
        form: {
            name: '',
            email: '',
            content: ''
        },
        finished: false
    }
    },
    methods: {
        // HTTPリクエストを適切なURI形式にエンコード
        encode(data) {
        return Object.keys(data)
            .map(
            (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join('&')
        },
        handleSubmit() {
            if(this.form.name == false){
                this.Validation.result="名前を入力してください"
            } else if(this.form.content == false){
                this.Validation.result="問い合わせ内容を入力してください"
            } else {
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
}
</script>
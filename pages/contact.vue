<template>
<div>
    <Header />
        <div class="container m-auto text-center select-none text-lg">
            <h1 class="pt-20">不具合やバグ、その他問題がございましたらお手数ですが下記問い合わせフォームより連絡お願いします。</h1>
            <form name="contact" method="POST" data-netlify="true" class="contact">
                <p class="mt-2 mb-2">
                    <label>お名前: <input class="contact-label border border-gray-300" type="text" name="name" /></label>
                </p>
                <p class="mt-2 mb-2">
                    <label>Email: <input type="email" class="contact-label border border-gray-300" name="email" /></label>
                </p>
                <p class="mt-2 mb-2">
                    <label>Email（確認用）: <input type="email" class="contact-label border border-gray-300" name="email2" /></label>
                </p>
                <p class="mt-20 mb-2">
                    <label>問い合わせ内容: <textarea name="message" class="contact-label border border-gray-300 pb-80"></textarea></label>
                </p>
                <p class="mt-2 mb-2">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >送信</button>
                    <!-- <button type="submit" class="bg-blue-300 text-white font-bold py-2 px-4 border border-blue-300 rounded opacity-20 pointer-events-none">送信</button> -->
                </p>
            </form>
        </div>
    <Footer />
</div>
</template>
<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
export default {
    components: {
        Header,
        Footer
    },

    data () {
        return {

        }
    },
    methods:{

}
}
</script>
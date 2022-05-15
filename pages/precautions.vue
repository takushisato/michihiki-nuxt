<template>
<div>
   <Header />
   <div class="container m-auto text-left">
      <div class="m-5 mt-10">
         <h1 class="underline">注意事項</h1>
         <h2>当サイトについて</h2>
         <p>当サイトをご利用いただき誠にありがとうございます。当サイトを快適かつ適切にご利用いただくため、下記内容をご一読くださいますようお願いいたします。</p>
      </div>

      <div class="m-5 mt-10">
         <h1 class="underline">Webブラウザなど閲覧環境</h1>
         <h2>当サイトの推奨環境は以下の通りです。</h2>
         <p>Windows edge、Chrome、Firefox</p>
         <p>Mac OS Safari</p>
         <p>iPhone iOS、Android</p>
         <p>推奨環境以外でのご利用、推奨環境下でもお客様のWebブラウザの設定、機種、メーカー、その他のアプリケーションのインストール状況やバージョンの組合せなどにより、ページが正しく表示されない場合がございます。</p>
         <p>また、当サイトではJavaScriptを使用しております。ご利用のブラウザでJavaScriptを無効にしている場合動作しませんので、当サイトをご利用いただく際はブラウザの設定でJavaScriptを有効にしてください。</p>
      </div>

      <div class="m-5 mt-10">
         <h1 class="underline">著作権について</h1>
         <p>当サイトに掲載されているコンテンツ内容は、海上保安庁が公開している『潮汐表APIサービス』からデータを引用させていただき作成しております。（記載内容の著作権などは海上保安庁に帰属します。）</p>
         <p>また、当サイトに掲載されているコンテンツ（文章、画像、写真、動画、ロゴ、プログラム等）を無断で転用・複製などをすることは出来ません。</p>
         <a href="https://tide736.net/" class="hover:opacity-30" target=”_blank”>引用元：海上保安庁 潮汐表APIサービス</a>
      </div>

      <div class="m-5 mt-10">
         <h1 class="underline">外部サイトへのリンクについて</h1>
         <p>当サイトには、外部のウェブサイトへのリンク（API）が含まれています。リンク先の外部サイトは、各サイト運営者の責任において管理運営されており、外部サイトは当サイトの管理下にありません。</p>
         <p>当サイトは、お客様が外部サイトをご利用になったことにより生じたいかなる損害についても責任を負いかねますので、予めご了承ください。</p>
      </div>

      <div class="m-5 mt-10">
         <h1 class="underline">当サイトへのリンクの注意事項</h1>
         <p>1,当サイトの有する権利を侵害または妨害する行為、また当サイトのイメージを損なうようなリンクを設定することは固く禁じます。</p>
         <p>2,フレーム内での表示等、当サイトへのリンクとなることが不明瞭になる方法でのリンク設定はご遠慮ください。</p>
      </div>

      <div class="m-5 mt-10">
         <h1 class="underline">その他</h1>
         <p>サイトのバグ、システムの不具合、記載内容に関して何か問題がありましたら制作者にご一報頂けると幸いです。</p>
         <br>
         <nuxt-link to="/contact" class="hover:opacity-30">お問い合わせフォーム</nuxt-link>
      </div>
      
      <div class="mt-20 mb-20">
         <img src="~/static/logo.png" alt="ロゴ画像" class="block m-auto">
      </div>
   </div>
   <Footer />
</div>
</template>
<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

export default {
       components:{
        Header,
        Footer
    },
}
</script>
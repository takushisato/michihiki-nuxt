<template>
    <div class="container m-auto">
       <h1 class="text-2xl">みちひき</h1>
         <p class="text-2xl">{{ yearMonth }}</p>

       <div class="m-10">
          <!-- 都道府県を表示 -->
            <ul>
               <li v-for="prefecture in prefectures" :key="prefecture.name" @click="pcChoice(prefecture)">
                  {{ prefecture.name }}
               </li>
            </ul>
       </div>

       <div v-if="isShow"  class="m-10">
          <!-- 選択した都道府県に一致した港を表示 -->
            <ul>
               <li v-for="port in ports" :key="port.portName" @click="hcChoice(port)">
                  {{ port.portName }}
               </li>
            </ul>
            <br><br>
            <p>都道府県：{{ choicePc }}</p>
            <p>場所：{{ choiceHc }}</p>
       </div>


       <button @click="asyncData()" class="p-3 bg-red-500 text-white">click!</button>
    </div>
</template>
 
<script>
import { prefectures } from '~/datas/prefecturesData.js';

   // 時間取得
   let date = new Date();

   // JSON代入用
   let tideDatas = [];

   // APIパラメータ
   let pcNum = '';  // 都道府県番号
   let hcNum = ''; // 港番号
   let yr = ''; // 年
   let mn = ''; // 月
   let dy = ''; // 日
   let rg = 'rg=day'; // 取得期間

   let num = 0; // port取得用管理変数

export default {
   data() {
      return {
         prefectures: prefectures,
         isShow: false,
         ports: [],
         choicePc: '',
         choiceHc: '',
         }
   },

   computed:{
      // テンプレートで使う現在時刻を代入
      yearMonth:function(){
         this.year = date.getFullYear();
         this.month = date.getMonth() + 1;
         this.actualDay = date.getDate();
         let yearMonth = this.year + '年' +  this.month + '月';
         return yearMonth;
      },
   },

   methods: {
      //都道府県選択からの港表示まで
      pcChoice:function(prefecture){
            if(num == 0){
            pcNum = prefecture.pcNum;
            this.ports = prefecture.port;
            this.choicePc = prefecture.name;
            num++;
            this.isShow = true;
            return this.ports, this.choicePc, num;
         } else {
            pcNum = '';
            this.choicePc = '',
            this.choiceHc = '',
            num = 0;
            this.isShow = false;
            return this.ports, num;
         }
      },

      //PCとHCのparameterを代入
      hcChoice:function(port){
            hcNum = port.hcNum;
            this.choiceHc = port.portName;
            return this.choiceHc;
      },

      // パラメータに現在日時を入力してAPI取得
      async asyncData() {
         yr = date.getFullYear();
         mn = date.getMonth() + 1;
         dy = date.getDate();
         let items = await this.$axios.$get('/api/' + '?' + 'pc=' + pcNum + '&' + 'hc=' + hcNum + '&'+ 'yr=' + yr + '&' + 'mn=' + mn + '&' + 'dy=' + dy + '&' + rg);
         console.log(items);
         tideDatas = items;
         return tideDatas;
      },
   },

   

   

   mounted() {

   },
   
}
</script>

<style>

</style>

// https://zenn.dev/mouse_484/artizcles/nuxt-axios-cors

// https://zenn.dev/code_diver/articles/dcf0ec9803cb55


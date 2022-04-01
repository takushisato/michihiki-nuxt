<template>
    <div class="container m-auto">
       <h1 class="text-2xl">みちひき</h1>
         <p class="text-2xl">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</p>

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
import { timeDatas } from '~/datas/timeData.js';

   // JSON代入用
   let tideDatas = [];

   // APIパラメータ
   let pcNum = '';  // 都道府県番号
   let hcNum = ''; // 港番号
   let rg = 'rg=day'; // 取得期間

   let num = 0; // port取得用管理変数

export default {
   data() {
      return {
         timeDatas: timeDatas,
         prefectures: prefectures,
         isShow: false,
         ports: [],
         choicePc: '',
         choiceHc: '',
         }
   },

   computed:{
      
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
         let items = await this.$axios.$get('/api/' + '?' + 'pc=' + pcNum + '&' + 'hc=' + hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + timeDatas.dy + '&' + rg);
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
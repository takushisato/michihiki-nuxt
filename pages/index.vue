<template>
<div>
   <Header />
   <div class="container m-auto text-center">
      <h1>調べたい都道府県を選択してください</h1>

      <!-- ここのテーブルはstyle.cssにてCSS記載 -->
      <table class="local bg-gray-300 text-1xl">
         <tbody>
            <tr>
               <th>北海道</th>
               <td>
               <p v-for="prefecture in prefectures[0]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>東北</th>
               <td>
               <p v-for="prefecture in prefectures[1]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>関東</th>
               <td>
               <p v-for="prefecture in prefectures[2]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>中部</th>
               <td>
               <p v-for="prefecture in prefectures[3]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>近畿</th>
               <td>
               <p v-for="prefecture in prefectures[4]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>中国</th>
               <td>
               <p v-for="prefecture in prefectures[5]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>四国</th>
               <td>
               <p v-for="prefecture in prefectures[6]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th>九州・沖縄</th>
               <td>
               <p v-for="prefecture in prefectures[7]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
         </tbody>
      </table>

      <div v-if="isShow"  class="m-10">
         <!-- 選択した都道府県に一致した港を表示 -->
         <ul class="text-2xl">
            <li v-for="port in ports" :key="port.portName" @click="hcChoice(port)">
               {{ port.portName }}
            </li>
         </ul>
         <br><br>
         <p>都道府県：{{ choicePc }}</p>
         <p>場所：{{ choiceHc }}</p>
         <button @click="asyncData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">click!</button>
      </div>

      <!-- カレンダー -->
      <div v-if="calendarSwich" class="m-auto mt-10 p-10 pb-10 text-1xl">
         <div class="text-3xl mb-2">
            <span class="calendarChange" @click="lastMonth()">前月へ</span>
            <span class="ml-20 mr-20">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</span>
            <span class="calendarChange" @click="nextMonth()">翌月へ</span>
         </div>
         <table class="min-w-full text-center border-2">
            <thead class="bg-blue-300 border-2 border-gray-500">
                  <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex" class="align-middle border-2 border-gray-500">{{ weekDay }}</th>
            </thead>
            <tbody>
                  <tr v-for="(weekData, weekDataIndex) in calendar" :key="weekDataIndex" class="border-2 border-gray-500">
                     <td v-for="(dayNumber, dayNumberIndex) in weekData" :key="dayNumberIndex" :class="{'today':isToday(dayNumber)}" class="border-2 border-gray-500">
                        <span v-if="isToday(dayNumber)" class="bg-blue-200 text-white text-2xl font-bold">今日</span>
                        <span v-else class="text-2xl">{{ dayNumber }}</span>           
                        <p>{{ tideDatas[0].tide.port.harbor_namej }}</p>
                        <p>おすすめ度：</p>
                        <!-- <p>潮名：{{ tideDatas[0].tide.chart['2022-04-01'].moon.title }}</p>
                        <p>月齢：{{ tideDatas[0].tide.chart['2022-04-01'].moon.age}}</p>
                        <p>日出：{{ tideDatas[0].tide.chart['2022-04-01'].sun.rise }}</p>
                        <p>日入：{{ tideDatas[0].tide.chart['2022-04-01'].sun.set}}</p>
                        <p>月出：{{ tideDatas[0].tide.chart['2022-04-01'].moon.rise }}</p>
                        <p>月入：{{ tideDatas[0].tide.chart['2022-04-01'].moon.set }}</p>
                        <p>干潮時刻①：{{ tideDatas[0].tide.chart['2022-04-01'].edd[0].time }}</p>
                        <p>干潮時刻②：{{ tideDatas[0].tide.chart['2022-04-01'].edd[1].time }}</p>
                        <p>水位①：{{ tideDatas[0].tide.chart['2022-04-01'].edd[0].cm }}</p>
                        <p>水位②：{{ tideDatas[0].tide.chart['2022-04-01'].edd[1].cm }}</p>
                        <p>満潮時刻①：{{ tideDatas[0].tide.chart['2022-04-01'].flood[0].time }}</p>
                        <p>満潮時刻②：{{ tideDatas[0].tide.chart['2022-04-01'].flood[1].time }}</p>
                        <p>水位①：{{ tideDatas[0].tide.chart['2022-04-01'].flood[0].cm }}</p>
                        <p>水位②：{{ tideDatas[0].tide.chart['2022-04-01'].flood[1].cm }}</p> -->
                        <a v-if="dayNumber > 0" :href=" detailView + dayNumber +  detailView2 " class="text-2xl" target=”_blank”>詳細図</a>
                        <p v-if="dayNumber > 0">{{ tideDatas[0].tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + dayNumber ).slice( -2 )].sun.rise }}</p>
                     </td>
                  </tr>
            </tbody>
         </table>
      </div>   
   </div>
   <Footer />
</div>
</template>
 
<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import { prefectures } from '~/datas/prefecturesData.js'
import { timeDatas } from '~/datas/timeData.js'

export default {
   components:{
         Header,
         Footer
      },

   data() {
      return {
         timeDatas: timeDatas, // datasディレクトリで取得した時間
         prefectures: prefectures, //  datasディレクトにある都道府県データ
         pcNum: '',  // 都道府県番号
         hcNum: '', // 港番号
         num: 0, // port取得用管理変数
         isShow: false, // templateの開閉と非表示用のブーリアン
         ports: [], // ユーザーが選択した地域の港一覧を入れる配列
         choicePc: '', // ユーザーが選択した地域
         choiceHc: '', // ユーザーが選択した港
         tideDatas: [], // ユーザーが選択した港から取得したAPIを入れる配列
         calendarSwich: false,
         locations: ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄'],
         weekDays:['日','月','火','水','木','金','土'], // カレンダー
         today:'', // カレンダー用
         detailView: '', // 詳細図のURLの場所を入力する変数
         detailView2: "&rg=day&w=768&h=512&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on", // 詳細図のURLの後半（このまま使用）
         }
      },

   methods: {
      //都道府県選択からの港表示まで
      pcChoice:function(prefecture){
         this.calendarSwich = false;
         if(this.num == 0){
            this.pcNum = prefecture.pcNum;
            this.ports = prefecture.port;
            this.choicePc = prefecture.name;
            this.num++;
            this.isShow = true;
            return this.ports, this.choicePc, this.num, this.pcNum;
         } else {
            this.pcNum = '';
            this.choicePc = '',
            this.choiceHc = '',
            this.num = 0;
            this.isShow = false;
            return this.ports, this.num, this.pcNum;
         }
      },

      //PCとHCのparameterを代入
      hcChoice:function(port){
         this.hcNum = port.hcNum;
         this.choiceHc = port.portName;
         this.calendarSwich = false;
         return this.choiceHc;
      },

      // カレンダーの前月表示用
      lastMonth(){
         timeDatas.mn --;
         if(timeDatas.mn < 1){
            timeDatas.yr --;
            timeDatas.mn = 12;
         }
         timeDatas.lastDay = new Date(timeDatas.yr, timeDatas.mn, 0).getDate();
         this.asyncData();
      },

      // カレンダーの翌月表示用
      nextMonth(){
         timeDatas.mn ++;
         if(timeDatas.mn > 12){
            timeDatas.yr ++;
            timeDatas.mn = 1;
         }
         timeDatas.lastDay = new Date(timeDatas.yr, timeDatas.mn, 0).getDate();
         this.asyncData();
      },
      
      // カレンダー日付算出
      isToday:function(day){
         let date = timeDatas.yr + "-" + timeDatas.mn + "-" + day;
         if(this.today == date){
               return true;
         }
         return false;
      },

      // パラメータに現在日時を入力してAPI取得
      async asyncData() {
         // this.tideDatas = [];
         this.tideDatas[this.tideDatas.length] = await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 1 + '&' + 'rg=month');
         if(this.timeDatas.lastDay == 31){
            this.tideDatas[this.tideDatas.length] = await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 31 + '&' + 'rg=day');
         }
         this.detailView = '/img-api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=';
         console.log(this.tideDatas);
         this.calendarSwich = true;
         return this.tideDatas, this.detailView, this.calendarSwich;
      },
   },

   mounted() {
      // カレンダー日付取得用
      this.today = timeDatas.yr + '-' + timeDatas.mn + '-' + timeDatas.dy;
   },

   computed:{
      // カレンダー
      calendar:function(){
         let calendar = [];
         let dayNumber = 1;
         let firstWeekDay = new Date(timeDatas.yr, timeDatas.mn - 1, 1).getDay();
         while(dayNumber <= timeDatas.lastDay){
            let weekData = [];
            for(let i = 0;i <= 6;i ++){
                  if(calendar.length == 0 && i < firstWeekDay){
                     weekData[i] = '';
                     
                  } else if (timeDatas.lastDay < dayNumber){
                     weekData[i] = '';
                  } else {
                     weekData[i] = dayNumber;
                     dayNumber ++;
                  }
            }
            calendar.push(weekData); 
         }
         return calendar;
      },  
   },
   
}
</script>
<template>
<div>
   <Header />
   <div class="container m-auto text-center select-none">
      <br><br>
      <h1 class="font-bold">当サイトは釣り人さんに使いやすい様に作成した潮見カレンダー表示サイトです</h1>
      <h1 class="font-bold">釣りの他、磯遊びや潮干狩り、海遊びの検討にお使いください</h1>
      <br><br>
      <h1 class="font-bold">調べたい都道府県を選択してください</h1>

      <!-- 都道府県テーブル -->
      <table class="local bg-gray-300">
         <tbody>
            <tr>
               <th class="bg-gray-400">北海道</th>
               <td>
               <p v-for="prefecture in prefectures[0]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">東北</th>
               <td>
               <p v-for="prefecture in prefectures[1]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">関東</th>
               <td>
               <p v-for="prefecture in prefectures[2]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">中部</th>
               <td>
               <p v-for="prefecture in prefectures[3]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">近畿</th>
               <td>
               <p v-for="prefecture in prefectures[4]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">中国</th>
               <td>
               <p v-for="prefecture in prefectures[5]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">四国</th>
               <td>
               <p v-for="prefecture in prefectures[6]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">九州・沖縄</th>
               <td>
               <p v-for="prefecture in prefectures[7]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
         </tbody>
      </table>

      <div v-if="isShow" class="m-10">
         <h1 class="font-bold">調べたい月と場所を選択して『調べる！』を押してください</h1>
         <ul>
            <li v-for="port in ports" :key="port.portName" @click="hcChoice(port)" class="text-center hover:opacity-30">
               {{ port.portName }}
            </li>
         </ul>
         <div class="clear"></div>
         <br><br>
         <div class="calendarChange">
            <button class="ml-auto mr-10 mt-2 hover:opacity-30" @click="lastMonth()">＜＜ 前の月を見る</button>
            <p class="mt-2 mb-2 ml-10 mr-10 pt-2 text-xl">{{ this.timeDatas.yr }}年{{ this.timeDatas.mn }}月を選択</p>
            <button class="mr-auto ml-10 mt-2 hover:opacity-30" @click="nextMonth()">次の月を見る ＞＞</button>
         </div>
         <br>
         <p>都道府県：{{ choicePc }}</p>
         <p>調べたい沿岸地域：{{ choiceHc }}</p>
         <br><br>
         <button v-if="choiceHc != ''" @click="asyncData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">調べる!</button>
         <button v-if="choiceHc == ''" class="bg-blue-300 text-white font-bold py-2 px-4 border border-blue-300 rounded opacity-20 pointer-events-none">調べる!</button>
         <p v-if="choiceHc == ''" class="text-red-500 mt-1">都道府県と沿岸地域を選択するとクリックできます</p>
      </div>

      <!-- カレンダー -->
      <div v-if="calendarSwich" class="m-auto mt-10 p-10 pb-10 text-1xl">
         <h1 class="text-3xl">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</h1>
         <h1>『詳細図』をクリックするとグラフが参照できます</h1>
         <table class="min-w-full text-center border-2">
            <thead class="bg-blue-300 border-2 border-gray-500">
                  <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex" class="align-middle border-2 border-gray-500">{{ weekDay }}</th>
            </thead>
            <tbody>
                  <tr v-for="(weekData, weekDataIndex) in calendar" :key="weekDataIndex" class="border-2 border-gray-500">
                     <td v-for="(dayNumber, dayNumberIndex) in weekData" :key="dayNumberIndex" :class="{'today':isToday(dayNumber)}" class="border-2 border-gray-500">
                        <span v-if="isToday(dayNumber)" class="bg-blue-200 text-white text-2xl font-bold">今日</span>
                        <span v-else class="text-2xl">{{ dayNumber }}</span>
                        <div v-if="dayNumber > 0">
                           <p>{{choicePc}}・{{ resultTideDatas[dayNumber-1].portName}}</p>
                           <p>{{ resultTideDatas[dayNumber-1].moonTitle }}</p>
                           <p>満潮➀：{{ resultTideDatas[dayNumber-1].floodTime1 }}（{{ resultTideDatas[dayNumber-1].floodCm1 }}cm）</p>
                           <p>満潮➁：{{ resultTideDatas[dayNumber-1].floodTime2 }}（{{ resultTideDatas[dayNumber-1].floodCm2 }}cm）</p>
                           <p>干潮➀：{{ resultTideDatas[dayNumber-1].eddTime1 }}（{{ resultTideDatas[dayNumber-1].eddCm1 }}cm）</p>
                           <p>干潮➁：{{ resultTideDatas[dayNumber-1].eddTime2 }}（{{ resultTideDatas[dayNumber-1].eddCm2 }}cm）</p>
                           <p>月齢：{{ resultTideDatas[dayNumber-1].moonAge }}</p>
                           <p>日出：{{ resultTideDatas[dayNumber-1].sunRise }}</p>
                           <p>日入：{{ resultTideDatas[dayNumber-1].sunSet }}</p>
                           <p>月出：{{ resultTideDatas[dayNumber-1].moonRise }}</p>
                           <p>月入：{{ resultTideDatas[dayNumber-1].moonSet }}</p>
                           <a :href=" detailView + dayNumber +  detailView2 " class="text-2xl text-center hover:opacity-30" target=”_blank”>詳細図</a>
                        </div>      
                     </td>
                  </tr>
            </tbody>
         </table>
      </div>
      <div class="m-3 block">
         <div class="h-10"></div>
         <h1 class="mb-1 font-bold">リンク</h1>
         <h2>風予報と波予報のリンクです</h2>
         <h2 class="mb-3">（いずれもヤフーの天気予報です）</h2>
         <p><a href="https://weather.yahoo.co.jp/weather/wind/?m=ground" target=”_blank” class="hover:opacity-30">風予報を見る</a></p>
         <p><a href="https://weather.yahoo.co.jp/weather/wave/?m=height" target=”_blank” class="hover:opacity-30">波予報を見る</a></p>
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
         isShow: false, // templateの開閉と非表示用のブーリアン
         ports: [], // ユーザーが選択した地域の港一覧を入れる配列
         choicePc: '', // ユーザーが選択した地域
         choiceHc: '', // ユーザーが選択した港
         resultTideDatas: [], // ユーザーが選択した港から取得したAPIから摘出したデータを入れてtemplateに返す配列
         calendarSwich: false, //カレンダーONとOFF
         locations: ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄'],
         weekDays:['日','月','火','水','木','金','土'], // カレンダー
         today:'', // カレンダー用
         detailView: '', // 詳細図のURLの場所を入力する変数
         detailView2: "&rg=day&w=768&h=768&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on", // 詳細図のURLの後半（このまま使用）
         }
      },

   methods: {
      //都道府県選択からの港表示まで
      pcChoice:function(prefecture){
         this.calendarSwich = false;
         this.pcNum = prefecture.pcNum;
         this.ports = prefecture.port;
         this.choicePc = prefecture.name;
         this.choiceHc = '';
         this.num++;
         this.isShow = true;
         return this.ports, this.choicePc, this.num, this.pcNum;
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
      },

      // カレンダーの翌月表示用
      nextMonth(){
         timeDatas.mn ++;
         if(timeDatas.mn > 12){
            timeDatas.yr ++;
            timeDatas.mn = 1;
         }
         timeDatas.lastDay = new Date(timeDatas.yr, timeDatas.mn, 0).getDate();
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
         this.resultTideDatas = [];
         let monthTideDatas = await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 1 + '&' + 'rg=month');
         
         // 月末日からカレンダーのループ回数を設定
         let calNum = '';
            if(this.timeDatas.lastDay == 31){
               calNum = 31;
            } else {
               calNum = 30;
            };

         // APIを分解して欲しいデータだけを配列に格納
         for(let i = 1; i <= calNum; i++) {
            if(calNum == 31 && i ==31){
               monthTideDatas = await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 31 + '&' + 'rg=day');
            };
            
            let dayTideDatas = [];
            let portName = monthTideDatas.tide.port.harbor_namej;
            let moonTitle = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.title;
            let moonAge = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.age;
            let sunRise = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].sun.rise;
            let sunSet = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].sun.set;
            let moonRise = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.rise;
            let moonSet = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.set;

            dayTideDatas = {
               day: i,
               portName: portName,
               moonTitle: moonTitle,
               moonAge: moonAge,
               sunRise: sunRise,
               sunSet: sunSet,
               moonRise: moonRise,
               moonSet: moonSet,
            }; 
            
            // 干潮のデータの数が無い場合と１つの場合と２つの場合があるため分岐
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length == 2){
               let eddTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].time;
               let eddCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].cm;
               let eddTime2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].time;
               let eddCm2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].cm;
               dayTideDatas.eddTime1 = eddTime1,
               dayTideDatas.eddCm1 = eddCm1,
               dayTideDatas.eddTime2 = eddTime2;
               dayTideDatas.eddCm2 = eddCm2;
            } else if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length == 1){
               let eddTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].time;
               let eddCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].cm;
               dayTideDatas.eddTime1 = eddTime1,
               dayTideDatas.eddCm1 = eddCm1,
               dayTideDatas.eddTime2 = '--:--';
               dayTideDatas.eddCm2 = '--';
            } else {
               dayTideDatas.eddTime1 = '--:--';
               dayTideDatas.eddCm1 = '--';
               dayTideDatas.eddTime2 = '--:--';
               dayTideDatas.eddCm2 = '--';
            };

            // こちらは満潮。干潮と同様にAPIのデータの数により分岐
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood.length == 2){
               let floodTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].time;
               let floodCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].cm;
               let floodTime2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].time;
               let floodCm2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].cm;
               dayTideDatas.floodTime1 = floodTime1,
               dayTideDatas.floodCm1 = floodCm1,
               dayTideDatas.floodTime2 = floodTime2;
               dayTideDatas.floodCm2 = floodCm2;
            } else if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood.length == 1) {
               let floodTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].time;
               let floodCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].cm;
               dayTideDatas.floodTime1 = floodTime1,
               dayTideDatas.floodCm1 = floodCm1,
               dayTideDatas.floodTime2 = '--:--';
               dayTideDatas.floodCm2 = '--';
            } else {
               dayTideDatas.floodTime1 = '--:--';
               dayTideDatas.floodCm1 = '--';
               dayTideDatas.floodTime2 = '--:--';
               dayTideDatas.floodCm2 = '--';
            };

            // 日にち毎にまとめたデータを月単位で配列にまとめ
            this.resultTideDatas[this.resultTideDatas.length] = dayTideDatas;
         };
         
         // ユーザーの設定した地域で画像APIを取得
         this.detailView = '/img-api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=';
         // カレンダーをON
         this.calendarSwich = true;
         this.isShow = false;
         this.choiceHc = '';
         return this.resultTideDatas, this.detailView, this.calendarSwich;
      },
   },

   mounted() {
      // カレンダー日付取得用
      this.today = timeDatas.yr + '-' + timeDatas.mn + '-' + timeDatas.dy;
   },

   computed:{
      // カレンダーの処理
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
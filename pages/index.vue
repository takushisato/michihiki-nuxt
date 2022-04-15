<template>
<div>
   <Header />
   <div class="container m-auto text-center">
      <br><br>
      <h1>当サイトは釣り人さんに使いやすい様に作成した潮見カレンダー表示サイトです</h1>
      <br>
      <h1>釣りの他、磯遊びや潮干狩りなど海の遊びの検討にお使いください</h1>
      <br><br>
      <h1>調べたい都道府県を選択してください</h1>

      <!-- ここのテーブルはstyle.cssにてCSS記載 -->
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

      <div v-if="isShow"  class="m-10">
         <h1>調べたい場所を選択して『調べる！』を押してください</h1>
         <!-- 選択した都道府県に一致した港を表示 -->
         <ul>
            <li v-for="port in ports" :key="port.portName" @click="hcChoice(port)" class="calendarChange">
               {{ port.portName }}
            </li>
         </ul>
         <div class="clear"></div>
         <br><br>
         <p>都道府県：{{ choicePc }}</p>
         <p>場所：{{ choiceHc }}</p>
         <button @click="asyncData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">調べる!</button>
      </div>

      <!-- カレンダー -->
      <div v-if="calendarSwich" class="m-auto mt-10 p-10 pb-10 text-1xl">
         <div class="text-3xl mb-2">
            <span class="calendarChange" @click="lastMonth()">前月へ</span>
            <span class="ml-20 mr-20">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</span>
            <span class="calendarChange" @click="nextMonth()">翌月へ</span>
         </div>
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
                           <p>月齢：{{ resultTideDatas[dayNumber-1].moonAge }}</p>
                           <p>日出：{{ resultTideDatas[dayNumber-1].sunRise }}</p>
                           <p>日入：{{ resultTideDatas[dayNumber-1].sunSet }}</p>
                           <p>月出：{{ resultTideDatas[dayNumber-1].moonRise }}</p>
                           <p>月入：{{ resultTideDatas[dayNumber-1].moonSet }}</p>
                           <p>干潮時刻➀：{{ resultTideDatas[dayNumber-1].eddTime1 }}</p>
                           <p>干潮水位➀：{{ resultTideDatas[dayNumber-1].eddCm1 }}</p>
                           <p>干潮時刻➁：{{ resultTideDatas[dayNumber-1].eddTime2 }}</p>
                           <p>干潮水位➁：{{ resultTideDatas[dayNumber-1].eddCm2 }}</p>
                           <p>満潮時刻➀：{{ resultTideDatas[dayNumber-1].floodTime1 }}</p>
                           <p>満潮水位➀：{{ resultTideDatas[dayNumber-1].floodCm1 }}</p>
                           <p>満潮時刻➁：{{ resultTideDatas[dayNumber-1].floodTime2 }}</p>
                           <p>満潮水位➁：{{ resultTideDatas[dayNumber-1].floodCm2 }}</p>
                           <a :href=" detailView + dayNumber +  detailView2 " class="text-2xl calendarChange" target=”_blank”>詳細図</a>
                        </div>      
                        <!-- <p v-if="dayNumber > 0">{{ tideDatas[0].tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + dayNumber ).slice( -2 )].sun.rise }}</p> -->
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
         resultTideDatas: [], // ユーザーが選択した港から取得したAPIから摘出したデータを入れてtemplateに返す配列
         calendarSwich: false, //カレンダーONとOFF
         locations: ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄'],
         weekDays:['日','月','火','水','木','金','土'], // カレンダー
         today:'', // カレンダー用
         calDatas: 'tideDatas[0].tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + dayNumber ).slice( -2 )]',
         detailView: '', // 詳細図のURLの場所を入力する変数
         detailView2: "&rg=day&w=768&h=768&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on", // 詳細図のURLの後半（このまま使用）
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
            let eddTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].time;
            let eddCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].cm;
            let floodTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].time;
            let floodCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].cm;

            dayTideDatas = {
               number: i ,
               portName: portName,
               moonTitle: moonTitle,
               moonAge: moonAge,
               sunRise: sunRise,
               sunSet: sunSet,
               moonRise: moonRise,
               moonSet: moonSet,
               eddTime1: eddTime1,
               eddCm1: eddCm1,
               floodTime1: floodTime1,
               floodCm1: floodCm1,
            }; 
            
            // データの数が１つの場合と２つの場合があるため、そこを分岐
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length == 2){
               let eddTime2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].time;
               let eddCm2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].cm;
               dayTideDatas.eddTime2 = eddTime2;
               dayTideDatas.eddCm2 = eddCm2;
            } else {
               dayTideDatas.eddTime2 = '--:--';
               dayTideDatas.eddCm2 = '--';
            };
            // こちらもAPIのデータの数により分岐
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood.length == 2){
               let floodTime2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].time;
               let floodCm2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].cm;
               dayTideDatas.floodTime2 = floodTime2;
               dayTideDatas.floodCm2 = floodCm2;
            } else {
               dayTideDatas.floodTime2 = '--:--';
               dayTideDatas.floodCm2 = '--';
            };
            // 日にち毎にまとめたデータを月単位で配列にまとめ
            this.resultTideDatas[this.resultTideDatas.length] = dayTideDatas;
         };
         console.log(this.resultTideDatas);
         // ユーザーの設定した地域で画像APIを取得
         this.detailView = '/img-api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=';
         // カレンダーをON
         this.calendarSwich = true;
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

<template>
<div :class="{ mobileContainer }">
   <Header />
   <div class="container m-auto text-center select-none text-lg">
      <br><br>
      <h1 class="font-bold" id="cal-top">当サイトは潮の満引きをグラフで確認できる潮見カレンダー表示サイトです</h1>
      <h1 class="font-bold">釣りの他、磯遊びや潮干狩り、海遊びの検討にお使いください</h1>
      <br><br>
      <h1 class="font-bold">調べたい都道府県を選択してください</h1>
      <div v-if="isShow == false && calendarSwich == false" class="mb-40"></div>

      <!-- PC画面の都道府県テーブル -->
      <table class="local bg-gray-300">
         <tbody>
            <tr>
               <th class="bg-gray-400">北海道以北</th>
               <td>
               <p v-for="prefecture in prefectures[0]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">東北地方</th>
               <td>
               <p v-for="prefecture in prefectures[1]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">関東地方</th>
               <td>
               <p v-for="prefecture in prefectures[2]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">中部地方</th>
               <td>
               <p v-for="prefecture in prefectures[3]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">近畿地方</th>
               <td>
               <p v-for="prefecture in prefectures[4]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">中国地方</th>
               <td>
               <p v-for="prefecture in prefectures[5]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">四国地方</th>
               <td>
               <p v-for="prefecture in prefectures[6]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
            <tr>
               <th class="bg-gray-400">九州以南</th>
               <td>
               <p v-for="prefecture in prefectures[7]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</p>
               </td>
            </tr>
         </tbody>
      </table>

      <!-- モバイルの都道府県の選択画面 -->
      <div class="bg-gray-300 mobile-local">
         <label for="menu_bar01" class="mobile-label">北海道以北</label>
         <input type="checkbox" id="menu_bar01" class="mobile-input" />
            <ul class="bg-gray-400" id="links01">
               <li v-for="prefecture in prefectures[0]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar02" class="mobile-label">東北地方</label>
         <input type="checkbox" id="menu_bar02" class="mobile-input" />
            <ul class="bg-gray-400" id="links02">
               <li v-for="prefecture in prefectures[1]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar03" class="mobile-label">関東地方</label>
         <input type="checkbox" id="menu_bar03" class="mobile-input" />
            <ul class="bg-gray-400" id="links03">
               <li v-for="prefecture in prefectures[2]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar04" class="mobile-label">中部地方</label>
         <input type="checkbox" id="menu_bar04" class="mobile-input" />
            <ul class="bg-gray-400" id="links04">
               <li v-for="prefecture in prefectures[3]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar05" class="mobile-label">近畿地方</label>
         <input type="checkbox" id="menu_bar05" class="mobile-input" />
            <ul class="bg-gray-400" id="links05">
               <li v-for="prefecture in prefectures[4]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar06" class="mobile-label">中国地方</label>
         <input type="checkbox" id="menu_bar06" class="mobile-input" />
            <ul class="bg-gray-400" id="links06">
               <li v-for="prefecture in prefectures[5]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar07" class="mobile-label">四国地方</label>
         <input type="checkbox" id="menu_bar07" class="mobile-input" />
            <ul class="bg-gray-400" id="links07">
               <li v-for="prefecture in prefectures[6]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
         <label for="menu_bar08" class="mobile-label">九州以南</label>
         <input type="checkbox" id="menu_bar08" class="mobile-input" />
            <ul class="bg-gray-400" id="links08">
               <li v-for="prefecture in prefectures[7]" :key="prefecture.name" @click="pcChoice(prefecture)">{{ prefecture.name }}</li>
            </ul>
      </div>

      <!-- 港と月選択画面 -->
      <div v-if="isShow" class="local2">
         <br><br>
         <h1 class="font-bold">月を選択してください</h1>
         <!-- PC用 -->
         <div class="calendarChange text-center">
            <button class="ml-auto mr-10 mt-2 hover:opacity-30 direction" @click="lastMonth()">＜＜ 前の月を見る</button>
            <p class="mt-2 mb-2 ml-10 mr-10 pt-2 text-2xl">{{ this.timeDatas.yr }}年 {{ this.timeDatas.mn }}月</p>
            <button class="mr-auto ml-10 mt-2 hover:opacity-30 direction" @click="nextMonth()">次の月を見る ＞＞</button>
         </div>

         <!-- mobile用 -->
         <div class="flex m-auto text-center">
            <button class="bg-blue-500 mr-2 ml-auto p-2 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded mobile-direction" @click="lastMonth()">前月へ</button>
            <button class="bg-blue-500 ml-2 mr-auto p-2 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded mobile-direction" @click="nextMonth()">翌月へ</button>
         </div>
         <br><br>

         <h1 class="font-bold">沿岸地域を選択してください</h1>
         <ul>
            <li v-for="port in ports" :key="port.portName" @click="hcChoice(port)" class="text-center hover:opacity-30">
               {{ port.portName }}
            </li>
         </ul>
         <div class="clear"></div>
         <br><br>
         <br>
         <h1 class="font-bold mb-1">選択した内容に問題が無ければ下の『調べる！』をクリックください</h1>
         <p>都道府県：{{ choicePc }}</p>
         <p>選択した沿岸地域：{{ choiceHc }}</p>
         <p>選択した月：{{ this.timeDatas.yr }}年 {{ this.timeDatas.mn }}月</p>
         <br>
         <button v-if="choiceHc != ''" @click="asyncData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><a href="#cal-top">調べる!</a></button>
         <button v-if="choiceHc == ''" class="bg-blue-300 text-white font-bold py-2 px-4 border border-blue-300 rounded opacity-20 pointer-events-none">調べる!</button>
         <p v-if="choiceHc == ''" class="text-red-500 mt-1">沿岸地域を選択するとクリックできます</p>
         <br><br>
      </div>

      <!-- カレンダー -->
      <div v-if="calendarSwich" class="m-auto mt-10 p-10 pb-10 text-1xl" id="calendar">
         <h1 class="text-3xl">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</h1>
         <h1>『詳細図』をクリックするとグラフが参照できます</h1>
         <table class="min-w-full text-center border-2 text-base">
            <thead class="bg-blue-300 border-2 border-gray-500">
                  <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex" class="align-middle border-2 border-gray-500">{{ weekDay }}</th>
            </thead>
            <tbody>
                  <tr v-for="(weekData, weekDataIndex) in calendar" :key="weekDataIndex" class="border-2 border-gray-500">
                     <td v-for="(dayNumber, dayNumberIndex) in weekData" :key="dayNumberIndex" :class="{'today':isToday(dayNumber)}" class="border-2 border-gray-500">
                        <span v-if="isToday(dayNumber)" class="bg-blue-200 text-white text-2xl font-bold">今日</span>
                        <span v-else class="text-2xl">{{ dayNumber }}</span>
                        <div v-if="dayNumber > 0">
                           <p class="text-lg">{{ resultTideDatas[dayNumber-1].moonTitle }}</p>
                           <br>
                           <p>満潮➀：{{ resultTideDatas[dayNumber-1].floodTime1 }}</p>
                           <p>（{{ resultTideDatas[dayNumber-1].floodCm1 }}cm）</p>
                           <p>満潮➁：{{ resultTideDatas[dayNumber-1].floodTime2 }}</p>
                           <p>（{{ resultTideDatas[dayNumber-1].floodCm2 }}cm）</p>
                           <p>干潮➀：{{ resultTideDatas[dayNumber-1].eddTime1 }}</p>
                           <p>（{{ resultTideDatas[dayNumber-1].eddCm1 }}cm）</p>
                           <p>干潮➁：{{ resultTideDatas[dayNumber-1].eddTime2 }}</p>
                           <p>（{{ resultTideDatas[dayNumber-1].eddCm2 }}cm）</p>
                           <br>
                           <p>月齢：{{ resultTideDatas[dayNumber-1].moonAge }}</p>
                           <p>日出：{{ resultTideDatas[dayNumber-1].sunRise }}</p>
                           <p>日入：{{ resultTideDatas[dayNumber-1].sunSet }}</p>
                           <p>月出：{{ resultTideDatas[dayNumber-1].moonRise }}</p>
                           <p>月入：{{ resultTideDatas[dayNumber-1].moonSet }}</p>
                           <br>
                           <p>{{choicePc}}・{{ resultTideDatas[dayNumber-1].portName}}</p>
                           <a :href=" detailView + dayNumber +  detailView2 " class="text-2xl text-center hover:opacity-30" target=”_blank”>詳細図</a>
                        </div>      
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
         mobileContainer: false,
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
         let monthTideDatas = await this.$axios.$get('/api' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 1 + '&' + 'rg=month');

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
               monthTideDatas = await this.$axios.$get('/api' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 31 + '&' + 'rg=day');
            };
            console.log(monthTideDatas);
            
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
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length >= 1){
               let eddTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].time;
               let eddCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].cm;
               dayTideDatas.eddTime1 = eddTime1;
               dayTideDatas.eddCm1 = eddCm1;
               } else {
               dayTideDatas.eddTime1 = '--:--';
               dayTideDatas.eddCm1 = '--';
            };
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length == 2){
               let eddTime2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].time;
               let eddCm2 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].cm;
               dayTideDatas.eddTime2 = eddTime2;
               dayTideDatas.eddCm2 = eddCm2;
            } else {
               dayTideDatas.eddTime2 = '--:--';
               dayTideDatas.eddCm2 = '--';
            };

            // こちらは満潮。干潮と同様にAPIのデータの数により分岐
            if(monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood.length >= 1){
               let floodTime1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].time;
               let floodCm1 = monthTideDatas.tide.chart[this.timeDatas.yr + "-" + ( "00" + this.timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].cm;
               dayTideDatas.floodTime1 = floodTime1;
               dayTideDatas.floodCm1 = floodCm1;
            } else {
               dayTideDatas.floodTime1 = '--:--';
               dayTideDatas.floodCm1 = '--';
            };
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
         this.detailView = '/img-api' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=';
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
// 問い合わせフォーム
// スマホでの一覧画面
// API読めない問題
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

      <!-- <div class="m-10"> -->
         <!-- 都道府県を表示 -->
         <!-- <ul class="text-2xl">
            <li v-for="prefecture in prefectures[0]" :key="prefecture.name" @click="pcChoice(prefecture)">
               {{ prefecture.name }}
            </li>
         </ul>
      </div> -->


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
      <div class="m-auto mt-10 p-10 pb-10">
         <div class="text-1xl">
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
                           <p>大潮</p>
                           <p>満月</p>
                           <p>釣り日和</p>
                           <p>大潮</p>
                           <p>満月</p>
                           <p>釣り日和</p>
                           <p>大潮</p>
                           <p>満月</p>
                           <p>釣り日和</p>
                        </td>
                     </tr>
               </tbody>
            </table>
         </div>
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

// JSON代入用
let tideDatas = [];

// APIパラメータ
let pcNum = '';  // 都道府県番号
let hcNum = ''; // 港番号

let num = 0; // port取得用管理変数

export default {
       components:{
        Header,
        Footer
    },
   data() {
      return {
         timeDatas: timeDatas,
         prefectures: prefectures,
         isShow: false,
         ports: [],
         choicePc: '',
         choiceHc: '',
         tideDatas: [],
         // カレンダー用
         weekDays:['日','月','火','水','木','金','土'],
         today:'',
         }
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

      lastMonth(){
         timeDatas.mn --;
         if(timeDatas.mn < 1){
            timeDatas.yr --;
            timeDatas.mn = 12;
         }
         timeDatas.lastDay = new Date(timeDatas.yr, timeDatas.mn, 0).getDate();
      },

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
         tideDatas = [];
         tideDatas[tideDatas.length] = await this.$axios.$get('/api/' + '?' + 'pc=' + pcNum + '&' + 'hc=' + hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 1 + '&' + 'rg=month');
         if(timeDatas.lastDay == 31){
            tideDatas[tideDatas.length] = await this.$axios.$get('/api/' + '?' + 'pc=' + pcNum + '&' + 'hc=' + hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 31 + '&' + 'rg=day');
         }
         console.log(tideDatas);
         return tideDatas;
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
         while(dayNumber <= timeDatas.lastDay){
               let weekData = [];
               for(let i = 0;i <= 6;i ++){
                  if(calendar.length == 0 && i < timeDatas.firstWeekDay){
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
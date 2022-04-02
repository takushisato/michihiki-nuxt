<template>
    <div class="container m-auto">
       <h1 class="text-2xl">みちひき</h1>
         <p class="text-2xl">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</p>

       <div class="m-10">
          <!-- 都道府県を表示 -->
            <ul class="text-2xl">
               <li v-for="prefecture in prefectures" :key="prefecture.name" @click="pcChoice(prefecture)">
                  {{ prefecture.name }}
               </li>
            </ul>
       </div>

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
       </div>
       <button @click="asyncData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">click!</button>
         
         <!-- カレンダー -->
         <div class="container m-auto mt-10 mb-10">
            <div class="text-2xl">
               <span class="">{{ timeDatas.yr }}年{{ timeDatas.mn }}月</span>
               <table class="min-w-full text-center border-2">
                  <thead class="bg-blue-300 border-2">
                        <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex" class="align-middle">{{weekDay}}</th>
                  </thead>
                  <tbody>
                        <tr v-for="(weekData,weekDataIndex) in calendar" :key="weekDataIndex" class="border-2">
                        <td v-for="(dayNumber,dayNumberIndex) in weekData" :key="dayNumberIndex" :class="{'today':isToday(dayNumber)}" class="border-2">
                           <span v-if="isToday(dayNumber)" class="bg-blue-200 text-white">今日</span>
                           <span v-else>{{ dayNumber }}</span>           
                        </td>
                        </tr>
                  </tbody>
               </table>
            </div>
         </div>
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
         for(let i = 1; i <= timeDatas.lastDay; i++){
            tideDatas[tideDatas.length] = await this.$axios.$get('/api/' + '?' + 'pc=' + pcNum + '&' + 'hc=' + hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + i + '&' + rg);
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
            let firstWeekDay = new Date(timeDatas.yr, timeDatas.mn - 1, 1).getDay();
            let lastDay = new Date(timeDatas.yr, timeDatas.mn, 0).getDate();
            let dayNumber = 1;
            while(dayNumber <= lastDay){
                let weekData = [];
                for(let i = 0;i <= 6;i ++){
                    if(calendar.length == 0 && i < firstWeekDay){
                        weekData[i] = '';
                        
                    }else if(lastDay < dayNumber){
                        weekData[i] = '';
                    }else{
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

<style>
</style>
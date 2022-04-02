<template>
    <div class="container m-auto mt-10">
        <div>
            <div id="header">
                <span class="selected-month">{{ year }}年{{ month }}月</span>
                <table class="min-w-full text-center">
                    <thead class="bg-blue-300">
                        <th v-for="(weekDay, weekDayIndex) in weekDays" :key="weekDayIndex" class="align-middle">{{weekDay}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(weekData,weekDataIndex) in calendar" :key="weekDataIndex">
                        <td v-for="(dayNumber,dayNumberIndex) in weekData" :key="dayNumberIndex" :class="{'today':isToday(dayNumber)}">
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
export default {
    data() {
        return {
            weekDays:['日','月','火','水','木','金','土'],
            year: '',
            month: '',
        }
    },

    methods:{       
        isToday:function(day){
            let date = this.year + "-" + this.month + "-" + day;
            if(this.today == date){
                return true;
            }
            return false;
        }
        
    },

    mounted(){
        let date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        let actualDay = date.getDate();
        this.today = this.year + '-' + this.month + '-' + actualDay;
    },

    computed:{
        calendar:function(){
            let calendar = [];
            let firstWeekDay = new Date(this.year,this.month - 1,1).getDay();
            let lastDay = new Date(this.year,this.month,0).getDate();
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

};

</script>

<style>
    
</style>
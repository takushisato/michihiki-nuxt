<script>
import { timeDatas } from '~/datas/timeData.js'
import index from '~/pages/index.vue'

export default {
    data(){
        return{
            index: index,
            timeDatas: timeDatas,
            resultTideDatas: [],
        }
    },
    methods:{
        // パラメータに現在日時を入力してAPI取得
        async asyncData() {
            let monthTideDatas = await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&'+ 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 1 + '&' + 'rg=month');
            // if(this.timeDatas.lastDay == 31){
            //    monthTideDatas = monthTideDatas + await this.$axios.$get('/api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=' + 31 + '&' + 'rg=day');
            // }

            this.resultTideDatas = [];
            for(let i = 1; i <= 30; i++) {
                let dayTideDatas = [];
                let portName = monthTideDatas.tide.port.harbor_namej;
                let moonTitle = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.title;
                let moonAge = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.age;
                let sunRise = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].sun.rise;
                let sunSet = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].sun.set;
                let moonRise = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.rise;
                let moonSet = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].moon.set;
                let eddTime1 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].time;
                let eddCm1 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[0].cm;
                let floodTime1 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].time;
                let floodCm1 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[0].cm;

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
            
            if(monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd.length == 2){
                let eddTime2 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].time;
                let eddCm2 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].edd[1].cm;
                dayTideDatas.eddTime2 = eddTime2;
                dayTideDatas.eddCm2 = eddCm2;
            } else {
                dayTideDatas.eddTime2 = '--:--';
                dayTideDatas.eddCm2 = '--';
            };

            if(monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood.length == 2){
                let floodTime2 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].time;
                let floodCm2 = monthTideDatas.tide.chart[timeDatas.yr + "-" + ( "00" + timeDatas.mn ).slice( -2 ) + "-" + ( "00" + i ).slice( -2 )].flood[1].cm;
                dayTideDatas.floodTime2 = floodTime2;
                dayTideDatas.floodCm2 = floodCm2;
            } else {
                dayTideDatas.floodTime2 = '--:--';
                dayTideDatas.floodCm2 = '--';
            };

                this.resultTideDatas[this.resultTideDatas.length] = dayTideDatas;
            };

            console.log(this.resultTideDatas);
            
            this.detailView = '/img-api/' + '?' + 'pc=' + this.pcNum + '&' + 'hc=' + this.hcNum + '&' + 'yr=' + timeDatas.yr + '&' + 'mn=' + timeDatas.mn + '&' + 'dy=';
            this.calendarSwich = true;

            return this.detailView, this.calendarSwich, this.resultTideDatas;;
        },
            
    }
}
</script>
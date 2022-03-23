<template>
    <div class="container m-auto">
       <h1 class="text-2xl">みちひき</h1>
         <p class="text-2xl">{{ yearMonth }}</p>

       <div class="m-10">
          <!-- 都道府県を表示 -->
            <ul>
               <li v-for="i in prefectures.length" :key="i" @click="pcName()">
                  {{ prefectures[i-1][1] }}
               </li>
            </ul>
       </div>

       <div class="m-10">
          <!-- ↑で選択した都道府県に一致した港を表示 -->
            <ul>
               <li v-for="i in hcNames.length" :key="i" @click="pchcParames()">
                  {{ hcNames[i-1][3] }}
               </li>
            </ul>
       </div>

       <button @click="asyncData()" class="p-3 bg-red-500 text-white">click!</button>
    </div>
</template>
 
<script>
   // 時間取得
   let date = new Date();

   // JSON代入用
   let tideDatas = [];

   // APIパラメータ
   let pc = '';  // 都道府県番号
   let hc = ''; // 港番号
   let yr = ''; //年
   let mn = ''; //月
   let dy = ''; //日
   let rg = 'rg=day'; //取得期間

export default {
   data() {
      return {    
      prefectures: [
         [0, '千島列島'],
         [1, '北海道'],
         [2, '青森県'],
         [3, '岩手県'],
      ],

      hcNames: [
         ['pc=1','hc=1', '北海道','蘂取'],
         ['pc=1','hc=2', '北海道','紗万部'],
         ['pc=1','hc=3', '北海道','内岡'],
         ['pc=1','hc=4', '北海道','内保湾'],
         ['pc=1','hc=5', '北海道','茂世路湾'],
         ['pc=1','hc=6', '北海道','単冠湾'],
         ['pc=1','hc=7', '北海道','入里節'],
         ['pc=1','hc=8', '北海道','ニキシヨロ'],
         ['pc=1','hc=9', '北海道','古釜府湾'],
         ['pc=1','hc=10','北海道','泊湾'],
         ['pc=1','hc=11','北海道','水晶島'],
         ['pc=1','hc=12','北海道','多楽島'],
         ['pc=1','hc=13','北海道','斜古丹'],
         ['pc=1','hc=14','北海道','根室'],
         ['pc=1','hc=15','北海道','尾岱沼'],
         ['pc=1','hc=16','北海道','羅臼'],
         ['pc=1','hc=17','北海道','コイセボイ'],
         ['pc=1','hc=18','北海道','網走'],
         ['pc=1','hc=19','北海道','紋別'],
         ['pc=1','hc=20','北海道','雄武'],
         ['pc=1','hc=21','北海道','枝幸'],
         ['pc=1','hc=22','北海道','浜鬼志別'],
         ['pc=1','hc=23','北海道','宗谷岬'],
         ['pc=1','hc=24','北海道','稚内'],
         ['pc=1','hc=25','北海道','抜海'],
         ['pc=1','hc=26','北海道','鴛泊'],
         ['pc=1','hc=27','北海道','沓形'],
         ['pc=1','hc=28','北海道','船泊'],
         ['pc=1','hc=29','北海道','苫前'],
         ['pc=1','hc=30','北海道','留萌'],
         ['pc=1','hc=31','北海道','浜益'],
         ['pc=1','hc=32','北海道','小樽'],
         ['pc=1','hc=33','北海道','忍路'],
         ['pc=1','hc=34','北海道','神威岬'],
         ['pc=1','hc=35','北海道','岩内'],
         ['pc=1','hc=36','北海道','寿都'],
         ['pc=1','hc=37','北海道','瀬棚'],
         ['pc=1','hc=38','北海道','奥尻'],
         ['pc=1','hc=39','北海道','青苗'],
         ['pc=1','hc=40','北海道','江差'],
         ['pc=1','hc=41','北海道','清部'],
         ['pc=1','hc=42','北海道','松前'],
         ['pc=1','hc=43','北海道','吉岡'],
         ['pc=1','hc=44','北海道','湧元'],
         ['pc=1','hc=45','北海道','函館'],
         ['pc=1','hc=46','北海道','汐首岬'],
         ['pc=1','hc=47','北海道','戸井'],
         ['pc=1','hc=48','北海道','古武井'],
         ['pc=1','hc=49','北海道','臼尻'],
         ['pc=1','hc=50','北海道','森'],
         ['pc=1','hc=51','北海道','有珠湾'],
         ['pc=1','hc=52','北海道','室蘭'],
         ['pc=1','hc=53','北海道','苫小牧'],
         ['pc=1','hc=54','北海道','東静内'],
         ['pc=1','hc=55','北海道','三石'],
         ['pc=1','hc=56','北海道','浦河'],
         ['pc=1','hc=57','北海道','えりも'],
         ['pc=1','hc=58','北海道','歌露'],
         ['pc=1','hc=59','北海道','襟裳岬'],
         ['pc=1','hc=60','北海道','庶野'],
         ['pc=1','hc=61','北海道','ルベシベツ'],
         ['pc=1','hc=62','北海道','音調津'],
         ['pc=1','hc=63','北海道','十勝'],
         ['pc=1','hc=64','北海道','釧路'],
         ['pc=1','hc=65','北海道','厚岸'],
         ['pc=1','hc=66','北海道','厚岸湖'],
         ['pc=1','hc=67','北海道','霧多布'],
         ['pc=1','hc=68','北海道','落石'],
         ['pc=1','hc=69','北海道','花咲'],
         ['pc=1','hc=70','北海道','香深'],
         ['pc=1','hc=71','北海道','常呂'],
         ['pc=1','hc=72','北海道','湧別'],
         ['pc=1','hc=73','北海道','利尻'],
         ],
      }
   },

   computed:{
      yearMonth:function(){
         this.year = date.getFullYear();
         this.month = date.getMonth() + 1;
         this.actualDay = date.getDate();
         let yearMonth = this.year + '年' +  this.month + '月';
         return yearMonth;
      },
   },

   methods: {
      pcName:function(){
         //都道府県選択からの漁港表示まで
      },

      pchcParames:function(){
         //PCとHCにparameterを代入
      },

      async asyncData() {
         this.year = date.getFullYear();
         this.month = date.getMonth() + 1;
         this.actualDay = date.getDate();
         yr = 'yr=' + this.year;
         mn = 'mn=' + this.month;
         dy = 'dy=' + this.actualDay;
         let items = await this.$axios.$get('/api/' + '?' + pc + '&' + hc + '&'+ yr + '&' + mn + '&' + dy + '&' + rg);
         console.log(items);
         this.tideDatas = items;
         return {
            tideDatas: items,
         }
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


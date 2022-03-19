<template>
    <div class="container m-auto">
       <table class="table-auto m-auto mt-2 mb-10 text-center">
           <thead>
              <!-- ここの日付も自動取得したい -->
               <th class="text-2xl">2022年3月</th>
               <th class="text-2xl">
                   {{ items.tide.port.harbor_namej }}
               </th>
           </thead>

           <!-- ここからループ処理してAPIから取得したJSONを埋め込みたい -->
           <!-- 現在はダミーのデータで表を作ってます -->
           <tr>
               <th class="border px-4 py-2 bg-blue-300">日</th>
               <th class="border px-4 py-2 bg-blue-300">潮</th>
               <th class="border px-4 py-2 bg-blue-300">おすすめ度</th>
               <th class="border px-4 py-2 bg-blue-300">満潮</th>
               <th class="border px-4 py-2 bg-blue-300">満潮</th>
               <th class="border px-4 py-2 bg-blue-300">干潮</th>
               <th class="border px-4 py-2 bg-blue-300">干潮</th>
               <th class="border px-4 py-2 bg-blue-300">日の出</th>
               <th class="border px-4 py-2 bg-blue-300">日の入</th>
               <th class="border px-4 py-2 bg-blue-300">月の出</th>
               <th class="border px-4 py-2 bg-blue-300">月の入り</th>
               <th class="border px-4 py-2 bg-blue-300">月齢</th>
            </tr>
           <tr>
               <td class="border px-4 py-2">1</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">おすすめ！</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">2</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">3</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">4</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">5</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">おすすめ！</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">6</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">7</td>
               <td class="border px-4 py-2">長潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">8</td>
               <td class="border px-4 py-2">若潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">9</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">10</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">11</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">12</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">13</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">おすすめ！</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">14</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">15</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">16</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">17</td>
               <td class="border px-4 py-2">長潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">18</td>
               <td class="border px-4 py-2">長潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">19</td>
               <td class="border px-4 py-2">若潮</td>
               <td class="border px-4 py-2">おすすめ！</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">20</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            
            <tr>
               <td class="border px-4 py-2">21</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">22</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">23</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">24</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">25</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">26</td>
               <td class="border px-4 py-2">小潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">27</td>
               <td class="border px-4 py-2">若潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">28</td>
               <td class="border px-4 py-2">若潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">29</td>
               <td class="border px-4 py-2">長潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">30</td>
               <td class="border px-4 py-2">中潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
            <tr>
               <td class="border px-4 py-2">31</td>
               <td class="border px-4 py-2">大潮</td>
               <td class="border px-4 py-2">-</td>
               <td class="border px-4 py-2">5:00</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">12:00</td>
               <td class="border px-4 py-2">23:00</td>
               <td class="border px-4 py-2">4:30</td>
               <td class="border px-4 py-2">17:15</td>
               <td class="border px-4 py-2">18:00</td>
               <td class="border px-4 py-2">3:45</td>
               <td class="border px-4 py-2">満月</td>
            </tr>
       </table>

       <!-- この下の地名をクリックしたら取得するAPIのパラメータが変わって再取得し、画面を更新したい -->
       <!-- 取り合えず、今はPタグでズラッと北海道の地名だけ載せてます -->
       <div class="block">
            <p class="block p-3 ml-3 leading-normal cursor-pointer">蘂取</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">紗万部</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">内岡</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">内保湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">茂世路湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">単冠湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">入里節</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">ニキシヨロ</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">古釜府湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">泊湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">水晶島</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">多楽島</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">斜古丹</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">根室</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">尾岱沼</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">羅臼</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">コイセボイ</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">網走</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">紋別</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">雄武</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">枝幸</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">浜鬼志別</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">宗谷岬</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">稚内</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">抜海</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">鴛泊</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">沓形</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">船泊</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">苫前</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">留萌</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">浜益</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">小樽</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">忍路</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">神威岬</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">岩内</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">寿都</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">瀬棚</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">奥尻</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">青苗</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">江差</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">清部</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">松前</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">吉岡</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">湧元</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">函館</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">汐首岬</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">戸井</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">古武井</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">臼尻</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">森</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">有珠湾</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">室蘭</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">苫小牧</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">東静内</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">三石</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">浦河</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">えりも</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">歌露</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">襟裳岬</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">庶野</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">ルベシベツ</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">音調津</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">十勝</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">釧路</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">厚岸</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">厚岸湖</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">霧多布</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">落石</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">花咲</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">香深</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">常呂</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">湧別</p>
            <p class="block p-3 ml-3 leading-normal cursor-pointer">利尻</p>
       </div>
    </div>
</template>
 
<script>
export default {
   async asyncData({ app }) {
      let items = await app.$axios.$get('/hokkaido')
      console.log(items);
      return {
         items
      }
   },

   // 'https://api.tide736.net/get_tide.php?pc=1&hc=1&yr=2022&mn=3&dy=13&rg=day'
   // 　↑　これが今読んでる北海道のAPIのパラメータ。PCが北海道、hcが北海道の地名、yr mn dy が日付、rgが取得するパラメータの期間
   // これの日付部分を自動で更新させる様にしたい。
   // また、ユーザーの操作よってpc hc も変更できる様にしたい。

   data() {

   },

   // 日付の取得はできてますが、上手く埋め込めない・・・
   created(){
   let date = new Date();
   this.year = date.getFullYear();
   this.month = date.getMonth() + 1;
   this.actualDay = date.getDate();
   let yearMonth = this.year + '年' +  this.month + '月';
   },
   
}
</script>

<style>

</style>

// https://zenn.dev/mouse_484/articles/nuxt-axios-cors

// https://zenn.dev/code_diver/articles/dcf0ec9803cb55


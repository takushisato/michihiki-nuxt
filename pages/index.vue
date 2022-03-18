<template>
    <div class="container m-auto">
        <div class="font-sans container">
            <div class="w-full md:w-3/5 mx-auto p-8">
                <h1>調べたい場所を指定して下さい</h1>
                <div class="shadow-md">
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0 " id="tab-multi-hokkaido" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-hokkaido">北海道</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <Nuxt-link to="/1hokkaido">
                                <input class="absolute opacity-0 " id="tab-multi-hokkaido2" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-hokkaido2">北海道</label>
                                </Nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-multi-tohoku" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-tohoku">東北</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-aomori" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-aomori">青森県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-iwate" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-iwate">岩手県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-miyagi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-miyagi">宮城県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-akita" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-akita">秋田県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-yamagata" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-yamagata">山形県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-fukushima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-fukushima">福島県</label>
                            </div>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-multi-kanto" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-kanto">関東</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-ibaraki" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-ibaraki">茨城県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-chiba" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-chiba">千葉県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-tokyo" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-tokyo">東京都</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kanagawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kanagawa">神奈川県</label>
                            </div>                            
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0 " id="tab-multi-hokushinetu" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-hokushinetu">北信越</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-niigata" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-niigata">新潟県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-toyama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-toyama">富山県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-ishikawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-ishikawa">石川県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-fukui" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-fukui">福井県</label>
                            </div>  
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0 " id="tab-multi-tokai" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-tokai">東海</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-shizuoka" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-shizuoka">静岡県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-aichi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-aichi">愛知県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-mie" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-mie">三重県</label>
                            </div>  
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-multi-kinki" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-kinki">近畿</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kyoto" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kyoto">京都府</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-osaka" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-osaka">大阪府</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-hyogo" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-hyogo">兵庫県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-wakayama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-wakayama">和歌山県</label>
                            </div> 
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-multi-tyugoku" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-tyugoku">中国</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-tottri" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-tottri">鳥取県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-shimane" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-shimane">島根県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-okayama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-okayama">岡山県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-hiroshima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-hiroshima">広島県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-yamaguchi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-yamaguchi">山口県</label>
                            </div>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0 " id="tab-multi-shikoku" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-shikoku">四国</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-tokushima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-tokushima">徳島県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kagawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kagawa">香川県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-ehime" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-ehime">愛媛県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kochi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kochi">高知県</label>
                            </div>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0 " id="tab-multi-kyuusyuokinawa" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-kyuusyuokinawa">九州・沖縄</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-fukuoka" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-fukuoka">福岡県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-saga" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-saga">佐賀県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-nagasaki" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-nagasaki">長崎県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kumamoto" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kumamoto">熊本県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-oita" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-oita">大分県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-miyazaki" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-miyazaki">宮崎県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kagoshima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kagoshima">鹿児島県</label>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-okinawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-okinawa">沖縄県</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    
};
</script>

<style>
         /* Tab content - closed */
         .tab-content {
         max-height: 0;
         -webkit-transition: max-height .35s;
         -o-transition: max-height .35s;
         transition: max-height .35s;
         }
         /* :checked - resize to full height */
         .tab input:checked ~ .tab-content {
         max-height: 100vh;
         }
         /* Label formatting when open */
         .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1.25rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/
         background-color: #f8fafc; /*.bg-gray-100 */
         color: #6574cd; /*.text-indigo*/
         }
         /* Icon */
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }
         /* Icon formatting - closed */
         .tab input[type=checkbox] + label::after {
         content: "+";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
         /* Icon formatting - open */
         .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);
         background-color: #6574cd; /*.bg-indigo*/
         color: #f8fafc; /*.text-grey-lightest*/
         }
      </style>

https://zenn.dev/mouse_484/articles/nuxt-axios-cors

https://zenn.dev/code_diver/articles/dcf0ec9803cb55


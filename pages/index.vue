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
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">根室</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">網走</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">紋別</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">稚内</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">留萌</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">小樽</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">湧元</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">函館</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">室蘭</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">苫小牧</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">十勝</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">釧路</p>
                            <p class="block p-3 ml-3 leading-normal cursor-pointer">利尻</p>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" id="tab-multi-tohoku" type="checkbox" name="tabs">
                        <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-tohoku">東北</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-aomori" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-aomori">青森県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">竜飛埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三厩</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">袰月</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">青森</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">茂浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">野辺地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大畑</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尻屋岬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尻屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">白糠</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">深浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鯵ヶ沢</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">関根浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浅虫</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">竜飛</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-iwate" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-iwate">岩手県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">久慈</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宮古</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">山田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">釜石</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大船渡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八木</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">茂師</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-miyagi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-miyagi">宮城県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">気仙沼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船越湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">女川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鮎川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">荻浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">石巻</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">野蒜湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">石浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">港橋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">花淵浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">仙台</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">閖上</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">志津川</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-akita" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-akita">秋田県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">金浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">秋田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">能代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩館</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">男鹿</p>
                            </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-yamagata" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-yamagata">山形県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鼠ヶ関</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">由良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">加茂</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">酒田</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-fukushima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-fukushima">福島県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">相馬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松川浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">夫沢</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">富岡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">四倉</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小名浜</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">日立</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">那珂湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鹿島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大洗</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-chiba" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-chiba">千葉県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">銚子漁港</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">犬吠埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">名洗</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">上総勝浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鴨川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">白浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">布良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船形</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩井袋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">第１海堡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">君津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">姉崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">市原</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">寒川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">千葉灯標</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">市川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船橋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">館山</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-tokyo" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-tokyo">東京都</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">築地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">芝浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">羽田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岡田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">波浮</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">式根島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神津島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">阿古</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鳥島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">二見</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">沖</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">晴海</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八重根</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">沖ノ鳥島</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kanagawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kanagawa">神奈川県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">塩浜運河</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">末広</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新港</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新山下</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">根岸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">横須賀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">走水</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浦賀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">久里浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">金田湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">間口</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">城ヶ島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">向ヶ崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">諸磯</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">油壷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小田和湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新宿湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江ノ島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">真鶴</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">能生</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">直江津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">柏崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">出雲崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">寺泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新潟西港</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">二見</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小木</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">両津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鷲崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩船</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">粟島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新潟東港</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-toyama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-toyama">富山県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">阿尾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伏木</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">富山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">生地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宮崎</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-ishikawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-ishikawa">石川県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">金沢</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">滝</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">寺家</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">輪島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松波</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">曾良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">中居入</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">七尾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">穴水</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-fukui" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-fukui">福井県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">内浦湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">和田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">丹生</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">敦賀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福井</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三国</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">網代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊東</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">川奈</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">白浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">南伊豆</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">妻良子浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田子</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇久須</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田子の浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">興津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">清水</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三保</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">焼津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">相良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">御前崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">舞阪</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">熱海</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-aichi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-aichi">愛知県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊良湖</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">篠島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐久島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">立馬埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">豊橋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三谷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">蒲郡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">形原</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">洲崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">寺津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">武豊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">師崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">常滑</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鬼崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">名古屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">赤羽根</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-mie" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-mie">三重県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">四日市</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松阪</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇治山田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鳥羽</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">的矢</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浜島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">五ヶ所</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">吉津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尾鷲</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">古江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">二木島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鵜殿</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">錦</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊根</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">島埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">獅子崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田井</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">舞鶴東港</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">舞鶴西港</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-osaka" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-osaka">大阪府</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">深日</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">淡輪</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岸和田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">泉大津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">堺</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大阪</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-hyogo" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-hyogo">兵庫県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">阿那賀浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">由良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">洲本</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">仮屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尼崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">苅藻島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">明石</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">室津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江井</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">家島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">二見</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高砂</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">飾磨</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">広畑</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">相生</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">赤穂</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">香住</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">柴山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">津居山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">垂水</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-wakayama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-wakayama">和歌山県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">紀伊勝浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浦神</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">串本</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">周参見</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田辺（旧）</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三尾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">比井湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">由良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">海南</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">和歌山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">沖ノ島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田辺</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">米子</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">境</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">淀江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">赤碕</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">因幡網代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田後</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-shimane" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-shimane">島根県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">外ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">温泉津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大社</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鷺</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">河下</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">恵曇</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">加賀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">七類</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大根島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">安来</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浦郷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">日ノ津浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">菱浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">知々井</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西郷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松江</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-okayama" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-okayama">岡山県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">片上</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大多府島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">牛窓</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宝伝</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小串</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇野</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下津井</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">水島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">笠岡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">玉島</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-hiroshima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-hiroshima">広島県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鞆</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">常石</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尾道</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">糸崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江之浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小佐木島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">忠海</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">土生</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">瀬戸田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">御手洗</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小用</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">奥ノ内</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鹿老渡小瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">室尾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">美能</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江田内</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">広島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">呉</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">音戸瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">早瀬瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">厳島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大野瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">竹原</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-yamaguchi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-yamaguchi">山口県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩国</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">土居</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">情島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大畠</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">東安下庄</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">沖家室島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">室津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">平生</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下松</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">徳山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三田尻</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇部</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">苅屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小野田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長府</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩黒</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">前田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">壇之浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下関第１突堤</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">弟子待</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田の首</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">南風泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">吉母</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">特牛</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">油谷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">萩</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">江崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大山ノ鼻</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">日和佐</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">橘</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">富岡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小松島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">土佐泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">堂ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">北泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">孫埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">網代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">粟津</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kagawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kagawa">香川県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">引田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">坂手</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大部</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">地蔵埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">入部</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宮ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">男木島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高松</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">坂出</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">丸亀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鍋島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">与島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">青木</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐柳</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">粟島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">観音寺</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-ehime" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-ehime">愛媛県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">多喜浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新居浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西条</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">家ノ島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">今治</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">来島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">波止浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">菊間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇和間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">興居島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">青島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三机</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">与侈</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">内ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八幡浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">奥地湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇和島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">能登</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">柏崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鼻栗瀬戸</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kochi" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kochi">高知県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">甲浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">室戸岬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">室津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高知</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">須崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">土佐清水</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">片島</p>
                                </div>
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
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">苅田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新門司</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">青浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田野浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">旧門司</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西海岸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">砂津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">製鉄戸畑泊地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">若松</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">戸畑</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八幡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">沖</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">白島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">岩屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鐘崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">津屋崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西戸埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">博多船だまり</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福岡船だまり</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">若松（響灘）</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三池</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">筑前大島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">柏原</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">脇田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">日明</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小呂島</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-saga" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-saga">佐賀県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">唐津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">呼子</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">名護屋浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">仮屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">波瀬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">竹崎島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">住ノ江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">若津</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-nagasaki" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-nagasaki">長崎県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">新御厨</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大飛島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">郷ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">勝本</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">芦辺</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">厳原</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大船越</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">茂土浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鴨居瀬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">千尋藻</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐賀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小鹿湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">網代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">泉</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大河内湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐須奈</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊奈</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">狩尾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">綱湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">廻</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">尾崎浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">箕形</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">昼ヶ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">竹敷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">島山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大山浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">万関瀬戸東口</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">万関瀬戸西口</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小茂田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">久根浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">豆酘</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">黒子島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">薄香湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">志々伎湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">楠泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">相ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高後埼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">俵ヶ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐世保</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">巣喰ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鯛ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小鯛</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">畑下</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">名倉</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">早岐突堤（北側）</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">早岐突堤（南側）</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小串湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大村</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">面高湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">肥前大島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">崎戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">小江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊王島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鼠島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">女神</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松ケ枝</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">水ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">深堀</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">樺島水道</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">笛吹</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">有川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鯛之浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">荒川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">若松</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船廻湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">戸岐浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">富江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">玉之浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三井楽</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">水之浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">女島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">網場</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">口之津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">須川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">島原</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">荒川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">飯ノ瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">神部</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">島原新港</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">万関瀬戸中央部</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">青方</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">松浦</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kumamoto" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kumamoto">熊本県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">本渡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長洲</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">熊本</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">三角</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">蔵々ノ瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">柳ノ瀬戸</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">八代</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">加賀島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">池ノ浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">水俣</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">袋浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">富岡</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">崎津湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">牛深</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大門</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-oita" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-oita">大分県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐賀関</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鶴崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西大分</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">亀川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">日出</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">姫島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">香々地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">高田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">中津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">下浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">泊ヶ内</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">津久見</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">葛</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">猪串</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">蒲江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">米水津泊地</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-miyazaki" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-miyazaki">宮崎県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">福島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">外浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">油津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">内海</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">折生迫</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">細島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">美々津</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">土々呂</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宮崎</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-kagoshima" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-kagoshima">鹿児島県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">阿久根</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">川内</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">浦内湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">串木野</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">戸崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">坊泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">枕崎</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">山川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">喜入</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鹿児島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">麓</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">園山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">垂水</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">鹿屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊座敷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">志布志</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">硫黄島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西之表</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">田ノ脇</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">大浦</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">一湊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">口永良部島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">臥蛇島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">中之島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宝島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">笠利湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">名瀬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宇検</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">西古見湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">久慈湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">古仁屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">住用湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">請島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">山村湾</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">和泊</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">茶花</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">波見</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0 " id="tab-multi-okinawa" type="checkbox" name="tabs">
                                <label class="block p-8 leading-normal cursor-pointer" for="tab-multi-okinawa">沖縄県</label>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">我喜屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">伊江</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">運天</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">渡久地</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">那覇</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">糸満</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">石川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">馬天</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">楚久</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">座間味</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">儀間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">南大東島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">平良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">長山</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">石垣</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">船浮</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">比川</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">黄尾嶼</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">魚釣島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">白浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">安田</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">辺土名</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">都屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">平敷屋</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">奥武島</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">仲里</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">池間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">佐良浜</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">波照間</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">久部良</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">渡嘉敷</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">泡瀬</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">東</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">宜名真</p>
                                    <p class="block p-3 ml-3 leading-normal cursor-pointer">兼城</p>
                                </div>
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
    async asyncData({ app }) {
        let items = await app.$axios.$get('/api')
        return {
            items
        }
    },
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


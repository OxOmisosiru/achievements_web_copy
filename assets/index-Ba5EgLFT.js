(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const l of d)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(d){const l={};return d.integrity&&(l.integrity=d.integrity),d.referrerPolicy&&(l.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?l.credentials="include":d.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(d){if(d.ep)return;d.ep=!0;const l=t(d);fetch(d.href,l)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div class="text-center 30px font-bold"> 夢現ようじ </div>
    <div id="achlist" class="space-y-2 max-w-md mx-auto">  </div>
  </div>
`;const e=[{id:1,name:"ヤー💪",open:!1,clear:!1,correct:"きりるもじ"},{id:2,name:"明るいポスター",open:!1,clear:!1,correct:"ほわいとあんけん"},{id:3,name:"右往左往 x 0",open:!1,clear:!1,correct:"こぴぺ"},{id:4,name:"なんか多い x 2",open:!1,clear:!1,correct:"とらんぷおおい"},{id:5,name:"次元移動 x 1/2",open:!1,clear:!1,correct:"あんけーと"},{id:6,name:"見間違い",open:!1,clear:!1,correct:"ようじがおはし"},{id:7,name:"怪レい",open:!1,clear:!1,correct:"へんなこうこく"},{id:8,name:"かぐや姫",open:!1,clear:!1,correct:"むりなんだい"},{id:9,name:"どこ行くねーん",open:!1,clear:!1,correct:"わかやま"},{id:10,name:"パラレルワールド",open:!1,clear:!1,correct:"いせかいじん"},{id:11,name:"おぉ早い早い",open:!1,clear:!1,correct:"ろくめんたい"},{id:12,name:"硬貨の穴埋め x10000",open:!1,clear:!1,correct:"しぶさわえいいち"},{id:13,name:"〒〒 x2",open:!1,clear:!1,correct:"じゅうしょにばい"},{id:14,name:"欲求満足 x5000000000000",open:!1,clear:!1,correct:"たかね"},{id:15,name:"入れ替わってるー!?",open:!1,clear:!1,correct:"あーるえる"},{id:16,name:"1本足りない",open:!1,clear:!1,correct:"さわるなきけん"},{id:17,name:"『じゅーろく!』x8",open:!1,clear:!1,correct:"きねんさつえい"},{id:18,name:"長崎迷物",open:!1,clear:!1,correct:"かみじんじゃ"},{id:19,name:"謎ファイル",open:!1,clear:!1,correct:"くりあつき"},{id:20,name:"ポストカード x1/4",open:!1,clear:!1,correct:"えーろくさいず"},{id:21,name:"ビンゴしよう",open:!1,clear:!1,correct:"びんごたいかい"},{id:22,name:"再演するの?",open:!1,clear:!1,correct:"かるいふぇす"},{id:23,name:"改名",open:!1,clear:!1,correct:"かたいなつ"},{id:24,name:"論理",open:!1,clear:!1,correct:"ひとりでかいわ"},{id:25,name:"改名2",open:!1,clear:!1,correct:"にぶんのいち"},{id:26,name:"論理2",open:!1,clear:!1,correct:"いちいあらそい"},{id:27,name:"論理3",open:!1,clear:!1,correct:"りろんぱずる"},{id:28,name:"論理4",open:!1,clear:!1,correct:"みんなわすれた"}],m=24;var o=0;function p(){localStorage.setItem("achievements_progress",JSON.stringify(e))}function x(){e.forEach(s=>{s.clear=!1,s.open=!1}),localStorage.clear()}function u(){const s=localStorage.getItem("achievements_progress");if(o=0,s)try{JSON.parse(s).forEach((i,d)=>{e[d].open=i.open,e[d].clear=i.clear});for(var c=0;c<22;c++)e[c].clear&&o++;e[22].clear&&e[24].clear&&o++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&o++}catch{console.log("Loading failed.")}}function f(){const s=document.getElementById("app");u(),s.innerHTML=`
    <div class="sticky top-0 z-10 bg-black p-2 shadow">
      <div>
        <span class="font-bold text-white text-[18px] font-dotgothic">報告完了数：</span>
        <span class="font-bold text-white text-[36px] font-montserrat">${o} / ${m}</span>
      </div>
    </div>

    <div id="7yumemono" class="mt-5 md-5 bg-white font-dotgothic text-black px-4 py-2">
      解答を送信する際は
      <span class="text-red-700 text-[20px]">その入力欄だけ開いている状態で</span>
      送信するようお願いいたします。
    </div>

    <button type="button" id="showImagebtn" class="text-[20px] mt-5 mb-5 bg-red-300 font-dotgothic text-black border px-4 py-2 rounded w-full">ルールを表示</button>
    <div id="imageoverlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
      <img src="rule.png" class="max-w-full max-h-full">
    </div>

    <button type="button" id="tweetbtn" class="text-[20px] mb-5 bg-gray-300 font-dotgothic text-black border px-4 py-2 rounded w-full">進捗を呟く</button>

    <div id="7yumemono" class="md-5 bg-white font-dotgothic text-black px-4 py-2 hidden">
      ７個の夢物を発見した！<br>以下の画像は共有自由です。
    </div>
    <img id="7img" src="seven.png" class="max-w-full md-5 hidden">

    <div id="15yumemono" class="md-5 bg-white font-dotgothic text-black px-4 py-2 hidden">
      １５個の夢物を発見した！<br>以下の画像は共有自由です。
    </div>
    <img id="15img" src="fifteen.png" class="max-w-full md-5 hidden">

    <div id="ALLyumemono" class="md-5 bg-white font-dotgothic text-black px-4 py-2 hidden">
      全ての夢物を発見した！<br>以下の画像は共有自由です。
    </div>
    <img id="ALLimg" src="complete.png" class="max-w-full md-5 hidden">
    
    <div class="mt-5 space-y-5 w-full">

      ${e.map((t,i)=>{const d=t.open,l=t.clear;if(!(i>=24)){if(i==22){var a=0;if(e[22].clear&&a++,e[24].clear&&a++,a==0)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                          bg-blue-900 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(a==1)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 50%, #1e3a8a 50%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(a==2)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black bg-green-500 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-green-100 rounded px-4 py-2">
                      <div class="w-full p-2 text-center text-black rounded text-[16px] font-dotgothic">かたいなつ / にぶんのいち</div>
                     </div>`:""}
            </div>
          `}else if(i==23){var r=0;if(e[23].clear&&r++,e[25].clear&&r++,e[26].clear&&r++,e[27].clear&&r++,r==0)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                          bg-blue-900 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(r==1)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 25%, #1e3a8a 25%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(r==2)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 50%, #1e3a8a 50%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(r==3)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 75%, #1e3a8a 75%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${i}" />
                    </div>`:""}
            </div>
          `;if(r==4)return`<div class="" data-index="${i}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black bg-green-500 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${t.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${t.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${d?`<div class="bg-green-100 rounded px-4 py-2">
                      <div class="w-full p-2 text-center text-black rounded text-[14px] font-dotgothic">ひとりでかいわ / いちいあらそい / <br>りろんぱずる / みんなわすれた</div>
                     </div>`:""}
            </div>
          `}return`
          <div class="" data-index="${i}">
            <!-- 番号 + 実績名 -->
            <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                        ${l?"bg-green-500 text-white":"bg-blue-900 text-white"}">
              <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                ${t.id}
              </div>
              <div class="flex-1 text-center font-dotgothic text-[25px]">
                ${t.name}
              </div>
            </div>

            <!-- 入力欄 -->
            ${d?`<div class="${l?"bg-green-100":"bg-white"} rounded px-4 py-2">
                    ${l?`<div class="w-full p-2 text-center text-black rounded text-[22px] font-dotgothic">${t.correct}</div>`:`<input type="text"
                                    placeholder="キーワードをひらがなで入力"
                                    class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                                    data-input-index="${i}" />`}
                  </div>`:""}
          </div>
        `}}).join("")}
      
    </div>
    
    <div class="mt-10 text-black text-[20px]">
      広告
    </div>
    <div>
      <image id="kokoku" src="nisekokoku.png" class="mt-6 transition-opacity duration-250 opacity-100">
    </div>
  `;const c=document.getElementById("kokoku");c.addEventListener("click",()=>{c.classList.remove("opacity-100"),c.classList.add("opacity-50"),setTimeout(()=>{c.src="nisekokoku_ura.png",c.classList.add("opacity-100"),c.classList.remove("opacity-50")},250)}),document.querySelectorAll("[data-index]").forEach(t=>{const i=Number(t.getAttribute("data-index"));t.addEventListener("click",()=>{e[i].open=!e[i].open,e.forEach((d,l)=>{i!=l&&(d.open=!1)}),p(),f()})}),document.querySelectorAll("[data-input-index]").forEach(t=>{const i=t,d=Number(i.getAttribute("data-input-index"));i.addEventListener("click",l=>{l.stopPropagation()}),i.addEventListener("keydown",l=>{if(l.key=="Enter"){if(t.value==e[d].correct){e[d].clear=!0,e[d].open=!1,p();var a=0;e.forEach(r=>{r.id<=22&&r.clear==!0?a++:r.id==23&&(e[22].clear&&e[24].clear&&a++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&a++)}),o=a,f()}else if(t.value=="こうかいしない")x(),f();else if(d==22){if(t.value==e[24].correct){e[24].clear=!0,e[24].open=!1,e[22].open=!1,p();var a=0;e.forEach(n=>{n.id<=22&&n.clear==!0?a++:n.id==23&&(e[22].clear&&e[24].clear&&a++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&a++)}),o=a,f()}}else if(d==23){if(t.value==e[25].correct){e[25].clear=!0,e[25].open=!1,e[23].open=!1,p();var a=0;e.forEach(n=>{n.id<=22&&n.clear==!0?a++:n.id==23&&(e[22].clear&&e[24].clear&&a++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&a++)}),o=a,f()}else if(t.value==e[26].correct){e[26].clear=!0,e[26].open=!1,e[23].open=!1,p();var a=0;e.forEach(n=>{n.id<=22&&n.clear==!0?a++:n.id==23&&(e[22].clear&&e[24].clear&&a++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&a++)}),o=a,f()}else if(t.value==e[27].correct){e[27].clear=!0,e[27].open=!1,e[23].open=!1,p();var a=0;e.forEach(n=>{n.id<=22&&n.clear==!0?a++:n.id==23&&(e[22].clear&&e[24].clear&&a++,e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&a++)}),o=a,f()}}}})}),document.getElementById("showImagebtn").addEventListener("click",()=>{document.getElementById("imageoverlay").classList.remove("hidden")}),document.getElementById("imageoverlay").addEventListener("click",()=>{document.getElementById("imageoverlay").classList.add("hidden")}),document.getElementById("tweetbtn").addEventListener("click",()=>{var t=0,i="報告済: ";e.forEach(r=>{r.id<=22&&r.clear&&(i+=r.id.toString()+",",t++)}),e[22].clear&&e[24].clear&&(t++,i+="23,"),e[23].clear&&e[25].clear&&e[26].clear&&e[27].clear&&(t++,i+="24,");var d;t==0?d="これから頑張ろう！":t==24?d="夢物コンプリート！！おめでとう！！！":d=i.slice(0,-1);var l=t.toString()+` 個の夢物を報告した！
`+d+`

#Re夢現ようじ`;const a=`https://twitter.com/intent/tweet?text=${encodeURIComponent(l)}`;window.open(a,"_blank")}),o>=7&&o<15?(document.getElementById("7yumemono").classList.remove("hidden"),document.getElementById("7img").classList.remove("hidden"),document.getElementById("15yumemono").classList.add("hidden"),document.getElementById("15img").classList.add("hidden"),document.getElementById("ALLyumemono").classList.add("hidden"),document.getElementById("ALLimg").classList.add("hidden")):o>=15&&o<24?(document.getElementById("7yumemono").classList.add("hidden"),document.getElementById("7img").classList.add("hidden"),document.getElementById("15yumemono").classList.remove("hidden"),document.getElementById("15img").classList.remove("hidden"),document.getElementById("ALLyumemono").classList.add("hidden"),document.getElementById("ALLimg").classList.add("hidden")):o==24&&(document.getElementById("7yumemono").classList.add("hidden"),document.getElementById("7img").classList.add("hidden"),document.getElementById("15yumemono").classList.add("hidden"),document.getElementById("15img").classList.add("hidden"),document.getElementById("ALLyumemono").classList.remove("hidden"),document.getElementById("ALLimg").classList.remove("hidden"))}f();

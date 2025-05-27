import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="text-center 30px font-bold"> 夢現ようじ </div>
    <div id="achlist" class="space-y-2 max-w-md mx-auto">  </div>
  </div>
`

interface achievement{
  id : number;
  name : string;
  open : boolean;
  clear : boolean;
  correct : string;
}

const achievementslist : Array<achievement> = [
  {id: 1 , name: "ヤー💪" , open: false , clear: false , correct: "きりるもじ"},
  {id: 2 , name: "明るいポスター" , open: false , clear: false , correct: "ほわいとあんけん"},
  {id: 3 , name: "右往左往 x 0" , open: false , clear: false , correct: "こぴぺ"},
  {id: 4 , name: "なんか多い x 2" , open: false , clear: false , correct: "とらんぷおおい"},
  {id: 5 , name: "次元移動 x 1/2" , open: false , clear: false , correct: "あんけーと"},
  {id: 6 , name: "見間違い" , open: false , clear: false , correct: "ようじがおはし"},
  {id: 7 , name: "怪レい" , open: false , clear: false , correct: "へんなこうこく"},
  {id: 8 , name: "かぐや姫" , open: false , clear: false , correct: "むりなんだい"},
  {id: 9 , name: "どこ行くねーん" , open: false , clear: false , correct: "わかやま"},
  {id: 10, name: "パラレルワールド" , open: false , clear: false , correct: "いせかいじん"},
  {id: 11, name: "おぉ早い早い" , open: false , clear: false , correct: "ろくめんたい"},
  {id: 12, name: "硬貨の穴埋め x10000" , open: false , clear: false , correct: "しぶさわえいいち"},
  {id: 13, name: "〒〒 x2" , open: false , clear: false , correct: "じゅうしょにばい"},
  {id: 14, name: "欲求満足 x5000000000000" , open: false , clear: false , correct: "たかね"},
  {id: 15, name: "入れ替わってるー!?" , open: false , clear: false , correct: "あーるえる"},
  {id: 16, name: "1本足りない" , open: false , clear: false , correct: "さわるなきけん"},
  {id: 17, name: "『じゅーろく!』x8" , open: false , clear: false , correct: "きねんさつえい"},
  {id: 18, name: "長崎迷物" , open: false , clear: false , correct: "かみじんじゃ"},
  {id: 19, name: "謎ファイル" , open: false , clear: false , correct: "くりあつき"},
  {id: 20, name: "ポストカード x1/4" , open: false , clear: false , correct: "えーろくさいず"},
  {id: 21, name: "ビンゴしよう" , open: false , clear: false , correct: "びんごたいかい"},
  {id: 22, name: "再演するの?" , open: false , clear: false , correct: "かるいふぇす"},
  {id: 23, name: "改名" , open: false , clear: false , correct: "かたいなつ"},
  {id: 24, name: "論理" , open: false , clear: false , correct: "ひとりでかいわ"},
  {id: 25, name: "改名2" , open: false , clear: false , correct: "にぶんのいち"},
  {id: 26, name: "論理2" , open: false , clear: false , correct: "いちいあらそい"},
  {id: 27, name: "論理3" , open: false , clear: false , correct: "りろんぱずる"},
  {id: 28, name: "論理4" , open: false , clear: false , correct: "みんなわすれた"},
];

const allarchive = 24;
var clearcount = 0;

function progress_save(){
  localStorage.setItem("achievements_progress" , JSON.stringify(achievementslist));
}

function progress_delete(){
  achievementslist.forEach((arc) => {
    arc.clear = false;
    arc.open = false;
  });
  localStorage.clear();
}

function progress_load(){
  const progressdata = localStorage.getItem("achievements_progress");
  clearcount = 0;
  if(progressdata){
    try{
      const parseddata = JSON.parse(progressdata);
      parseddata.forEach((achieve,i) => {
        achievementslist[i].open = achieve.open;
        achievementslist[i].clear = achieve.clear;
      });

      for(var i = 0;i<22;i++){
        if(achievementslist[i].clear) clearcount++;
      }
      if(achievementslist[22].clear && achievementslist[24].clear) clearcount++;
      if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount++;
    }
    catch(e){
      console.log("Loading failed.");
    }
  }
}

function main(){
  const app = document.getElementById("app")!; // 必ずHTML要素を返す(DOMのundefined)
  progress_load();
  
  app.innerHTML = `
    <div class="sticky top-0 z-10 bg-black p-2 shadow">
      <div>
        <span class="font-bold text-white text-[18px] font-dotgothic">報告完了数：</span>
        <span class="font-bold text-white text-[36px] font-montserrat">${clearcount} / ${allarchive}</span>
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

      ${achievementslist.map((ach,index) => {
        const isOpen = ach.open;
        const isClear = ach.clear;

        if(index >= 24) return;

        if(index == 22){ // 改名は2つまとめて
          var kaimei_clear = 0;
          if(achievementslist[22].clear) kaimei_clear++;
          if(achievementslist[24].clear) kaimei_clear++;
          
          if(kaimei_clear == 0){ // 改名 0%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                          bg-blue-900 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(kaimei_clear == 1){ // 改名 50%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 50%, #1e3a8a 50%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(kaimei_clear == 2){ // 改名 100%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black bg-green-500 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-green-100 rounded px-4 py-2">
                      <div class="w-full p-2 text-center text-black rounded text-[16px] font-dotgothic">かたいなつ / にぶんのいち</div>
                     </div>`
                  : ''
              }
            </div>
          `;
          }
        }
        else if(index == 23){ // 論理は4つまとめて
          var ronri_clear = 0;
          if(achievementslist[23].clear) ronri_clear++;
          if(achievementslist[25].clear) ronri_clear++;
          if(achievementslist[26].clear) ronri_clear++;
          if(achievementslist[27].clear) ronri_clear++;

          
          if(ronri_clear == 0){ // 論理 0%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                          bg-blue-900 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(ronri_clear == 1){ // 論理 25%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 25%, #1e3a8a 25%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(ronri_clear == 2){ // 論理 50%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 50%, #1e3a8a 50%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(ronri_clear == 3){ // 論理 75%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black text-white" style="background: linear-gradient(to right, #22c55e 75%, #1e3a8a 75%)">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-white rounded px-4 py-2">
                      <input type="text"
                        placeholder="キーワードをひらがなで入力"
                        class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                        data-input-index="${index}" />
                    </div>`
                  : ''
              }
            </div>
          `;
          }
          else if(ronri_clear == 4){ // 論理 100%
            return `<div class="" data-index="${index}">
              <!-- 番号 + 実績名 -->
              <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black bg-green-500 text-white">
                <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                  ${ach.id}
                </div>
                <div class="flex-1 text-center font-dotgothic text-[25px]">
                  ${ach.name}
                </div>
              </div>

              <!-- 入力欄 -->
              ${
                isOpen
                  ? `<div class="bg-green-100 rounded px-4 py-2">
                      <div class="w-full p-2 text-center text-black rounded text-[14px] font-dotgothic">ひとりでかいわ / いちいあらそい / <br>りろんぱずる / みんなわすれた</div>
                     </div>`
                  : ''
              }
            </div>
          `;
          }
        }

        return `
          <div class="" data-index="${index}">
            <!-- 番号 + 実績名 -->
            <div class="flex items-center gap-4 px-4 py-2 rounded font-bold border border-black 
                        ${isClear ? "bg-green-500 text-white" : "bg-blue-900 text-white"}">
              <div class="min-w-[3rem] font-montserrat italic text-center text-[40px]">
                ${ach.id}
              </div>
              <div class="flex-1 text-center font-dotgothic text-[25px]">
                ${ach.name}
              </div>
            </div>

            <!-- 入力欄 -->
            ${
              isOpen
                ? `<div class="${isClear ? 'bg-green-100' : 'bg-white'} rounded px-4 py-2">
                    ${
                      isClear
                        ? `<div class="w-full p-2 text-center text-black rounded text-[22px] font-dotgothic">${ach.correct}</div>`
                        : `<input type="text"
                                    placeholder="キーワードをひらがなで入力"
                                    class="w-full p-2 rounded border text-black text-[16px] font-dotgothic"
                                    data-input-index="${index}" />`
                    }
                  </div>`
                : ''
            }
          </div>
        `;

        /*
        return `
          <div class="*:flex *:flex-col *:gap-2 *:py-2 *:px-2 *:*:max-w-none *:w-full *:mx-0 *:shrink-0 *:grow *:overflow-auto rounded shadow bg-blue-500" data-index="${index}">
            <div class=""> ${arc.id} ${arc.name} </div>
            ${isOpen ? 
            `<input type="text"
            placeholder='${isClear ? `${arc.correct}` : "キーワードをひらがなで入力"}'
            class="rounded ${isClear ? "bg-green-500" : "bg-white"} text-black"
            data-input-index="${index}" />`
            : ""}
          </div>
        `;
        */
      }).join("")}
      
    </div>
    
    <div class="mt-10 text-black text-[20px]">
      広告
    </div>
    <div>
      <image id="kokoku" src="nisekokoku.png" class="mt-6 transition-opacity duration-250 opacity-100">
    </div>
  `;

  const im = document.getElementById("kokoku") as HTMLImageElement;
  im.addEventListener("click" , () => {
    im.classList.remove("opacity-100");
    im.classList.add("opacity-50");
    setTimeout(() => {
      im.src = "nisekokoku_ura.png";
      im.classList.add("opacity-100");
      im.classList.remove("opacity-50");
    } , 250);
  });
    
  

  document.querySelectorAll("[data-index]").forEach((val) => {
    const index = Number((val as HTMLElement).getAttribute("data-index"));
    val.addEventListener("click" , () => {
      achievementslist[index].open = !achievementslist[index].open;
      achievementslist.forEach((ach,idx) => {
        if(index != idx) ach.open = false;
      });
      progress_save();
      main();
    });
  });

  document.querySelectorAll("[data-input-index]").forEach((val) => {
    const input = val as HTMLInputElement;
    const index = Number(input.getAttribute("data-input-index"));
    input.addEventListener("click" , (e) => {
      e.stopPropagation();
    });
    input.addEventListener("keydown" , (ee : KeyboardEvent) => {
      if(ee.key == "Enter"){
        if((val as HTMLInputElement).value == achievementslist[index].correct){
          achievementslist[index].clear = true;
          achievementslist[index].open = false;
          progress_save();

          var clearcount_tmp = 0;
          achievementslist.forEach((arc) => {
            if(arc.id <= 22 && arc.clear == true){
                clearcount_tmp++;
              }
              else if(arc.id == 23){ // 改名と論理は全部正解で +1　なんかforEachはbreakできないので，1回だけこのループの中身を実行するようにする
                if(achievementslist[22].clear && achievementslist[24].clear) clearcount_tmp++;
                if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount_tmp++;
              }
          });

          clearcount = clearcount_tmp;

          main();
        }
        else if((val as HTMLInputElement).value == "こうかいしない"){
          progress_delete();
          main();
        }
        else if(index == 22){ // 改名
          if((val as HTMLInputElement).value == achievementslist[24].correct){ // 改名2と一致
            achievementslist[24].clear = true;
            achievementslist[24].open = false;
            achievementslist[22].open = false;
            progress_save();

            var clearcount_tmp = 0;
            achievementslist.forEach((arc) => {
              if(arc.id <= 22 && arc.clear == true){
                clearcount_tmp++;
              }
              else if(arc.id == 23){ // 改名と論理は全部正解で +1　なんかforEachはbreakできないので，1回だけこのループの中身を実行するようにする
                if(achievementslist[22].clear && achievementslist[24].clear) clearcount_tmp++;
                if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount_tmp++;
              }
            });

            clearcount = clearcount_tmp;

            main();
          }
        }
        else if(index == 23){ // 論理
          if((val as HTMLInputElement).value == achievementslist[25].correct){ // 論理2と一致
            achievementslist[25].clear = true;
            achievementslist[25].open = false;
            achievementslist[23].open = false;
            progress_save();

            var clearcount_tmp = 0;
            achievementslist.forEach((arc) => {
              if(arc.id <= 22 && arc.clear == true){
                clearcount_tmp++;
              }
              else if(arc.id == 23){ // 改名と論理は全部正解で +1
                if(achievementslist[22].clear && achievementslist[24].clear) clearcount_tmp++;
                if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount_tmp++;
              }
            });

            clearcount = clearcount_tmp;

            main();
          }
          else if((val as HTMLInputElement).value == achievementslist[26].correct){ // 改名3と一致
            achievementslist[26].clear = true;
            achievementslist[26].open = false;
            achievementslist[23].open = false;
            progress_save();

            var clearcount_tmp = 0;
            achievementslist.forEach((arc) => {
              if(arc.id <= 22 && arc.clear == true){
                clearcount_tmp++;
              }
              else if(arc.id == 23){ // 改名と論理は全部正解で +1
                if(achievementslist[22].clear && achievementslist[24].clear) clearcount_tmp++;
                if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount_tmp++;
              }
            });

            clearcount = clearcount_tmp;

            main();
          }
          else if((val as HTMLInputElement).value == achievementslist[27].correct){ // 改名4と一致
            achievementslist[27].clear = true;
            achievementslist[27].open = false;
            achievementslist[23].open = false;
            progress_save();

            var clearcount_tmp = 0;
            achievementslist.forEach((arc) => {
              if(arc.id <= 22 && arc.clear == true){
                clearcount_tmp++;
              }
              else if(arc.id == 23){ // 改名と論理は全部正解で +1
                if(achievementslist[22].clear && achievementslist[24].clear) clearcount_tmp++;
                if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear) clearcount_tmp++;
              }
            });

            clearcount = clearcount_tmp;

            main();
          }
        
        }
      }
    });
  });

  document.getElementById("showImagebtn")!.addEventListener("click" , () => {
    document.getElementById("imageoverlay")!.classList.remove("hidden");
  });
  
  document.getElementById("imageoverlay")!.addEventListener("click" , () => {
    document.getElementById("imageoverlay")!.classList.add("hidden");
  });

  document.getElementById("tweetbtn")!.addEventListener("click" , () => {
    var nowclearcount = 0;
    var detailtext = "報告済: ";
    achievementslist.forEach((ach) => {
      if(ach.id <= 22 && ach.clear){
        detailtext += ach.id.toString() + ",";
        nowclearcount++;
      }
    });
    if(achievementslist[22].clear && achievementslist[24].clear){
      nowclearcount++;
      detailtext += "23,";
    }
    if(achievementslist[23].clear && achievementslist[25].clear && achievementslist[26].clear && achievementslist[27].clear){
      nowclearcount++;
      detailtext += "24,";
    }

    var detailtext2;
    if(nowclearcount == 0){
      detailtext2 = "これから頑張ろう！";
    }
    else if(nowclearcount == 24){
      detailtext2 = "夢物コンプリート！！おめでとう！！！"
    }
    else{
      detailtext2 = detailtext.slice(0,-1);
    }

    var tweettext = nowclearcount.toString() + " 個の夢物を報告した！" + "\n" + detailtext2 + "\n\n" + "#Re夢現ようじ";
    const reqtext = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweettext)}`;
      
    window.open(reqtext , "_blank");

  });

  if(clearcount >= 7 && clearcount < 15){
    document.getElementById("7yumemono")!.classList.remove("hidden");
    document.getElementById("7img")!.classList.remove("hidden");
    document.getElementById("15yumemono")!.classList.add("hidden");
    document.getElementById("15img")!.classList.add("hidden");
    document.getElementById("ALLyumemono")!.classList.add("hidden");
    document.getElementById("ALLimg")!.classList.add("hidden");
  }
  else if(clearcount >= 15 && clearcount < 24){
    document.getElementById("7yumemono")!.classList.add("hidden");
    document.getElementById("7img")!.classList.add("hidden");
    document.getElementById("15yumemono")!.classList.remove("hidden");
    document.getElementById("15img")!.classList.remove("hidden");
    document.getElementById("ALLyumemono")!.classList.add("hidden");
    document.getElementById("ALLimg")!.classList.add("hidden");
  }
  else if(clearcount == 24){
    document.getElementById("7yumemono")!.classList.add("hidden");
    document.getElementById("7img")!.classList.add("hidden");
    document.getElementById("15yumemono")!.classList.add("hidden");
    document.getElementById("15img")!.classList.add("hidden");
    document.getElementById("ALLyumemono")!.classList.remove("hidden");
    document.getElementById("ALLimg")!.classList.remove("hidden");
  }



}

main();
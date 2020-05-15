let res = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click',function(){
  let res = ['大吉',　'中吉',　'小吉',　'末吉',　'凶'];
  let randomNum = Math.random();

  let num = Math.floor
  (randomNum * res.length);

//   console.log(res[num]);
    result.textContent = (res[num]);
});








// // html文書から
// // id
// let btn = document.getElementById('btn');
// let result = document.getElementById('result');
// ​
// // 関数名 omikuji と イベントを分離する
// ​
// ​
// // funciton 関数名(){
// ​
// // }
// ​
// function omikuji() {
//   //大吉　中吉　小吉　末吉　凶
// ​
//   //文字列は’で囲う
//   //配列はカンマで区切る
//   //[]の中に書く
//   //let resに代入
//   let res = ['大吉', '中吉', '小吉', '末吉', '凶'];
//   // 0 ~ 4までの乱数を発生させたい
// ​
//   // 組み込み関数Math関数
//   // 乱数
//   // 0 ~ 0.999999の乱数を発生せることができます
//   let randomNum = Math.random();
//   // floor 小数点を切り捨て
//   let num = Math.floor(randomNum * res.length);
// ​
//   result.textContent = res[num];
//   // console.log(res[num]);
// }
// ​
// // 第一引数（イベント名）,第二引数（無名関数もしくは関数）
// btn.addEventListener('click', omikuji);



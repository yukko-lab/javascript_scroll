//実行する機能
//const show = () => {
  //console.log('ログを表示');
//}



//上記のような関数の定義方法をアロー関数といいます。=>の部分が矢（arrow）のように見えることが名前の由来です。
//const 関数名 = () => {
  //実行内容
//}
//functionを使った書き方をすると以下のようになります。
//function show() {
  //console.log('表示します');
//}
//functionを使った書き方の方が歴史が古く、アロー関数の方が新しい書き方になります。解説書等では両方見かけることがありますので、どちらの形式も確認しておいてください。




//実行する機能
//const show = (entries) => {
  //console.log(entries[0].target);
//}
//0番目の配列のみ取得（画像が１つのため、先頭の配列のみを取得）
//要素を取得



//const show = (entries) => {
  //const keyframes = {
    //opacity: [0, 1],
    //translate: ['200px 0',0]
  //}
  //entries[0].target.animate(keyframes,400);
//}

//監視機能の設置
//const observer = new IntersectionObserver(show);


//監視対象の指示
//observer.observe(document.querySelector('#img01'));
//ログが表示されるタイミングから、Intersection Observerの機能は、ページが読まれた瞬間、要素が範囲に入った瞬間、範囲から外れた瞬間に呼び出されることがわかります。



const show01 = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0',0]
      }
      entry.target.animate(keyframes,300);

      //一度表示されたら止める
      obs.unobserve(entry.target);
    }
  });
}

const observer1 = new IntersectionObserver(show01);

//監視対象
const images1 = document.querySelectorAll('.img01');
images1.forEach(img =>{
  observer1.observe(img);
});




const show02 = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      const keyframes = {
        opacity: [0, 1],
        translate: ['0 -200px',0]
      }
      entry.target.animate(keyframes,300);

      //一度表示されたら止める
      obs.unobserve(entry.target);
    }
  });
}

const observer2 = new IntersectionObserver(show02);

//監視対象
const images2 = document.querySelectorAll('.img02');
images2.forEach(img =>{
  observer2.observe(img);
});
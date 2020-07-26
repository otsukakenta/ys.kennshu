　　// ボタンのDOM要素を取得
　　var btn = document.getElementsByClassName('btn');
　　// ボタンの個数分ループ
　　// 変数「i」に現在のループ回数が代入される
　　for (var i = btn.length - 1; i >= 0; i--) {
　　　　btnAction(btn[i],i);
　　}
　　function btnAction(btnDOM,btnId){
　　　　// 各ボタンをイベントリスナーに登録
　　　　btnDOM.addEventListener("click", function(){
　　　　// activeクラスの追加と削除
　　　　// thisは、クリックされたオブジェクト
　　　　this.classList.toggle('active');
　　　　// クリックされていないボタンにactiveがついていたら外す
　　　　for (var i = btn.length - 1; i >= 0; i--) {
　　　　　　if(btnId !== i){
　　　　　　　　if(btn[i].classList.contains('active')){
　　　　　　　　　　btn[i].classList.remove('active');
　　　　　　　　}
　　　　　　}
　　　　}
　　})
}
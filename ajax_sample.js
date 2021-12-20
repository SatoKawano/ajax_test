// let number = 0;
// let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
// const button = document.getElementById('btn');
// const titleArea = document.getElementById("title");
// const contentArea = document.getElementById("content");
// const videoArea = document.getElementById("video");

// $(function() {

// function getData() {
//   // ajax.jsonからデータを取得する処理を記述
//   $.ajax('ajax.json', {
//     type: 'GET',
//     // error: function(xhr, status, errorThrown) {
//     //   console.log(xhr, status, errorThrown);
//     // },
//   })
// };

// function changeVideo() {
//   // ボタンがクリックされた際の処理を記述
//   $("#btn").click(function(){
//     // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
//     if(data.length === 0){
//       getData().then((ajax_data) => {
//         data = ajax_data;
//       })
//     }else{
//       videoArea.html(data[number].url);
//       titleArea.html(data[number].title);
//       contentArea.html(data[number].content);
//       number == 2 ? number = 0 : number++
//     }
//   });
// };

// window.onload = changeVideo;

  let number = 0;
  let data = [];
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");

  function getData() {
    return $.ajax('ajax.json',{
      type: 'GET',
    })
  };

  function changeVideoprocess(){
    videoArea.attr('src', data[number].url);
    titleArea.html(data[number].title);
    contentArea.html(data[number].content);
    number == 2 ? number = 0 : number++    
  }  

  function changeVideo() {
    button.click(function(){
      if(data.length === 0){
        getData().then((ajadata) => { //--4getData呼び出し　Promiseがreturnされる
          data = ajadata;
          changeVideoprocess();
        })
      }else{
        changeVideoprocess();
      }
    });
  };

  window.onload = changeVideo;JavaScript Ajaxシリーズ課題

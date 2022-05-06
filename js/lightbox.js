// 読み込みの確認
console.log('load');
const testBtn = document.querySelector('.test-button')

// モーダルウィンドウの取得
const mwWrapper = document.querySelector('.mw-wrapper');
// ブラウザサイズの取得
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
// imgの取得
const mwImage = document.getElementById('mw-image')
// date-mwの取得
const dateMw = document.querySelectorAll('[date-modalwindow]')

function clickEvent(){
    mwWrapper.style.width = `${windowInnerWidth}px`;    // モーダルウィンドウへブラウザサイズを適用
    mwWrapper.style.height = `${windowInnerHeight}px`;
    mwWrapper.style.opacity = '0.8';    // opacityの変更
}

function getImage(element){
    console.log('click')
    // img要素からimg-urlを取得する
    let imageSorce = element.path[0].src;
    // 取得したimg-urlをmw-container→imgにネストする
    mwImage.src = imageSorce
    console.log(imageSorce,mwImage)
};

// 再度クリックによってモーダルウィンドウを閉じる

function clickCloseEvent(){
    mwWrapper.style.width = `0px`;    // モーダルウィンドウへブラウザサイズを適用
    mwWrapper.style.height = `0px`;
    mwWrapper.style.opacity = '0'; 
}

// addEventListener
testBtn.addEventListener('click', clickEvent)
mwWrapper.addEventListener('click',clickCloseEvent)
dateMw.forEach(element => {
    element.addEventListener('click', getImage)
});
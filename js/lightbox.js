// 読み込みの確認
console.log('load');
const testBtn = document.querySelector('.test-button')

// モーダルウィンドウの取得
const mwOverlay = document.querySelector('.mw-overlay');
const mwContainer = document.querySelector('.mw-container');
// ブラウザサイズの取得
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
// imgの取得
const mwImage = document.getElementById('mw-image')
// date-mwの取得
const dateMw = document.querySelectorAll('[date-modalwindow]')

function clickEvent(){
    mwOverlay.style.width = `${windowInnerWidth}px`;    // モーダルウィンドウへブラウザサイズを適用
    mwOverlay.style.height = `${windowInnerHeight}px`;
    mwOverlay.style.opacity = '0.8';    // opacityの変更

    mwContainer.style.width = `${windowInnerWidth}px`;
    mwContainer.style.height = `${windowInnerHeight}px`
}

function getImage(element){
    // img要素からimg-urlを取得する
    let imageSorce = element.path[0].src;
    // 取得したimg-urlをmw-container→imgにネストする
    mwImage.src = imageSorce
    console.log()
    if(windowInnerWidth < element.path[0].naturalWidth){
        mwImage.width = windowInnerWidth*0.8;
    }
};

// 再度クリックによってモーダルウィンドウを閉じる

function clickCloseEvent(){
    mwOverlay.style.width = `0px`;    // モーダルウィンドウへブラウザサイズを適用
    mwOverlay.style.height = `0px`;
    mwOverlay.style.opacity = '0';
    
    mwImage.src = '';
    mwImage.style.opacity = '0';

    mwContainer.style.width = `0px`;
    mwContainer.style.height = `0px`;
}

// addEventListener
mwOverlay.addEventListener('click',clickCloseEvent)
dateMw.forEach(element => {
    element.addEventListener('click', getImage)
    element.addEventListener('click', clickEvent)
});

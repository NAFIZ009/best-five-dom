let playerName=[];
function selectPlayer(e) {
    playerName.unshift(e.target.parentElement.children[0].innerText);
}
[...document.getElementsByClassName('player-selection-btn')].forEach(element => {
    element.addEventListener('click', (e) => {
        selectPlayer(e);
        addPlayerName(e);
    });
});
function addPlayerName(e) {
    let parent=document.getElementById('player-container');
    if([...parent.children].some(element => element.getAttribute('id')=="noticeOfList")){
        parent.firstElementChild.remove();
    }
    if (playerName.length<=5) {
        let newOne=document.createElement('li');
        newOne.setAttribute('class','mt-3');
        newOne.innerText=playerName[0];
        parent.appendChild(newOne);
        e.target.setAttribute('disabled',true);
    }else{
        alert('you have added 5 player')
    }

}
function playerPriceCal() {
    // if(typeof document.getElementById('playerPriceIndex')=='string'){
    //     alert('give a valid price in')
    // }
    document.getElementById('priceRes').innerText=parseInt()
}
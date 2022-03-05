// const let var
// STATEMENT




const menimDivim = document.getElementById('qutu')
const menimButtonum = document.querySelector('button')
// console.log(menimDivim)




menimButtonum.onclick = yaziniYazdir


// DRY
function yaziniYazdir() {
    menimDivim.innerText = "JS Derslerine Xosh Geldik!"
}


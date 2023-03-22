import {add, subtract} from './utils/calculator'

function getOperands(){
    const n1 = parseInt(document.getElementById('txtN1').value)
    const n2 = parseInt(document.getElementById('txtN2').value)
    return { n1, n2}
}

function onBtnAddClick(){
    const {n1, n2} = getOperands()
    const result = add(n1, n2)
    document.getElementById('divResult').innerText = result
}

function onBtnSubtractClick(){
    const { n1, n2 } = getOperands()
    const result = subtract(n1, n2)
    document.getElementById('divResult').innerText = result
}

function onDocumentLoad(){
    var btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', onBtnAddClick)
    var btnSubtract = document.getElementById('btnSubtract');
    btnSubtract.addEventListener('click', onBtnSubtractClick)
}
window.addEventListener('load', onDocumentLoad)
/* 
50kw đầu = 50 * 500d
50Kw kế = 50 * 650d
100Kw kế = 100 * 850d
150Kw kế = 150 * 1100d
Còn lại = used * 1300d
*/
// Khai bao giá Kw
 var tongTien = 0
const F50 = 500
const S50 = 650
const S100 = 850
const S150 = 1100
const LEFT = 1300

function fCalc50(used){
    tongTien = used * F50
    return tongTien
}
function sCalc50(used){
    tongTien = (50 * F50 ) + (used * S50)
    return tongTien
}
function sCalc100(used){
    tongTien = (50 * F50 ) + (50 * S50) + (used * S100)
    return tongTien
}
function sCalc150(used){
    tongTien = (50 * F50 ) + (50 * S50) + (100 * S100) + (used * S150)
    return tongTien
}
function Remain(used){
    tongTien = (50 * F50 ) + (50 * S50) + (100 * S100) + (150 * S150) + (used * LEFT)
    return tongTien
}


var btn_click = document.getElementById("BtnClick")
BtnClick.onclick = function () {
    //IN
    //Lấy dữ liệu
    var used = Number(document.getElementById("Used").value)

    //Process
    if(used < 0){
        alert("Hãy nhập lại")
    }else if(used<=50){
        fCalc50(used)
    } else if(used<=100){
        sCalc50(used)
    }else if(used<=200){
        sCalc100(used)
    }else if(used<=350){
        sCalc150(used)
    }else{
        Remain(used)
    }
    
    //Convert vnd
    const config = { style: 'currency', currency: 'VND'}
    const formated = new Intl.NumberFormat('vi-VN', config).format(tongTien);
    //OUT
    var output = document.getElementById("output")
    output.innerHTML = '<p class="alert alert-primary"><strong>Số tiền tiêu thụ là ' + formated +'</strong></p>';    
}
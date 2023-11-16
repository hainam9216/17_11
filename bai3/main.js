
var TienPhaiTra = 0
var ThuNhapChiuThue = 0

// Tính thu nhập chịu thế

function CalcThuNhapChiuThue(TongThuNhap, soNg) {
    ThuNhapChiuThue = TongThuNhap - 4 - soNg * 1.6
    return ThuNhapChiuThue
}
//Tính thuế suất
function ThueDen60(ThuNhapChiuThue) {
    const T60 = 0.05
    TienPhaiTra = ThuNhapChiuThue * 0.05
    return TienPhaiTra
}
function ThueDen120(ThuNhapChiuThue) {
    const T120 = 0.1
    TienPhaiTra = ThuNhapChiuThue * 0.1
    return TienPhaiTra
}
function ThueDen210(ThuNhapChiuThue) {
    const T210 = 0.15
    TienPhaiTra = ThuNhapChiuThue * 0.15
    return TienPhaiTra
}
function ThueDen384(ThuNhapChiuThue) {
    const T384 = 0.2
    TienPhaiTra = ThuNhapChiuThue * 0.20
    return TienPhaiTra
}
function ThueDen624(ThuNhapChiuThue) {
    const T624 = 0.25
    TienPhaiTra = ThuNhapChiuThue * 0.25
    return TienPhaiTra
}
function ThueDen960(ThuNhapChiuThue) {
    const T960 = 0.30
    TienPhaiTra = ThuNhapChiuThue * 0.30
    return TienPhaiTra
}
function ThueTren960(ThuNhapChiuThue) {
    const Ov960 = 0.35
    TienPhaiTra = ThuNhapChiuThue * 0.35
    return TienPhaiTra
}

var btn_click = document.getElementById("BtnClick")
BtnClick.onclick = function () {
    //IN
    //Lấy dữ liệu
    var TongThuNhap = Number(document.getElementById("TongThuNhap").value)
    var soNg = Number(document.getElementById("soNg").value)
    TongThuNhap /=1000000
    //Process
    //Tinh Thu nhập chịu thuế
    CalcThuNhapChiuThue(TongThuNhap, soNg)


    //Tính thuế suất
    if (ThuNhapChiuThue <= 60) {
        ThueDen60(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue <= 120) {
        ThueDen120(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue <= 210) {
        ThueDen210(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue <= 384) {
        ThueDen384(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue <= 624) {
        ThueDen624(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue <= 960) {
        ThueDen960(ThuNhapChiuThue)
    } else if (ThuNhapChiuThue > 960) {
        ThueTren960(ThuNhapChiuThue)
    }

    //Convert vnd
    TienPhaiTra *=1000000
    const config = { style: 'currency', currency: 'VND' }
    const formated = new Intl.NumberFormat('vi-VN', config).format(TienPhaiTra);
    //OUT
    var output = document.getElementById("output")
    output.innerHTML = '<p class="alert alert-primary"><strong>Số tiền phải trả là ' + formated + '</strong></p>';
}
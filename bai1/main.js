/* 
Yêu cầu: Nhập điểm chuẩn, Nhập điểm 3 môn thi, Nhập khu vực ưu tiên, Nhập đối tượng dự thi
Trúng tuyển: !=0 , >=điểm chuẩn
Tổng kết = Tổng điểm + Điểm ưu tiên
Điểm ưu tiên: 
Khu vực ưu tiên A:2 B:1 c:0.5
Đối tượng: 1:2.5 2:1.5 3:1
*/


var btn_click = document.getElementById("BtnClick")
BtnClick.onclick = function () {
    //IN
    //Lấy dữ liệu
    var DiemChuan = Number(document.getElementById("DiemChuan").value)
    var DiemThi1 = Number(document.getElementById("DiemThi1").value)
    var DiemThi2 = Number(document.getElementById("DiemThi2").value)
    var DiemThi3 = Number(document.getElementById("DiemThi3").value)
    //Khu vực
    var kvx = document.getElementById("kvx").checked
    var kva = document.getElementById("kv1").checked
    var kvb = document.getElementById("kv2").checked
    var kvc = document.getElementById("kv3").checked
    // Đối tượng
    var dt0 = document.getElementById("dt0").checked
    var dt1 = document.getElementById("dt1").checked
    var dt2 = document.getElementById("dt2").checked
    var dt3 = document.getElementById("dt3").checked

    //Process

    //Xét khu vực
    var Dkv = 0
    if (kvx === true) {
        Dkv = 0
    } else if (kva === true) {
        Dkv = 2
    } else if (kvb === true) {
        Dkv = 1
    } else if (kvc === true) {
        Dkv = 0.5
    }
    //Xét đối tượng
    var Ddt = 0
    if (dt0 === true) {
        Ddt =0
    } else if (dt1 === true) {
        Ddt = 2.5
    } else if (dt2 === true) {
        Ddt = 1.5
    } else if (dt3 === true) {
        Ddt = 1
    }
    //Xét trúng tuyển
    var diemTongKet = DiemThi1 + DiemThi2 + DiemThi3 + Ddt + Dkv
    var KqXet = false
    if (DiemThi1 === 0 || DiemThi2 === 0 || DiemThi3 === 0) {
        KqXet = false
    } else if (diemTongKet >= DiemChuan) {
        KqXet = true
    }

    //OUT
    var output = document.getElementById("output")
    if (KqXet === false) {
        output.innerHTML = '<p class="alert alert-danger"><strong>' + diemTongKet +' điểm</strong> Bạn không đủ điểm để trúng tuyển.</p>';
    }
    else if (KqXet === true) {
        output.innerHTML = '<p class="alert alert-success"><strong>'+ diemTongKet +' điểm</strong> Bạn đã trúng tuyển.</p>';
    }
}
/* 
Nhà dân:
• Phí xử lý hóa đơn: 4.5$
• Phí dịch vụ cơ bản: 20.5$
• Thuê kênh cao cấp: 7.5$ / kênh
Doanh nghiệp
• Phí xử lý hóa đơn: 15$
• Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối
• Thuê kênh cao cấp: 50$ / kênh
*/

//Giao diện
//Nếu chọn Doanh nghiệp ô nhập số kết nối sẽ hiện lên, nếu chọn nhà dân thì ô nhập kết nối sẽ ẩn đi hoặc disabled

function showHideKếtNối() {
    //Lấy dữ liệu
    var NhaDan = document.getElementById("NhaDan").checked;
    var DoanhNghiep = document.getElementById("DoanhNghiep").checked;
    var soKN = document.getElementById("soKN");
    if (DoanhNghiep) {
        KN.style.display = "block"; // Hiển thị ô nhập kết nối
    } else if (NhaDan) {
        KN.style.display = "none"; // Ẩn ô nhập kết nối
    }
}
// Tạo hành động khi chọn loại KN
document.getElementById("NhaDan").addEventListener("change", showHideKếtNối);
document.getElementById("DoanhNghiep").addEventListener("change", showHideKếtNối);

//Tính tiền cáp
var BtnClick = document.getElementById("BtnClick")
BtnClick.onclick = function(){
    var TienCap = 0
    var soKCaoCap = document.getElementById("KCaoCap").value
    var soKn = document.getElementById("soKn").value
    if(NhaDan.checked){
        var XLhoadon = 4.5
        var Dv = 20.5
        var KenhCaoCap = 7.5
        TienCap = XLhoadon + Dv + KenhCaoCap * soKCaoCap
    } else if(DoanhNghiep.checked){
        var XLhoadon = 15
        var f10Dv = 75
        var a10Dv = 5
        var KenhCaoCap = 50
        if(soKn <=10){
            TienCap = XLhoadon + f10Dv + KenhCaoCap * soKCaoCap
        } else if(soKn>10){
            TienCap = XLhoadon + f10Dv + a10Dv*soKn + KenhCaoCap * soKCaoCap
        }
    }

    //convert USD
    const config = { style: 'currency', currency: 'USD' }
    const formated = new Intl.NumberFormat('vi-VN', config).format(TienCap);
    output.innerHTML = '<p class="alert alert-primary"><strong>Số tiền cáp phải trả là ' + formated + '</strong></p>';
}


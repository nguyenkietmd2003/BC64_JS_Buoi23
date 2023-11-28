document.getElementById("click1").onclick = function () {
  var soNgayLam = document.getElementById("input1").value * 1;
  document.getElementById("output1").innerHTML = soNgayLam * 100000;
};
document.getElementById("click2").onclick = function () {
  var soThuNhat = document.getElementById("input2a").value * 1;
  var soThuHai = document.getElementById("input2b").value * 1;
  var soThuBa = document.getElementById("input2c").value * 1;
  var soThuBon = document.getElementById("input2d").value * 1;
  var soThuNam = document.getElementById("input2e").value * 1;
  document.getElementById("output2").innerHTML =
    (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam) / 5;
};
document.getElementById("click3").onclick = function () {
  var soTien = document.getElementById("input3").value * 1;
  document.getElementById("output3").innerHTML = soTien * 23.5 + " VND";
};
document.getElementById("click4").onclick = function () {
  var chieuDai = document.getElementById("input4a").value * 1;
  var chieuRong = document.getElementById("input4b").value * 1;
  document.getElementById("output4a").innerHTML = `Diện Tích : ${
    chieuDai * chieuRong
  }`;
  document.getElementById("output4b").innerHTML = `Chu Vi : ${
    (chieuDai + chieuRong) * 2
  }`;
};
document.getElementById("click5").onclick = function () {
  var soCoHaiChuSo = document.getElementById("input5").value * 1;
  var soDonVi = soCoHaiChuSo % 10;
  var soHangChuc = (soCoHaiChuSo - soDonVi) / 10;
  document.getElementById("output5").innerHTML = soDonVi + soHangChuc;
};

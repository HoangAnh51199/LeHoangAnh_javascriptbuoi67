var listNumber = [];
var listNumber2 = [];



function getIdSo(id) {

  return document.getElementById(id).value * 1;

};

function inNoiDung(id, noiDung) {// dung chung khi get id footer

  document.getElementById(id).innerHTML = noiDung;

};

/**
 * Them so
 */
function themSo() {
  //lấy thông tin từ user
  var num = getIdSo("txtNumber");
  let number = parseInt(num);
  //Tập hợp các số được thêm vào danh sách
  //them phan tu vao mang
  listNumber.push(number);

  var result = "Danh sách số đã thêm: ";
  //In các giá trị của mảng ra ngoài UI #listNumber
  for (var i = 0; i < listNumber.length; i++) {
    result += listNumber[i] + ", ";
  }

  // document.getElementById("listNumber").innerHTML = result;

  return inNoiDung('listNumber', result);
}

function tongSoDuong() {
  var total = 0;

  //Tập hợp các số được thêm vào danh sách
  for (var i = 0; i < listNumber.length; i++)
    if (listNumber[i] > 0) {
      total = total + listNumber[i];
    }
  //in ra

  var result = "tổng các số chẵn: " + total;
  // document.getElementById("tongSoDuong").innerHTML = result;
  return inNoiDung('tongSoDuong', result);
}

function demSoDuong() {
  var dem = 0;

  //Tập hợp các số được thêm vào danh sách
  for (var i = 0; i < listNumber.length; i++)
    if (listNumber[i] > 0) {
      dem++;
      var result = "đểm các số dương : " + dem;

  // document.getElementById("demSoDuong").innerHTML = result;
  return inNoiDung('demSoDuong', result);
    }else {
      return -1;
    }

  //in ra

  
}



function soNhoNhat() {
  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  let min = listNumber[0];
  let min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
  for (let i = 1; i < listNumber.length; ++i) {
    if (min > listNumber[i]) {
      //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
      min = listNumber[i];
      min_index = i;
    }
  }

  var result = "số nhỏ nhất: " + min;

  // document.getElementById("soNhoNhat").innerHTML = result;
  return inNoiDung('soNhoNhat', result);
}

function soDuongNhoNhat() {
  let positiveArr = [];
  for (var i = 0; i < listNumber.length; i++)
    if (listNumber[i] < 0) {
      var result = "không có số dương";
    } else if (listNumber[i] > 0) {
      positiveArr.push(listNumber[i]);
    }

  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  let min = positiveArr[0];
  let min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
  for (let i = 1; i < positiveArr.length; ++i) {
    if (min > positiveArr[i]) {
      //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
      min = positiveArr[i];
      min_index = i;
    }
  }
  var result =
    "- Mảng số dương:  " +
    positiveArr +
    "<br>" +
    "- số dương nhỏ nhất : " +
    min;

  // document.getElementById("soDuongNhoNhat").innerHTML = result;
  return inNoiDung('soDuongNhoNhat', result);
}

function soChanCuoi() {
  let lastPositive = null;
  //Tập hợp các số được thêm vào danh sách
  for (var i = listNumber.length - 1; i >= 0; i--)
    if (listNumber[i]  % 2 == 0) {
      lastPositive = listNumber[i];
      
  var result = "số chẵn cuối cùng : " + lastPositive;
  // document.getElementById("soChanCuoi").innerHTML = result;
  return inNoiDung('soChanCuoi', result);
      
    }else{

      return -1;
    }


  //tạo một biến `lastPositive` để lưu trữ giá trị của số dương cuối cùng. 
  // duyệt qua từng phần tử của mảng `arr` từ cuối lên đầu và kiểm tra nếu phần tử đó lớn hơn 0, thì chúng ta lưu trữ giá trị đó vào biến `lastPositive` và thoát khỏi vòng lặp.
  // Cuối cùng, chúng ta in ra giá trị của biến `lastPositive` để kiểm tra kết quả.
}


function swap() {
  var pos1 = document.getElementById("txtswap1").value * 1;
  var pos2 = document.getElementById("txtswap2").value * 1;


  // let pos1 = 1;
  // let pos2 = 3;


  let temp = listNumber[pos1];
  listNumber[pos1] = listNumber[pos2];
  listNumber[pos2] = temp;


  var result = "Mảng sau khi đổi chỗ giá trị tại vị trí " + pos1 + " và " + pos2 + ": " + listNumber;


  // document.getElementById("swap").innerHTML = result
  return inNoiDung('swap', result);
}


function sxTangDan() {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        // hoan vi
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  var result = "sắp xếp tăng dần : " + listNumber;
  // document.getElementById("sxTangDan").innerHTML = result;
  return inNoiDung('sxTangDan', result);
}

function themSoThuc() {
  //lấy thông tin từ user
  var number2 = getIdSo("txtNumber2");

  //Tập hợp các số được thêm vào danh sách
  //them phan tu vao mang
  listNumber2.push(number2);

  var result = "Danh sách số thực đã thêm: ";
  //In các giá trị của mảng ra ngoài UI #listNumber
  for (var i = 0; i < listNumber2.length; i++) {
    result += listNumber2[i] + ", ";
  }

  // document.getElementById("listNumberSoThuc").innerHTML = result;
  return inNoiDung('listNumberSoThuc', result);
}

/**
 * Tong so chan
 */
function demSoNguyen() {
  var count = 0;
  for (var i = 0; i < listNumber2.length; i++) {
    if (Number.isInteger(listNumber2[i])) {
      count++;
      var result = " đếm số nguyên tố là :" + count + "</br>";

    } else {
     var result = " không có số nguyên tố <br/>";
    }
    
  }
  // document.getElementById("demSoNguyen").innerHTML = result;
  return inNoiDung('demSoNguyen', result);
}



function soSanhSLDuongAm() {
  /**
   * 0. Tạo biến tích luỹ total = 0
   * 1. Duyệt mảng listNumber
   * 2. Kiểm tra phần tử có giá trị là chẵn? (listNumber[i] % 2 === 0)
   *    => True => Tích luỹ phẩn tử cộng dồn vào biến total
   * 3. Show kết quả #tongSoChan
   */

  //Kiểm tra listNumber có phần tử không?
  if (listNumber2.length === 0) {
    alert("Vui long nhap so!");
    return;
  }

  var total = 0;

  for (var i = 0; i < listNumber2.length; i++) {
    if (listNumber2[i] > 0) {
      total++;
    }
  }

  var result = "Có " + total + " số dương: ";
  // document.getElementById("tongSoDuong").innerHTML = result;
  inNoiDung('tongSoDuong', result);
  
  /**
   * 0. Tạo biến dem = 0
   * 1. Duyệt mảng listNumber
   * 2. Kiểm tra phần tử có phải là số âm? (listNumber[i] < 0)
   *     True => Tăng biến dem 1 đơn vị
   * 3. Show kết quả #demSoAm
   */

  var dem = 0;

  for (var i = 0; i < listNumber2.length; i++) {
    if (listNumber2[i] < 0) {
      dem++;
    }
  }

  var result = "Có " + dem + " số âm";
  document.getElementById("tongSoAm").innerHTML = result;
  inNoiDung('tongSoAm', result);
  

  if (total > dem) {
    var result2 = "số dương nhiều hơn số âm : " + total + " > " + dem;
    // document.getElementById("soSanhDuongAm").innerHTML = result2;
    inNoiDung('soSanhDuongAm', result2);
  } else if (total < dem) {
    var result2 = "số âm nhiều hơn số dương: " + dem + " > " + total;
    // document.getElementById("soSanhDuongAm").innerHTML = result2;
    inNoiDung('soSanhDuongAm', result2);
  } else {
    var result2 =
      "số lượng số dương và số âm bằng nhau : " + total + " = " + dem;
    // document.getElementById("soSanhDuongAm").innerHTML = result2;
    inNoiDung('soSanhDuongAm', result2);
  }
}

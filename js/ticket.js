$('#header').load('../html/header.html');
$('#carousel').load('../html/carousel.html');
$('#footer').load('../html/footer.html');



$("form").submit(function(e) {
  e.preventDefault();
  var ticketQuantity = $("#ticketQuantity").val();
  var date = $("#date").val();
  // 假設每張門票的價格為100元
  var ticketPrice = 100;
  // 假設有一個折扣碼為"DISCOUNT20"，可以獲得20%的折扣
  var discountCode = "DISCOUNT20";
  var discountRate = 0.2; // 20%的折扣率

  // 計算價格
  var totalPrice = ticketPrice * ticketQuantity;
  if (date == "2023-04-13") { // 假設2023年4月13日為特別價格日，門票價格打7折
    totalPrice *= 0.7;
  }
  if ($("#discountCode").val() == discountCode) {
    totalPrice *= (1 - discountRate); // 應用折扣碼
  }

  // 顯示結果
  $(".price").text("總價格：" + totalPrice + "元");
});

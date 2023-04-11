$('#footer').load('../html/footer.html');

const bookingBtn = document.querySelector('#bookingBtn'); // 取得 Booking 按鈕元素
bookingBtn.addEventListener('click', () => { // 綁定 click 事件
  window.location.href = 'booking.html'; // 點擊時跳轉到 booking.html 頁面
});
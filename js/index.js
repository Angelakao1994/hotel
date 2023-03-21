/* "hamburger"-->在每個頁面的連結上加上了一個onclick屬性，當用戶點擊
這些連結時，會調用goToPage()函數。goToPage()函數的作用是將當前頁面的
URL設置為我們要跳轉到的URL，這樣就能在當前頁面中跳轉，而不是加載到新頁面。*/

function goToPage(url) {
    window.location.href = url;
  }

  $(document).ready(function() {
    $('.nav-link').click(function(e) {
      e.preventDefault(); // 阻止默認行為
      var href = $(this).attr('href'); // 獲取目標 URL
      window.location.href = href; // 跳轉到目標 URL
    });
  });


  // 捲軸滾動時檢查是否顯示回到頂部按鈕
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#back-to-top').removeClass('d-none');
    } else {
      $('#back-to-top').addClass('d-none');
    }
  });
  
  // 當回到頂部按鈕被點擊時，捲動頁面到頂部
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
</script>
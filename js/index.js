/* "hamburger"-->在每個頁面的連結上加上了一個onclick屬性，當用戶點擊
這些連結時，會調用goToPage()函數。goToPage()函數的作用是將當前頁面的
URL設置為我們要跳轉到的URL，這樣就能在當前頁面中跳轉，而不是加載到新頁面。*/

function goToPage(url) {
    window.location.href = url;
  }
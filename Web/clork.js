function getCurrentTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const clork=`${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
  }
  setInterval(getCurrentTime, 1000);
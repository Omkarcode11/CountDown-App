setInterval(() => {
  let date = new Date();
  document.getElementById('p1').innerHTML = `Time ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
// setInterval(display,1000)
function display() {
  submitbutton.style.backgroundColor = 'green';
  var myInterval = setInterval(() => {
    let date = new Date();
    let x = new Date(document.getElementById('inputdate').value);
    let currDate = date.getTime();
    let inputDate = new Date(x).getTime();
    let diff = inputDate - currDate;
    let diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    let diffHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let diffMinute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let diffSecond = Math.floor((diff % (1000 * 60)) / 1000);
    if (diffSecond < 0) {
      diffSecond = 0;
    }
    // console.log(diffDate, diffHour, diffMinute, diffSecond);
    document.getElementById('date').innerText = String(diffDay);
    document.getElementById('hour').innerText = String(diffHour);
    document.getElementById('minute').innerText = String(diffMinute);
    document.getElementById('second').innerText = String(diffSecond);
    if (diffDay == 0 && diffHour == 0 && diffMinute == 0 && diffSecond == 0) {
      clearInterval(myInterval);
      document.getElementById('complete').innerText = 'Time Over';
    }
  }, 1000);
}

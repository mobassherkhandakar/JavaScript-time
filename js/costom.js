function ghori() {
    var time = new Date(),
    ghonta = time.getHours(),
    minit = time.getMinutes(),
    sec = time.getUTCSeconds(),
    dinrat = ' PM';
    var boshor = time.getFullYear();
    mas = time.getMonth(),
    din = time.getDate();

    //meridiam
    if (ghonta < 12) {
        dinrat = ' AM'
    }
    //24 to 12
    if (ghonta > 12) {
        ghonta = ghonta - 12;
    }
    //0 = 12
    if (ghonta == 0) {
        ghonta = 12
    }
    // adding  0
    if( minit < 10 ) {
        minit = '0' +minit;
    }
    if( sec < 10 ) {
        sec = '0' +sec;
    }
    if( ghonta < 10 ) {
        ghonta = '0' +ghonta;
    }
document.getElementById('clook').innerHTML = ghonta + ':' + minit + ':' + sec + dinrat;
document.getElementById('date').innerHTML = din + '/' + mas + '/' + boshor;
}
setInterval(ghori, 1000);
var count = 0;
function Funtion(x) {
    x.classList.toggle("change");
    if (count % 2 == 0) {
        document.getElementsByClassName('header-navigator-mb')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('header-navigator-mb')[0].style.display = 'none';
    }
    count++;
}

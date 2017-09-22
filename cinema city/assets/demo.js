var progr = document.getElementById('progr');
var progrDropDown = document.getElementById('down');

progrDropDown.addEventListener('mouseover', function () {
    progr.style.display = 'inline';
    second.style.visibility = 'visible';
    progrDropDown.style.backgroundColor = 'darkblue';
    progrDropDown.style.borderTop = '5px solid lightskyblue';

}, false);

progr.addEventListener('mouseout', function () {
    progr.style.display = 'none';
    second.style.visibility = 'hidden';
    progrDropDown.style.backgroundColor = 'black';
    progrDropDown.style.borderTop = 'none';
}, false);

progr.addEventListener('mousemove', function () {
    progr.style.display = 'inline';
    second.style.visibility = 'visible';

}, false);


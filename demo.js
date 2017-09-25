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


var searchBar = document.getElementById('mainSearch');
searchBar.addEventListener('keyup', function () {
    var searchDropDown = document.getElementById('dropSearchMenu');
    console.log(cinema);
    var searchValue = (this.value).toLowerCase();
    console.log(searchValue);
    if (this.value.length >= 1) {
   searchDropDown.style.visibility = 'visible';   
        cinema.forEach(function (x) {
        
            if (x.title.toLowerCase().indexOf(searchValue) != -1){
    
                console.log(x.title);
      var movieOption = searchDropDown.appendChild(document.createElement('li'));
      movieOption.setAttribute('class','movieMatches'); 
     movieOption.appendChild(document.createElement('a')).setAttribute('href','');
     movieOption.querySelector('a').innerText= x.title + ` (${x.genre})`;

}
        }, this);
    } else {
        searchDropDown.style.visibility = 'hidden';
    }
}
    , false);



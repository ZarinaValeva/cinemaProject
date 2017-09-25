function movieConstr (title, genre, mins, language, premier, catRating, actors, country, description){
        this.title = title;
        this.genre = genre;
        this.mins = mins;
        this.language = language;
        this.premier = premier;
        this.catRating = catRating;
        this.actors = actors;
        this.country = country;
        this.description = description;
};

var cinema = [];
var kingsMan1 = new movieConstr ('Kingsman1', 'action', 120, 'english', '12/09/2017', 'C', 'Taaron Eagorton', 'England','asdasdasdasdasdadqweqew');
var kingsMan2 = new movieConstr ('Edikvosi', 'action', 120, 'english', '12/09/2017', 'C', 'Taaron Eagorton', 'England','asdasdasdasdasdadqweqew');
var kingsMan3 = new movieConstr ('Zxzxzb', 'action', 120, 'english', '12/09/2017', 'C', 'Taaron Eagorton', 'England','asdasdasdasdasdadqweqew');

cinema.push(kingsMan1);
cinema.push(kingsMan2);
cinema.push(kingsMan3);



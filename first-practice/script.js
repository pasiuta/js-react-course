'use strict'
let numberOfFilms=prompt('how many films do you see?','')
const personalMovieDB={
count:numberOfFilms,
movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a=prompt('one of the last films which you saw?',''),
    b=prompt('how much would you rate it?'),
    c=prompt('one of the last films which you saw?',''),
    d=prompt('how much would you rate it?');
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB)
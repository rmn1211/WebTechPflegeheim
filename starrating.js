function changeRating(n){
    var i;
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");
    var star5 = document.getElementById("star5");
    var stars = [star1, star2, star3, star4, star5]
    for(i = 0; i < n; i++){
        stars[i].classList.add("star-checked");
    }
    while(i < 5){
        stars[i].classList.remove("star-checked");
        i++;
    }
}
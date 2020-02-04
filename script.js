$(document).ready(function(){
    var friends = ['Karen','Linda','Amy','Susan','Debbie'];
    var weapons = ['axe','gun','boomerang','cheetos','banana','cat','squirrel','pillow','butter knife','button','tissue','rope','butter','hydroflask','gummy bears','papercut','hairbrush','red panda','blueberry muffin','cheese'];
    var locations = ['bathroom','bedroom','hallway','den','mudroom','study room','foyer','kitchen','back deck','basement'];

    for (var count = 1; count < 101; count++) {
        $('body').append(`<h3 class = "${count}">Accusation ${count}</h3>`);
        $(`.${count}`).click(accusation(count));
    }
    
    //console.log(weapons.length)
    
    function accusation(count) {
        var friend = friends[(count-1) % 5];
        //console.log(friend);
        var weapon = weapons[(count-1) % 20];
        //console.log(weapon);
        var location = locations[(count-1) % 10];
        //console.log(location);
        function murderAlert() {
            alert(`Accusation ${count}: I accuse ${friend}, with the ${weapon} in the ${location}!`)
        }
        return murderAlert;
    } 

})
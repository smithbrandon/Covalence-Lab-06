var people = ["Murdock","B.A.","Templeton","Hannibal","Col. Decker"];
var places = ["Swimming Pool","Broom Closet","Library","Georgia Dome","City of Atlantis","alley of Hell's Kitchen","cavern of Mt. Olympus","cardBoard Box","blimp","glove compartment"];
var things = ["helmet","soda can","newspaper","bread","sidewalk","bookmark","zipper","shoe lace","wallet","cinder block","shawl","towel","brocolli","lace","pen","tire swing","book","rubberband","bed","swiss army knife"];



for (var i=1; i<101;i++){
    var person = Math.floor(Math.random() * 5); 
    var place = Math.floor(Math.random() * 10);
    var thing = Math.floor(Math.random() * 20);
    var h = document.createElement('h3');
    h.innerText = 'Accusation ' + i;
    h.addEventListener('click', function(per, pl, th){
        alert("Accusation " + this + ": I accuse " + people[per] + ", with the " + things[th] + " in the " + places[pl] + "!");
    }.bind(i, person, place, thing));
    document.getElementById('container').appendChild(h);
}
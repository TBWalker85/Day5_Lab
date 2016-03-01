$(document).ready(function(){
        $("#keyboard-upper-container").hide();
        var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                'Too ato too nOt enot one totA not anot tOO aNot', 
                'oat itain oat tain nate eate tea anne inant nean', 
                'itant eate anot eat nato inate eat anot tain eat', 
                'nee ene ate ite tent tiet ent ine ene ete ene ate'];

        $('#words').append(sentences[0]);
        $(document).keyup(function(e){
            $('#block').animate({left: '+=50px'}, 10000);
        });
});
       
$(this).on('keydown',function(e){
        if (e.which == 16) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
} 
});

$(this).on('keyup',function(e){
        if (e.which == 16) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show(); 
        }
});

$(this).on('keypress', function(){
    var keyID = event.which;
    $("#" + keyID).css({
        "background-color": "blue"
        });
});

$(this).on('keyup', function(){
    $('.key').css({
        "background-color": "#f5f5f5"
        });
});


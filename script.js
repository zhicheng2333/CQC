$(".can").click(function(){
    $(".Nope").hide();
    $(".stpe-one").hide();
    $(".step-onehalftwo").hide();
    $(".stpe-two").hide();
    $(".stpe-twohalf").hide();
    $(".good-end").hide();
    $(".tp").hide();
    
});
$(".go").click(function() {
    var start =$(".start-one").val();
    if(start ==='Yes'){
        hideone();
    }
     if(start ==='No'){
        why();
}
});
function hideone(){
    $(".start").hide();
    $(".Nope").hide();
    $("stpe-one").show();
    $(".step-onehalftwo").hide();
    $(".good-end").hide();
    
}
function why(){
$(".start").hide();
$(".Nope").show();
}


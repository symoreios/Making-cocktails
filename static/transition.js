function display_transition(){
    $("#transition-page-btn").click(function(){
        window.location.assign("/" + "quiz/" + "1")
    })
    /*
    $("#transition-page-btn-review").click(function(){
        window.location.assign("/" + "review")
    })*/
}

$(document).ready(function(){
    
    display_transition();

});
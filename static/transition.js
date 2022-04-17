function display_transition(){
    $("#transition-page-btn").click(function(){
        window.location.assign("/" + "quiz/" + "1")
    })
}

$(document).ready(function(){
    
    display_transition();

});
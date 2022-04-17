function display_home(){
    $("#home-page-btn").click(function(){
        window.location.assign("/" + "learn/" + "1")
    })
}

$(document).ready(function(){
    
    display_home();

});
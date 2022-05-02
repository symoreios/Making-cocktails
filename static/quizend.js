function display_quizend(){
    let correct_number = old_score
    $(".header-content").append(" <br> Final Score: " + correct_number + "/15")
    $("#quizend-page-btn").click(function(){
        window.location.assign("/")
    })
}

$(document).ready(function(){
    
    display_quizend();

});
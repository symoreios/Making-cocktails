function load_quiz(){
    let row_for_everything = $("<div class='row'>");
    let question_col = $("<div class='col-5'>");
    let image_col = $("<div class='col-7'>");
    $(row_for_everything).append(question_col);
    $(row_for_everything).append(image_col);
    let quiz_head = $(
      "<div class='row'>  <div class='col-10'>" +
        "Gin Rickey Quiz (" +
        question["id"] +
        "/7) " + "" +
        "</div> <div class=col-2> Current Score: " +
        correct +
        "/15" +
        "</div> </div>"
    );
    $("#quiz_header").append(quiz_head);
    let quiz_pic = $(
      "<div class='col-10'>  <img src='" + question["image"] + "'> </div>  "
    );
    $(image_col).append(quiz_pic);
    let quiz_question = $(
      "<div class='row'>  <div class='col-12'>" +
        question["question"] +
        "</div> </div>"
    );
    $("#quiz_quest").append(quiz_question);
    $.each(responses["response_list"], function (i, answer) {
      let clickable_response = $(
        "<div class='response_container'> <div class='row'> <div class='col-6'>  <button class='response_button' input type='button'>" +
          answer +
          "</button> </div> </div>"
      );

      $(question_col).append(clickable_response);
      $(clickable_response).click(function (e) {
        $(".review_button").remove();
        $(".feedback").remove();
        let user_attempt = answer;
        if (user_attempt == responses["answer"]) {
          rightAnswer();
          
        } else {
          wrongAnswer();
        }
      });
    });
    $("#overall_row").append(row_for_everything);

    let quiz_next_button = $(
      "<div class='next'> <button class='next_button' input type='button'> Next </button>"
    );

    $(quiz_next_button).click(function (e) {
      let next_number = question["next_quiz"];
      window.location.href = "/quiz/" + next_number;
    });

    if (question["next_quiz"] === "8") {
      $(quiz_next_button).click(function (e) {
        window.location.href = "/quizend";
      });
    }

    function rightAnswer() {
        //reloading the page should work here but it won't add the buttons
        $("#quiz_header").append("<div class='feedback'> Correct! </div>");
        $(question_col).append(quiz_next_button);
      $.ajax({
        type: "POST",
        url: "/track_answers",
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(correct),

        success: function (correct_answer) {
          let correct = correct_answer;
        // window.location.href = "/quiz/" + question["id"];
        },
        error: function (request, status, error) {
          console.log("Error");
          console.log(request);
          console.log(status);
          console.log(error);
        },
      });
      
    }
    function wrongAnswer() {
      //  window.location.href = "/quiz/" + question["id"];
      $("#quiz_header").append("<div class='feedback'> Incorrect! </div>");
      let quiz_review_button =
        "<div class='review_button'> <button class='review' input type='button'> Review </button>";
      $("#quiz_header").append(quiz_review_button);
      $(question_col).append(quiz_next_button);

      $(quiz_review_button).click(function (e) {
        window.location.href = "/learn/1";
      });
      
    }
}
$(document).ready(function(){
    
    load_quiz();

});

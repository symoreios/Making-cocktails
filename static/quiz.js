function load_quiz(){
  let quiz_next_button = $(
    "<div class='next'> <button class='btn btn-outline-warning my-2 my-sm-0 btn-lg' input type='button'>Next</button>"
  );

  $(quiz_next_button).click(function (e) {
    let next_number = question["next_quiz"];
    if(next_number == "8"){
      window.location.href = "/quizend";
    }
    else{
    window.location.href = "/quiz/" + next_number;
  }
});
  //first is If statement for drag and drop images
  if(question["id"] == "6"){
    let count = 0
    let quiz_head = $(
      "<div class='row'>  <div class='col-12'>" +
        "Gin Rickey Quiz (" +
        question["id"] +
        "/7) " + "" +
        "</div> "
    );
    $("#quiz_header").append(quiz_head);
    let quiz_question = $(
      "<div class='row'>  <div class='col-12'>" +
        "Assemble a gin rickey by dragging the correct ingredients to the cup below!" +
        "</div> </div>"
    );
    $("#quiz_quest").append(quiz_question);
    let row_for_all = $("<div class='row'>")

    let row_for_pictures = $("<div class='row'>")
    let row_for_drop = $("<div class='row'> <div class= 'col-12'>" + "Drag ingredients here! </div> </div>")
    $.each(responses["image_list"], function (i, answer) {
      let class_for_pic = $("<div class='drag_able col-2'> <p> <img src='" + answer + "'> </p> </div> ")
      $(row_for_pictures).append(class_for_pic)
    });
    $(row_for_all).append(row_for_pictures)
    $("#drag_here").append(row_for_drop)
    $("#overall_row").append(row_for_all)
    $(".drag_able").draggable({
      cursor: "move",
        revert: "valid"
    });
    $("#drag_here").droppable({
      accept: ".drag_able",
      classes:{
        "ui-droppable-active": "boxMouseOver",
            "ui-droppable-hover": "highlight"      
      },
      drop: function(event, ui){
        let name = ui.draggable.find("img").attr("src");
        if(jQuery.inArray(name, responses["answer"]) !== -1){
          $(".feedback").remove()
          $(".drop_counter").remove()
          count +=1
          $("#drag_here").prepend("<div class='drop_counter'>"  + count + "/6")
          $(row_for_drop).append("<div class = 'col-3'> <img src='" + name + "'> </div>")
          $(ui.draggable).remove()
          $("#quiz_header").append("<div class='feedback'> Correct! </div>");
          $("#drag_here").append(quiz_next_button)
        }
      }
    })
  }
  //this is for moving the steps into the correct order 
    else if (question["id"]==7){
    let counter = 0
    let correct_counter = 1
    let row_for_everything = $("<div class='row'>");
    let question_col = $("<div class='col-7'>");
    let drop_here_col = $("<div class='col-5'>");
    $(row_for_everything).append(question_col);
    $(row_for_everything).append(drop_here_col);
    let quiz_head = $(
      "<div class='row'>  <div class='col-10'>" +
        "Gin Rickey Quiz (" +
        question["id"] +
        "/7) " + "" +
        "</div> "
    );
    $("#quiz_header").append(quiz_head);
    
    
    $("#first_row").append("1. ")
    $("#second_row").append("2. ")
    $("#third_row").append("3. ")
    $("#fourth_row").append("4. ")
    $("#first_row").droppable({
      accept: ".drag_able",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#first_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        $("#droppable_spots").append(quiz_next_button)
        console.log(counter)
        console.log(correct_counter)
        if(name == "Fill a highball glass with ice."){
          correct_counter +=1
        }
      }
    },
    )
    $("#second_row").droppable({
      accept: ".drag_able",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#second_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        console.log(counter)
        console.log(correct_counter)
        if(name == "Pour the gin and lime juice over the ice."){
          correct_counter +=1
        }
        
      }
    }
    ),
    $("#third_row").droppable({
      accept: ".drag_able",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#third_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        console.log(counter)
        console.log(correct_counter)
        if(name == "Top with club soda."){
          correct_counter +=1
        }
        
      }
    },
    )
    $("#fourth_row").droppable({
      accept: ".drag_able",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#fourth_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        console.log(counter)
        console.log(correct_counter)
        if(name == "Garnish with a lime wedge."){
          correct_counter +=1
        }       
      }
    },
    )
    if(counter == 4){
      if (correct_counter == 4){
        console.log("nice")
      }
    }
    
  
    let quiz_question = $(
      "<div class='row'>  <div class='col-12'>" +
        question["question"] +
        "</div> </div>"
    );
    $("#quiz_quest").append(quiz_question);
    $.each(responses["response_list"], function (i, answer) {
      $("#draggable_questions").append("<div class='drag_able col-10'>" + answer);
    })  
 //   $(row_for_everything).prepend(question_col)
  //  $("#overall_row").append(row_for_everything);
    $(".drag_able").draggable({
      cursor: "move",
      revert: "valid",
  });
  }
  //all other questions
   else{
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
        "</div> "
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
        "<div class='response_container'> <button class='btn btn-outline-warning my-2 my-sm-0 btn-lg' input type='button'>" +
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

    // let quiz_next_button = $(
    //   "<div class='next'> <button class='next_button' input type='button'> Next </button>"
    // );

    // $(quiz_next_button).click(function (e) {
    //   let next_number = question["next_quiz"];
    //   window.location.href = "/quiz/" + next_number;
    // });

    if (question["next_quiz"] === "8") {
      $(quiz_next_button).click(function (e) {
        window.location.href = "/quizend";
      });
    }

    function rightAnswer() {
        $("#quiz_header").append("<div class='feedback' id='feedback-green'> Correct! </div>");
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
      $("#quiz_header").append("<div class='feedback' id='feedback-red'> Incorrect! </div>");
      let quiz_review_button = $('<button />').attr({
        'title': 'quiz review button',
        'class': 'btn btn-outline-warning my-2 my-sm-0',
      })
      $(quiz_review_button).append("Review")
      let quiz_review_class = $("<div class='review_button'>")
      $(quiz_review_class).append(quiz_review_button)
      $("#quiz_header").append(quiz_review_class);
      $(question_col).append(quiz_next_button);

      $(quiz_review_button).click(function (e) {
        window.location.href = "/learn/1";
      });
      
    }
  }
    
}
$(document).ready(function(){
    
    load_quiz();

});
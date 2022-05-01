function load_quiz(){
  function rightAnswer() {
    $("#quiz_header").append("<div class='feedback' id='feedback-green'> Correct! </div>");
    // $(question_col).append(quiz_next_button);
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
    $("#first_row").remove()
     $("#second_row").remove()
     $("#third_row").remove()
     $("#fourth_row").remove()
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
    let row_for_drop = $("<div class='row'> <div class= 'col-12'>" +  "Drag ingredients here! </div> </div>")
    $.each(responses["image_list"], function (i, answer) {
      let class_for_pic = $("<div class='drag_able col-2'> <p> <img src='" + answer + "'> </p> </div> ")
      $(row_for_pictures).append(class_for_pic)
    });
    $(row_for_all).append(row_for_pictures)
    $("#drag_here").append(row_for_drop)
    $("#overall_row").append(row_for_all)
    $(".drag_able").draggable({
        cursor: "move",
        revert: "valid", //this should be invalid though
        stack:".drag_able,#drag_here"
    });
    $("#drag_here").droppable({
      accept: ".drag_able",
      /*accept: function(ele){
        console.log(ele.find("img").attr("src"));
        let eleName = ele.find("img").attr("src")
        if(jQuery.inArray(eleName, responses["answer"]) !== -1){
          console.log("accepted")
          return true;
        }else{
          console.log("rejected")
          return false;
        }
      },*/
      classes:{
        "ui-droppable-active": "boxMouseOver",
        "ui-droppable-hover": "highlight"      
      },
      drop: function(event, ui){
        // remove alert message
        let name = ui.draggable.find("img").attr("src");
        if(jQuery.inArray(name, responses["answer"]) !== -1){
          $(".feedback").remove()
          $(".drop_counter").remove()
          count +=1
          $("#drag_here").prepend("<div class='drop_counter'>"  + count + "/6")
          $(row_for_drop).append("<div class = 'col-3'> <img src='" + name + "'> </div>")
          $(ui.draggable).remove()
          $("#drag_here").append(quiz_next_button)
          rightAnswer()
        }else{
          console.log(name +" doesn't belong here");
          // add alert message
        }
      }
    })
  }
  //this is for moving the steps into the correct order 
    else if (question["id"]==7){
      $("#drag_here").remove()
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
      accept: ".drag_me",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#first_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        $("#droppable_spots").append(quiz_next_button)
        if(name == "Fill a highball glass with ice."){
          correct_counter +=1
          if(correct_counter > 1){
            $("#feedback-green").remove()
          }
          rightAnswer()
        }
        else{
          $("#feedback-green").remove()
        }
      }
    },
    )
    $("#second_row").droppable({
      accept: ".drag_me",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#second_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        $("#droppable_spots").append(quiz_next_button)
        if(name == "Pour the gin and lime juice over the ice."){
          correct_counter +=1
          if(correct_counter > 1){
            $("#feedback-green").remove()
          }
          rightAnswer()
        }
        else{
          $("#feedback-green").remove()
        }
        
      }
    }
    ),
    $("#third_row").droppable({
      accept: ".drag_me",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#third_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        $("#droppable_spots").append(quiz_next_button)
        if(name == "Top with club soda."){
          correct_counter +=1
          if(correct_counter > 1){
            $("#feedback-green").remove()
          }
          rightAnswer()
        }
        else{
          $("#feedback-green").remove()
        }
        
      }
    },
    )
    $("#fourth_row").droppable({
      accept: ".drag_me",
      drop: function(event, ui){
        let name = ui.draggable.text();
        $("#fourth_row").append(name)
        $(ui.draggable).remove()
        counter +=1
        $("#droppable_spots").append(quiz_next_button)
        if(name == "Garnish with a lime wedge."){
          correct_counter +=1
          if(correct_counter > 1){
            $("#feedback-green").remove()
          }
          rightAnswer()
        }       
        else{
          $("#feedback-green").remove()
        }
      }
    },
    )
    // if(counter >= 1){
    //   $("#droppable_spots").append(quiz_next_button)
    // }
    
  
    let quiz_question = $(
      "<div class='row'>  <div class='col-12'> " +
        question["question"] +
        "</div> </div>"
    );
    $("#quiz_quest").append(quiz_question);
    $.each(responses["response_list"], function (i, answer) {
      $("#draggable_questions").append("<div class='drag_me col-10'>" + answer);
    })  
 //   $(row_for_everything).prepend(question_col)
  //  $("#overall_row").append(row_for_everything);
    $(".drag_me").draggable({
      cursor: "move",
      revert: "valid",
  });
  }
  //all other questions
   else{
     $("#drag_here").remove()
     $("#first_row").remove()
     $("#second_row").remove()
     $("#third_row").remove()
     $("#fourth_row").remove()
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
        "<div class='response_container'> <button class='btn btn-outline-secondary my-2 my-sm-0 btn-lg active'  input type='button'>" +
          answer +
          "</button> </div> </div>"
      );

      $(question_col).append(clickable_response);
      $(clickable_response).click(function (e) {
        $(".review_button").remove();
        $(".feedback").remove();
        $(clickable_response).find("button").addClass("disabled");
        $(clickable_response).find("button").prop('disabled',true);
        $(clickable_response).find("button").removeClass("active");
        console.log(clickable_response.find("button"));
        let user_attempt = answer;
        $(question_col).append(quiz_next_button);
        if (user_attempt == responses["answer"]) {
          rightAnswer();
          
        } else {
          wrongAnswer();
        }
      });
    });
    $("#overall_row").append(row_for_everything);

    

    if (question["next_quiz"] === "8") {
      $(quiz_next_button).click(function (e) {
        window.location.href = "/quizend";
      });
    }

    // function rightAnswer() {
    //     $("#quiz_header").append("<div class='feedback' id='feedback-green'> Correct! </div>");
    //     $(question_col).append(quiz_next_button);
    //   $.ajax({
    //     type: "POST",
    //     url: "/track_answers",
    //     cache: false,
    //     dataType: "json",
    //     contentType: "application/json; charset=utf-8",
    //     data: JSON.stringify(correct),

    //     success: function (correct_answer) {
    //       let correct = correct_answer;
    //     },
    //     error: function (request, status, error) {
    //       console.log("Error");
    //       console.log(request);
    //       console.log(status);
    //       console.log(error);
    //     },
    //   });
      
    //}
    function wrongAnswer() {
      $("#quiz_correct").append("<span class='feedback' id='feedback-red'> Incorrect! </span>");
      let quiz_review_button = $('<button />').attr({
        'title': 'quiz review button',
        'class': 'btn btn-outline-warning my-2 my-sm-0',
      })
      $(quiz_review_button).append("Review")
      let quiz_review_class = $("<span class='review_button'>")
      $(quiz_review_class).append(quiz_review_button)
      $("#quiz_correct").append(quiz_review_class);
      $(question_col).append(quiz_next_button);

      $(quiz_review_button).click(function (e) {
        //window.location.href = "/learn/1";
        window.open(`/learn/${question["review_link"]}`, "_blank") || window.location.replace(`/learn/${question["review_link"]}`);
        //this should open a review specifc for each quiz question
        //this won't work if the user has an ad-block running on browser
      });
      
    }
  }
    
}
$(document).ready(function(){
    
    load_quiz();

});
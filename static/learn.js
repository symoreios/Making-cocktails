function display_learn_data(data) {


    $("#header-content").append(data["title"])

    let progress_number = data["progress"].replace('%', '')
    console.log(progress_number)

    let progress_bar = $('<div>').attr({
        "class": "progress-bar bg-warning progress-bar-striped progress-bar-animated",
        "role": "progressbar",
        "style": "width: " + data["progress"],
        "aria-valuenow": progress_number,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
    })

    $(progress_bar).append(data["progress"])

    $(".progress").append(progress_bar)


    $("#learn-content").append("<ul class=`bulletpoints`>")
    $.each(data["content"], function(i, datum){

        let single_content = $("<li>" + datum + "</li>")
        if(!datum){
            single_content = $("<hr>")
        }
        $("#learn-content").append(single_content)

    });
    $("#learn-content").append("</ul>")

    // we would probably want to adjust this later since this only accounts for images and we might use video clips
    // an if conditional could be userful to deciding which media we are rendering
    let media = $('<img />').attr({
        'src': data["media"],
        'alt': 'learing content media',
        'title': 'learning content media',
        'class': 'img-fluid learn-media-1',
    })

    $("#learn-media").append(media)

    if (data["media"].includes("youtube")) {
        $("#learn-media").empty()

        let video = $('<iframe />').attr({
            'width': '525',
            'height': '525',
            'src': data["media"],
            'title': 'YouTube video player',
            'frameborder': '0',
            'allow': 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

        })

        $("#learn-media").append(video)

    }

    let now_id = data["id"]

    let prev_id = parseInt(now_id) - 1
    let prev_id_str = prev_id.toString()

    let prev_link = $('<a />').attr({
        href: "/" + "learn/" + prev_id_str
    })

    if (now_id==="1") {
        $(prev_link).empty()
        prev_link = $('<a />').attr({
            href: "/"
        })

    }

    if (now_id==="3") {
        $(prev_link).empty()
        prev_link = $('<a />').attr({
            href: "/ingredientsoverview"
        })

    }

    let prev_button = $('<button />').attr({
        'title': 'prev button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })

    $(prev_button).append("<div>Prev</div>")
    $(prev_link).append(prev_button)
    $("#learn-prev-button").append(prev_link)


    let next_id = parseInt(now_id) + 1
    let next_id_str = next_id.toString()

    let next_link = $('<a />').attr({
        href: "/" + "learn/" + next_id_str
    })

    if (now_id==="2") {
        $(next_link).empty()
        next_link = $('<a />').attr({
            href: "/ingredientsoverview"
        })

    }

    if (now_id==="12") {
        $(next_link).empty()
        next_link = $('<a />').attr({
            href: "/" + "transition"
        })

    }
        

    let next_button = $('<button />').attr({
        'title': 'next button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })

    $(next_button).append("<div>Next</div>")
    $(next_link).append(next_button)
    $("#learn-next-button").append(next_link)

}

$(document).ready(function(){
    
    display_learn_data(learn_data);

});
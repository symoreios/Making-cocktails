function display_learn_data(data) {


    $("#header-content").append(data["title"])


    $.each(data["content"], function(i, datum){

        let single_content = $("<div>" + datum + "</div>")

        $("#learn-content").append(single_content)

    });

    // we would probably want to adjust this later since this only accounts for images and we might use video clips
    // an if conditional could be userful to deciding which media we are rendering
    let media = $('<img />').attr({
        'src': data["media"],
        'alt': 'learing content media',
        'title': 'learning content media',
        'class': 'img-fluid learn-media-1',
    })

    $("#learn-media").append(media)

    let now_id = data["id"]
    let next_id = parseInt(now_id) + 1
    let next_id_str = next_id.toString()

    let next_link = $('<a />').attr({
        href: "/" + "learn/" + next_id_str
    })

    if (now_id==="11") {
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
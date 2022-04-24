function display_overview_data(data) {


    $(".header-content").append("Key Ingredients Overview")

    let row_1 = $("<div class='overview-sing-row'>")
    let button_1 = $('<button />').attr({
        'title': 'ingredient button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })
    let button_link_1 = $('<a />').attr({
        href: "/learn/3"
    })
    let button_media_1 = $('<img />').attr({
        'src': data[3]["media"],
        'alt': 'overview media',
        'title': 'learning content media',
        'class': 'img-fluid overview-media-1',
    })
    $(button_1).append(button_media_1)
    $(button_1).append(data[3]["title"])
    $(button_link_1).append(button_1)
    $(row_1).append(button_link_1)

    let row_2 = $("<div class='overview-sing-row'>")
    let button_2 = $('<button />').attr({
        'title': 'ingredient button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })
    let button_link_2 = $('<a />').attr({
        href: "/learn/4"
    })
    let button_media_2 = $('<img />').attr({
        'src': data[4]["media"],
        'alt': 'overview media',
        'title': 'learning content media',
        'class': 'img-fluid overview-media-1',
    })
    $(button_2).append(button_media_2)
    $(button_2).append(data[4]["title"])
    $(button_link_2).append(button_2)
    $(row_2).append(button_link_2)

    let row_3 = $("<div class='overview-sing-row'>")
    let button_3 = $('<button />').attr({
        'title': 'ingredient button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })
    let button_link_3 = $('<a />').attr({
        href: "/learn/5"
    })
    let button_media_3 = $('<img />').attr({
        'src': data[5]["media"],
        'alt': 'overview media',
        'title': 'learning content media',
        'class': 'img-fluid overview-media-1',
    })
    $(button_3).append(button_media_3)
    $(button_3).append(data[5]["title"])
    $(button_link_3).append(button_3)
    $(row_3).append(button_link_3)
    

    let next_link = $('<a />').attr({
        href: "/learn/3"
    })
    let next_button = $('<button />').attr({
        'title': 'next button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })
    $(next_button).append("<div>Next</div>")
    $(next_link).append(next_button)
    $(".overview-next-button").append(next_link)
    
    let prev_link = $('<a />').attr({
        href: "/learn/2"
    })
    let prev_button = $('<button />').attr({
        'title': 'prev button',
        'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
    })
    $(prev_button).append("<div>Prev</div>")
    $(prev_link).append(prev_button)
    $(".overview-prev-button").append(prev_link)


    let media = $('<img />').attr({
        'src': data[7]["media"],
        'alt': 'learing content media',
        'title': 'learning content media',
        'class': 'img-fluid learn-media-1',
    })

    $(".overview-media").append(media)


    $(".overview-content").append(row_1)
    $(".overview-content").append(row_2)
    $(".overview-content").append(row_3)

}

$(document).ready(function(){
    
    display_overview_data(data);

});
function display_overview_data(data,review) {

     for(let i = 0; i < review.length; i++) {
        let row_1 = $("<div class='row'>")
        let button_1 = $('<button />').attr({
            'title': 'review button',
            'class': 'btn btn-outline-warning my-2 my-sm-0 btn-lg',
        })
        let button_link_1 = $('<a />').attr({
            href: "/learn/"+review[i]
        })
        let button_media_1 = $('<img />').attr({
            'src': data[review[i]]["media"],
            'alt': 'overview media',
            'title': 'learning content media',
            'class': 'img-fluid overview-media-1',
        })
        $(button_1).append(button_media_1)
        $(button_1).append(data[review[i]]["title"])
        $(button_link_1).append(button_1)
        $(row_1).append(button_link_1)
        $(".row-specific").append(row_1)
    }
}

$(document).ready(function(){
    console.log("done before")
    display_overview_data(data,review_file);
    console.log("Done -ovter")

});
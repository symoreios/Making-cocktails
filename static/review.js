function display_overview_data(data,review) {

     for(let i = 0; i < review.length; i++) {
        let row_1 = $("<div class='col-md-6'>")
        let button_1 = $('<button />').attr({
            'title': 'review button',
            'class': 'btn btn-outline-warning btn-lg review-tag',
        })
        let button_link_1 = $('<a />').attr({
            href: "/learn/"+review[i]
        })
        if (data[review[i]]["media"].includes("youtube")) {

            let button_media_1 = $('<img />').attr({
                'src': data[review[i]]["picture"],
                'alt': 'overview media',
                'title': 'learning content media',
                'class': 'img-fluid overview-media-1',
            })
            $(button_1).append(button_media_1)
        }else{
    
            let button_media_1 = $('<img />').attr({
                'src': data[review[i]]["media"],
                'alt': 'overview media',
                'title': 'learning content media',
                'class': 'img-fluid overview-media-1',
            })
            $(button_1).append(button_media_1)
        }
        $(button_1).append(data[review[i]]["title"])
        $(button_link_1).append(button_1)
        $(row_1).append(button_link_1)
        $(".review-specific").append(row_1)
    }
}

$(document).ready(function(){
    display_overview_data(data,review_file);
    $("#review-page-btn-quiz").click(function(){
        window.location.assign("/" + "quiz/" + "1")
    })
});
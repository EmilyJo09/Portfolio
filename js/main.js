$(document).ready(function(){
    
    //Dynamically resize thumbnails
    columnWidth = $(window).innerWidth()/12;
    
    if ($(window).width() < $(window).height()) {
        
        thumbWidth = columnWidth*7;
        
        $('.thumb').each(function(){
            $(this).width(thumbWidth);
        });
        
    } else {
        
        thumbWidth = columnWidth*4;
        
        if (thumbWidth < 450) {
            
            $('.thumb').each(function(){
                $(this).width(thumbWidth);
            });
            
        };
    };
    
    // Add smooth scrolling to all links
    $(".js-scroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        };
    });
});

function displayCaption(){
    
    if ($(window).innerWidth() > 1.9*$(window).innerHeight()) {
        var id = this.id;
        if (id == "hogan"){
            $("#caption-1")
                .hide()
                .html("<p class='caption'>Mapbox link to create tile set showing a map based on the TV Series Hogan's Heroes.</p>")
                .slideDown(250);
        } else if (id == "nps-thumb") {
            $("#caption-1")
                .hide()
                .html("<p class='caption'>Map showing the timeline of established National Parks throughout the United States with detailed information on each Park.</p>")
                .slideDown(250);
        } else if (id =="BikeRoute") {
            $("#caption-2")
                .hide()
                .html("<p class='caption'>Map showing a bike route through Breweries in Wisconsin if traveling about 100 miles per day.</p>")
                .slideDown(250);
        } else if (id =="cwd-thumb") {
            $("#caption-2")
                .hide()
                .html("<p class='caption'>A map explaining Chronic Wasting Disease and local information for recycle sites.</p>")
                .slideDown(250);
        } else if (id =="dog-thumb") {
            $("#caption-3")
                .hide()
                .html("<p class='caption'>Final Masters Project on rescue and shelter dogs through the U.S.</p>")
                .slideDown(250);
        } else {
            clearCaption
        };
    };
};

function clearCaption(){
    $("#caption-1").empty();
    $("#caption-2").empty();
    $("#caption-3").empty();
    $("#caption-4").empty();
    $("#caption-5").empty();
    $("#caption-6").empty();
    $("#caption-7").empty();
};

$(".thumb").hover(displayCaption,clearCaption)
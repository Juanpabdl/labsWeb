$(document).ready(function() {

// Start your code from here

    var food = ["burger","pizza","taco","salad","sandwich","banana","fruit"]    

    function populateButtons(arrayToUse,classToAdd,placeHolder){
        $(placeHolder).empty();

        for(var i=0; i<arrayToUse.length; i++){
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type",arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(placeHolder).append(a);
        }
    }

    $("#food-buttons").on("click",".food-button", function(){
        $("#foods").empty()
        var search = $(this).attr("data-type")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=HqpbOsQIigDKEY4Tc88XlTtqVmjK5o2A";

        $.ajax({url:queryURL})
        .then(function(response){

            var results = response.data

            for(var i=0; i<results.length; i++){
                var foodDiv = $("<div class \"food-item\">")
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating)

                var animated = results[i].images.fixed_height.url
                var still = results[i].images.fixed_height_still.url

                var foodImage = $("<img>")
                foodImage.attr("src",still)
                foodImage.attr("data-still",still)
                foodImage.attr("data-animate",animated)
                foodImage.attr("data-isAnimated","false")
                foodImage.addClass("food-image")

                foodDiv.append(p)
                foodDiv.append(foodImage)

                $("#foods").append(foodDiv)

            }
        })
    })

    $(".food-image").on("click",function(){
        //Registro del evento para la imagen
        var state = $(this).getAttribute("data-isAnimated")
        if (state == "false") {
            $(this).attr("src", $(this).attr("data-animate"))
            %(this).attr("data-isAnimated","true");
        } else {
            $(this).attr("src", $(this).attr("data-still"))
            %(this).attr("data-isAnimated","false");
        }
        /*if(state == "false"){
            $(this).attr("src",$(this).attr("data-animate"))
            $(this).attr("data-isAnimated","true")
        } else {
            $(this).attr("src", $(this).attr("data-still"))
            %(this).attr("data-isAnimated","false");
        }*/
    })
    
    $("#add-food").on("click",function(e){
        e.preventDefault()
        var newFood = $("#food-input").val()
        food.push(newFood)
        populateButtons(food,"food-button","#food-buttons")
        $("#food-input").val("")
    })

    populateButtons(food,"food-button","#food-buttons")

});


    var searchGif = function(topic){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=3beSyajujhQaOG00jBHXEyvZ0FvdofPU";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(queryURL);

          console.log(response);
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#gifs-appear-here").prepend(animalDiv);
          }
        });
    }


    $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=3beSyajujhQaOG00jBHXEyvZ0FvdofPU";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(queryURL);

          console.log(response);
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#gifs-appear-here").prepend(animalDiv);
          }
        });
    });
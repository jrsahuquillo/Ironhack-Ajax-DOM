$(document).ready(function(){

  function showCharacters (response){
    console.log("Success!");
    console.log(response);

    var charactersArray = response;
    charactersArray.forEach(function(theCharacter){
      var html = "<li>" + theCharacter.name + "</li>";
      $('.js-character-list').append(html);
    });

}


    function showCharactersPost (response){
      console.log("Success!");
      console.log(response);

        var html = "<li>" + response.name + "</li>";
        $('.js-character-list').append(html);

  }

  function handleError (error) {
    console.log("Error!");
    console.log(error.responseText);

  }

// GET DATA
  $('.js-fetch-characters').on('click', function(){

    $.ajax({
      type:"GET",
      url:"https://ironhack-characters.herokuapp.com/characters",
      success: showCharacters,
      error: handleError
    });

  });

// POST DATA

  $('form').on('submit', function(event){
    event.preventDefault(); //stops the form submit reloading

    var data = {
      "name": $("#name").val(),
      "occupation": $("#occupation").val(),
      "debt": $("#debt").val(),
      "weapon": $("#weapon").val()
    };

    $.ajax({
      type:"POST",
      url:"https://ironhack-characters.herokuapp.com/characters",
      data: data,
      success: showCharactersPost,
      error: handleError
    });

    });
});

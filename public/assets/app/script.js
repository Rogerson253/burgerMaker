$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#devoured").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    console.log(devoured);

    var newDevoured = {
      devoured: devoured,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevoured,
    }).then(function () {
      console.log("changed devoured", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

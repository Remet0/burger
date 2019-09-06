$(document).ready(function() {
    
    $('.eat').on("click", function(event) {
      event.preventDefault();
      var id = $(this).data('id');

      $.ajax({
        method: "PUT",
        url: "/burgers/" + id
      }).then(function(data) {
        location.reload();
      });
  
    });
  });
  
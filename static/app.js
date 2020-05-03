$(document).ready(function(){

    window.data = {"nav":{"current":"home"}};
    $('.modal').modal();


    $('.api-action').on('click', function() {
        $.post("/api",
            {
                action: "Donald Duck"
            },
            function(data, status){
            });
       });

       $('.nav-action').on('click', function() {
           let target = $(this).data('target');
           $('.nav-card[data-target="'+ window.data.nav.current +'"]').hide();
           $('.nav-card[data-target="' + target + '"]').fadeIn();
       });

  });

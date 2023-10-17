$(document).ready(function(){
    
        $(document).scroll(function(){
    
            var y=$(document).scrollTop();
    
    
            $(".parallax").each(function(){
    
                var percentuale=$(this).attr("data-percentuale");

                percentuale=Math.round(y*percentuale/100);

                $(this).css("background-position-y",-percentuale);
    
            });
    
        }); 

    });

       
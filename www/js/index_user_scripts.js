/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnYo */
    $(document).on("click", "#btnYo", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

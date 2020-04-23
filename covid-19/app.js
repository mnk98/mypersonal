// Example starter JavaScript for disabling form submissions if there are invalid fields
var buttonValue="I agree";
var user = '<div class="wc-message-wrapper list"><div class="wc-message wc-message-from-me"><div class="wc-message-content" style="float: left;"><div id="userData">I agree</div></div><i class="fa fa-user-circle" style="font-size: 21px;color:#00747a;margin-left: 10px;margin-top: 14px;"></i></div></div>';
(function($){
    'use strict';

    $( "button" ).click(function() {
        //Create temporary element
       
        var id = $(this).attr("id");
        $( "button" ).prop('disabled', true);

        var value = $(this).text();
        console.log(typeof $("."+id).find("select") );
        if(typeof $("."+id).find("select") !== "undefined" && $("."+id).find("select").length > 0 ){
            value = $("."+id).find("select").val();
        }
        var elem = $(user);
        elem.find('#userData').replaceWith("<div id='userData'>"+value+"</div>");
        user = elem.prop("outerHTML");


       $("."+id).after(user);
       $("#"+id+"-content").show();
       $("#"+id+"-content button").prop('disabled', false);
       $(".disabled").prop('disabled', true);
       console.log($("#"+id+"-content").offset().top);
       $("html, body").animate({ scrollTop:$("#"+id+"-content").offset().top }, 1000);

      });
})(jQuery);

$(document).ready(function() {
    $('#example').DataTable();
} );

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
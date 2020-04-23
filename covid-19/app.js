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

    // $.getJSON( "https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs1", function( data ) {
    
    // if(typeof data == "object"){
    //     console.log("yes-"+typeof data);
    // } else {
    //     console.log("No-"+typeof data);
    // }
    // var items = [];
        // $.each( data, function( key, val ) {
        //   items.push( "<li id='" + key + "'>" + val + "</li>" );
        // });
       
        // $( "<ul/>", {
        //   "class": "my-new-list",
        //   html: items.join( "" )
        // }).appendTo( ".content-page" );
        // console.log(data.locations);
    //   });

    //   $.ajax({
    //     type:"GET", 
    //     url: "http://fantasy.premierleague.com/web/api/elements/100/", 
    //     success: function(data) {
    //             $("body").append(JSON.stringify(data));
    //         }, 
    //     error: function(jqXHR, textStatus, errorThrown) {
    //             alert(jqXHR.status);
    //         },
    //    dataType: "jsonp"
    // });​​​​​​​​​​​​​​​

    $.ajax(
        {
           type:'GET',
           url:'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=US',
       
        success: function(data){
            $("#tackerLoading").hide();
            $(".latest-info").css("display", "flex");
            var info = JSON.parse(data)[0];
            console.log(JSON.parse(data)[0]);
            var items = [];
            $("#latestConfirmed").html(info.confirmed);
            $("#latestDeaths").html(info.deaths);
            $("#latestRecovered").html(info.recovered);
        },error: function(jqXHR, textStatus, errorThrown) {
            // alert(jqXHR.status);
            $("#tackerError").show();
            $("#tackerLoading").hide();
        },
    });

    // $.ajax(
    //     {
    //        type:'GET',
    //        url:'https://coronavirus-tracker-api.herokuapp.com/confirmed',
       
    //     success: function(data){
    //         $.each( data.locations, function( key, val ) {
                               
                
    //             if(val.country == "US"){
    //                 console.log("key "+key)
    //                 console.log(val.history) 
    //                 var x= []
    //                 var y= []
    //                 $.each( val.history, function( key, val ) {
    //                     x.push(key)
    //                     y.push(val)
    //                 })
                    

    //                 var line = new RGraph.Line('cvs', y)
    //                 // .Set('ymax', 100)
    //                 // .Set('xmax', 365)
    //                 .Set('labels', x)
    //                 .Set('xaxispos', 'bottom')
    //                 .Set('gutter.bottom', 45)
    //                 .Draw();
    //             }
    //         });
            
    //     },error: function(jqXHR, textStatus, errorThrown) {
    //         // alert(jqXHR.status);
    //         // $("#tackerError").show();
    //         // $("#tackerLoading").hide();
    //     },
    // });



    function getObject ()
    {
        return RGraph.ObjectRegistry.getFirstObjectByType('line');
    }
    

});


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
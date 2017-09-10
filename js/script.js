$(document).ready(function() {
    var maintainRatio = function() {
        var ww = $(window).width();
        var wh = $(window).height();
        var wr = ww/wh;
        var iw = $(".images img").width();
        var ih = $(".images img").height();
        var ir = iw/ih;
        // Set CSS to center image in wrapper
        $(".images img").css({
            "top": "50%",
            "left": "50%"
        });
        // Set CSS properties of current image
        if(wr < ir) {
            $(".images img").css({
                "height": wh,
                "width": wh*ir,
                "margin-top": -(wh/2),
                "margin-left": -(wh*ir/2)
            });
        } else {
            $(".images img").css({
                "height": ww*(1/ir),
                "width": ww,
                "margin-top": -(ww*(1/ir)/2),
                "margin-left": -(ww/2),
            });
        }
    }

    /*
     * Scale effect (CSS3)
     */
     var scale = function(factor, time) {
         $(".images img").css({
          "-webkit-transform": "scale(" + factor + ")",  // Safari 3.1+, Chrome
             "-moz-transform": "scale(" + factor + ")",  // Firefox 3.5+
              "-ms-transform": "scale(" + factor + ")",  // IE9+
               "-o-transform": "scale(" + factor + ")",  // Opera 10.50+
                  "transform": "scale(" + factor + ")",
         "-webkit-transition": "-webkit-transform " + time + "s ease-in-out",  // Safari 3.2+, Chrome
            "-moz-transition": "-webkit-transform " + time + "s ease-in-out",  // Firefox 4-15
              "-o-transition": "-webkit-transform " + time + "s ease-in-out",  // Opera 10.5–12.00
                 "transition": "-webkit-transform " + time + "s ease-in-out"  // Firefox 16+, Opera 12.50+
         });
     }
    $(window).ready(function(){
        maintainRatio();
        scale(1.2,6);
    })
    $(window).resize(function() {
        maintainRatio();
    });

});

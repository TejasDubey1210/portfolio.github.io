$(document).ready(function(){
    // $(window).on('load',function(){
    //     $('.preloader').addClass('complete');
    // });

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })
    var typed = new Typed(".element",{
        strings: ["Tejas Dubey","a FullStack Web Developer"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    //progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style","width:80%;transition:1s all");
            p[1].setAttribute("style","width:75%;transition:1.5s all");
            p[2].setAttribute("style","width:83%;transition:1.7s all");
            p[3].setAttribute("style","width:80%;transition:2s all");
            p[4].setAttribute("style","width:65%;transition:2.3s all");
            p[5].setAttribute("style","width:77%;transition:2.7s all");
            p[6].setAttribute("style","width:70%;transition:3s all");
            p[7].setAttribute("style","width:72%;transition:3.3s all");
            p[8].setAttribute("style","width:65%;transition:3.7s all");
            p[9].setAttribute("style","width:75%;transition:4s all");
            p[10].setAttribute("style","width:85%;transition:4.3s all");
            p[11].setAttribute("style","width:78%;transition:4.7s all");
            p[12].setAttribute("style","width:80%;transition:5s all");
            
        },
        offset:'90%'
      })

   
});
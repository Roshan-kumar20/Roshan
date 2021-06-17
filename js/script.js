//js/script.js

$(document).ready(function(){
    var totalTime = 200;
    var pagecount =0;
    var min = 0;
    var sec = 0;
    var counter = 0;
    var timer = setInterval(function(){    
      counter++;
      
      min = Math.floor ( (totalTime - counter) / 60 );
      sec = totalTime - (min * 60) - counter;
     //alert(min + ":" + sec)
     $("#timerCount").text(min + ":" + sec);
    },1000);


    $(".mainContainer div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    if(pagecount == 0){
        $('.btnPre').prop('disabled', true);
        $('.btnPre').css('background-color', '#96d2ec');
    }

    $("#next").click(function(){
        pagecount++;
        //alert($(".mainContainer div").length)
        //alert(pagecount)
        if($(".mainContainer div").length == pagecount){
            $('.btnnext').css("display","none");
            $('.btnfinal').css("display","block");
            $('.btnPre').prop('disabled', false);
            $('.btnPre').css('background-color', '#1da3dd');
        }else{
            $('.btnPre').prop('disabled', false);
            $('.btnPre').css('background-color', '#1da3dd');
            if ($(".mainContainer div:visible").next().length != 0)
                $(".mainContainer div:visible").next().show().prev().hide();
            else {
                $(".mainContainer div:visible").hide();
                $(".mainContainer div:first").show();
            }
        }
        return false;
    });

    $("#prev").click(function(){
        pagecount--;
        if($(".mainContainer div").length == pagecount+1){
            $('.btnnext').css("display","block");
            $('.btnfinal').css("display","none");
        }else{
            if(pagecount != 0){
                if ($(".mainContainer div:visible").prev().length != 0)
                    $(".mainContainer div:visible").prev().show().next().hide();
                else {
                    $(".mainContainer div:visible").hide();
                    $(".mainContainer div:last").show();
                }
            }else{
                $('.btnPre').prop('disabled', true);
                $('.btnPre').css('background-color', '#96d2ec');
            }
        }
        return false;
    });
    
    
});
function checkAnswer3(a) {
    if(a == 1){
        $(".one4").addClass("selected");
        $(".two4").removeClass("selected");
        $(".three4").removeClass("selected");
        $(".four4").removeClass("selected");
    }else if(a == 2){
        $(".one4").removeClass("selected");
        $(".two4").addClass("selected");
        $(".three4").removeClass("selected");
        $(".four4").removeClass("selected");
    }else if(a == 3){
        $(".one4").removeClass("selected");
        $(".two4").removeClass("selected");
        $(".three4").addClass("selected");
        $(".four4").removeClass("selected");
    }else if(a == 4){
        $(".one4").removeClass("selected");
        $(".two4").removeClass("selected");
        $(".three4").removeClass("selected");
        $(".four4").addClass("selected");
     }
}
function checkAnswer(a) {
    if(a == 1){
        $(".one1").addClass("selected");
        $(".two1").removeClass("selected");
        $(".three1").removeClass("selected");
        $(".four1").removeClass("selected");
    }else if(a == 2){
        $(".one1").removeClass("selected");
        $(".two1").addClass("selected");
        $(".three1").removeClass("selected");
        $(".four1").removeClass("selected");
    }else if(a == 3){
        $(".one1").removeClass("selected");
        $(".two1").removeClass("selected");
        $(".three1").addClass("selected");
        $(".four1").removeClass("selected");
    }else if(a == 4){
        $(".one1").removeClass("selected");
        $(".two1").removeClass("selected");
        $(".three1").removeClass("selected");
        $(".four1").addClass("selected");
    }
   // alert('did it',a);
}
function checkAnswer1(a) {
 if(a == 1){
        $(".one2").addClass("selected");
        $(".two2").removeClass("selected");
        $(".three2").removeClass("selected");
        $(".four2").removeClass("selected");
    }else if(a == 2){
        $(".one2").removeClass("selected");
        $(".two2").addClass("selected");
        $(".three2").removeClass("selected");
        $(".four2").removeClass("selected");
    }else if(a == 3){
        $(".one2").removeClass("selected");
        $(".two2").removeClass("selected");
        $(".three2").addClass("selected");
        $(".four2").removeClass("selected");
    }else if(a == 4){
        $(".one2").removeClass("selected");
        $(".two2").removeClass("selected");
        $(".three2").removeClass("selected");
        $(".four2").addClass("selected");
     }
    //alert(a)
}
function checkAnswer2(a) {
    if(a == 1){
        $(".one3").addClass("selected");
        $(".two3").removeClass("selected");
        $(".three3").removeClass("selected");
        $(".four3").removeClass("selected");
    }else if(a == 2){
        $(".one3").removeClass("selected");
        $(".two3").addClass("selected");
        $(".three3").removeClass("selected");
        $(".four3").removeClass("selected");
    }else if(a == 3){
        $(".one3").removeClass("selected");
        $(".two3").removeClass("selected");
        $(".three3").addClass("selected");
        $(".four3").removeClass("selected");
    }else if(a == 4){
        $(".one3").removeClass("selected");
        $(".two3").removeClass("selected");
        $(".three3").removeClass("selected");
        $(".four3").addClass("selected");
     }
}

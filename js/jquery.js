$(document).ready(function(){

    //         var window_w =$(window).width();
    //         var window_h =$(window).height();

    // $(window).scroll(function(){

    //     sct = $(window).scrollTop();
        
    //     if(sct >=0 && sct < window_h){
    //         $('#header').removeClass('add');
    //         $('#header').eq(0).addClass('add');
            
    //     }else if(sct >=window_h && sct < window_h*2){
    //         $('##header').removeClass('add');
    //         $('##header').eq(1).addClass('add');
            
    //     }else if(sct >=window_h*2 && sct < window_h*3){
    //         $('##header').removeClass('add');
    //         $('##header').eq(2).addClass('add');
            
    //     }else if(sct >=window_h*3){
    //         $('##header').removeClass('add');
    //         $('##header').eq(3).addClass('add');
            
    //     }
    // });

    // var $header = $('header') ;
    // $(window).scroll(function(){
    //         if($(this).scrollTop() > 0){
    //             $header.addClass('add');
    //         }else{
    //             $header.removeClass('add')
    //         }
    // });
    



    $('header').hover(function(){

       

        $('#menu_bar').stop().animate({
            height:250,
            
        },3500);
    }, function(){
        $('#menu_bar').stop().animate({
            height:0,
        });

    });





     /* $('header').hover(function(){
        $(this).stop().animate({
            height:450,
        });
    }, function(){
         $(this).stop().animate({
            height:150,
         });
     });
 */
   

   
});



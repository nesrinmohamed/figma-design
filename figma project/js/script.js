// var heading = document.getElementsByClassName("according");
// var i ; 
// for(i = 0 ; i < heading.length; i++){
//     heading[i].addEventListener('click', function(){
//         this.classList.toggle('active')
//         var des = this.nextElementSibling; 

//         if (des.style.maxHeight){
//             des.style.maxHeight = null;
//         }else{
//             des.style.maxHeight = des.scrollHeight + "px";
//         }
//     });
// }


// slide show

var slideimg= ["img/image11.png", "img/image14.png","img/image16.png","img/image17.png"]

var slideshow = function(){
    document.slideshow.src = slideimg[i];
    var i =0 ;
    if(i < slideshow.length - 1 ){
        i++;
    }else{

    }i=0

}

slideshow();

const x =function test(){
console.log(test);
}



$(window).scroll(function(){
    if($(this).scrollTop()>100){
$("nav").addClass("statick")
    }
    else{
        $("nav".removeClass("statick"))
    }
})



































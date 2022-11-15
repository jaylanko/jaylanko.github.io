function addActive(id){
    document.getElementById(id).classList.toggle("accActive");
    
    document.getElementById(id+"up").classList.toggle("accActive");
    document.getElementById(id+"down").classList.toggle("accActive");


}

window.onscroll=function (){ NavigationBar()};

function NavigationBar(){
    if(document.documentElement.scrollTop>100){


        document.getElementById('navigationBar').style.backgroundColor="rgba(0, 0, 0, .5)" 


    }else{

        document.getElementById('navigationBar').style.backgroundColor="transparent";
    }
}

function galleryFilter(id){
    document.getElementById('tab1').classList.remove("active");
    document.getElementById('tab2').classList.remove("active");
    document.getElementById('tab3').classList.remove("active");
    document.getElementById('tab4').classList.remove("active");

    document.getElementById(id).classList.add("active");

    if(id == 'tab1'){
       var elements= document.getElementsByClassName('pic');

       for(var i=0;i<elements.length;i++){
           elements[i].style.display="inline";
       }
    }
    if(id == 'tab2'){
        var elements= document.getElementsByClassName('pic');
 
        for(var i=0;i<elements.length;i++){
            elements[i].style.display="none";
        }
        var specific= document.getElementsByClassName('tab2');
 
        for(var i=0;i<specific.length;i++){
            specific[i].style.display="inline";
        }
     }
     if(id == 'tab3'){
        var elements= document.getElementsByClassName('pic');
 
        for(var i=0;i<elements.length;i++){
            elements[i].style.display="none";
        }
        var specific= document.getElementsByClassName('tab3');
 
        for(var i=0;i<specific.length;i++){
            specific[i].style.display="inline";
        }
     }
     if(id == 'tab4'){
        var elements= document.getElementsByClassName('pic');
 
        for(var i=0;i<elements.length;i++){
            elements[i].style.display="none";
        }
        var specific= document.getElementsByClassName('tab4');
 
        for(var i=0;i<specific.length;i++){
            specific[i].style.display="inline";
        }
     }
}


function burgerToggler(){
    let span1 = document.getElementById("span1");
    let span2 = document.getElementById("span2");
    let span3 = document.getElementById("span3");

    span3.classList.toggle("btn-click");
    span2.classList.toggle("btn-click2");
    span1.classList.toggle("btn-click3");

    let toggle = document.getElementById("links");

    toggle.classList.toggle("dropdown-toggle");
}



 window.onload = function(){
      play();

 }
 function play(){
      var cbutton1=document.getElementById("color1");
      var cbutton2=document.getElementById("color2");
      var cbutton3=document.getElementById("color3");
      cbutton1.style.display="inline";
      cbutton2.style.display="inline";
      cbutton3.style.display="inline";
     function colors(r, g, b){
         this.r=r;
         this.g=g;
         this.b=b;
     }

     var r, g, b;
     function choose(){
        r=Math.floor((Math.random() * 255) + 1);
        g=Math.floor((Math.random() * 255) + 1);
        b=Math.floor((Math.random() * 255) + 1);    
     }
     function chooseans(){
        r=Math.floor((Math.random() * 255) + 1);
        g=Math.floor((Math.random() * 255) + 1);
        b=Math.floor((Math.random() * 255) + 1);    
     }

     chooseans();
     var ansr=r;
     var ansg=g;
     var ansb=b;

     var ques=document.getElementById("RGBtitle");
     ques.innerHTML='RGB('+r+', '+g+', '+b+')';

     var ansbut=Math.floor((Math.random() * 2) + 1);
     if(ansbut==0){
        cbutton1.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton2.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton3.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
     }else if(ansbut==1){
        cbutton2.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton1.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton3.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
     }else{
        cbutton3.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton2.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
        choose();
        cbutton1.style.backgroundColor='rgb('+r+',' +g+', '+b+')';
     }

     var bg=document.querySelector('body');
     var hint=document.getElementById('Hint');
     var end=0;

     cbutton1.onclick=function(){
         if(ansbut==0){
            bg.style.backgroundColor='rgb('+ansr+', '+ansg+', '+ansb+')';
            Hint.innerHTML='Congrats!';
            end=1;
         }else{
            if(end==0){
               cbutton1.style.display='none';
               Hint.innerHTML='Guess Again.';
            }
         }
     }
     cbutton2.onclick=function(){
         if(ansbut==1){
            bg.style.backgroundColor='rgb('+ansr+', '+ansg+', '+ansb+')';
            Hint.innerHTML='Congrats!';
            end=1;
         }else{
            if(end==0){
               cbutton2.style.display='none';
               Hint.innerHTML='Guess Again.';
            }
         }
      }
      cbutton3.onclick=function(){
         if(ansbut==2){
            bg.style.backgroundColor='rgb('+ansr+', '+ansg+', '+ansb+')';
            Hint.innerHTML='Congrats!';
            end=1;
         }else{
            if(end==0){
               cbutton3.style.display='none';
               Hint.innerHTML='Guess Again.';
            }
         }
      }
      var button4=document.getElementById("ag");
         button4.onclick=function(){
            play();
         }

}
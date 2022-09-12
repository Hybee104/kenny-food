// DARK THEME MODE
   
function darkMode(){
   var ele = document.body;
   ele.classList.toggle('dark-mode');

  }


   //NAVIGATOR CODES

           function myFunction(){
var navBar = document.getElementById('nav');
navBar.classList.toggle('show');

}

//  FAQ FREAQUENTLY ASK QUESTION

var content = document.getElementsByClassName('content')
var question = document.getElementsByClassName('question')

 for(i=0; i<content.length; i++){
  content[i].addEventListener('click', function(){
   this.classList.toggle('active')
  })
 }


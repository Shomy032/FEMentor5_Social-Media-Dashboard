function myF(){
  var check = document.getElementById("checked");
  var body = document.getElementById('body');
  var broj1 = document.querySelectorAll(".fol-count");
  var broj2 = document.querySelectorAll(".broj");
  var naslov = document.getElementById('naslov');
  var naslov2 = document.querySelector(".naslov2");
  var card = document.querySelectorAll(".card");
  var kartice = document.querySelectorAll(".kartice");
  
    //if the checkbox state is changed, run a funtion
    check.addEventListener("change", function() {
      //check if the checkbox is checked or not
      if (check.checked) {
        nodark(); //if the checkbox is checked, run this funtion
        console.log('aa');
      } else {
        darkmode(); //else run this funtion
        console.log('bb');
      }
    });
  
//     var list;
//  list = document.querySelectorAll("li.even, li.odd");
// for (var i = 0; i < list.length; ++i) {
//    list[i].classList.add('cf');
// }

// prva funkcija za dark
    function darkmode(){
      for (let i = 0; i < broj1.length; ++i) {
        broj1[i].classList.add('crna'); 
    };
    for (let i = 0; i < broj2.length; ++i){
     broj2[i].classList.add('crna');
    };
    naslov.style.color = 'black' ;
    naslov2.style.color = 'black';
    naslov.style.opacity = '0.8' ;
    naslov2.style.opacity = '0.8';
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = '#ede8e8';
    for (let i = 0; i < card.length; ++i) {
      card[i].style.backgroundColor = 'white'; 
      for (let i = 0; i < kartice.length; ++i) {
        kartice[i].style.backgroundColor = 'white'; 
  };
  }
}
// prva funkcija za noDark
    function nodark(){
      for (let i = 0; i < broj1.length; ++i) {
        broj1[i].classList.remove('crna'); 
    };
    for (let i = 0; i < broj2.length; ++i){
     broj2[i].classList.remove('crna');
  }
  naslov.style.color = 'white' ;
  naslov2.style.color = 'white';
  naslov.style.opacity = '1' ;
    naslov2.style.opacity = '1';
  body.style.backgroundImage = 'none';
  body.style.backgroundColor = 'hsl(229, 18%, 18%)';
  for (let i = 0; i < card.length; ++i) {
    card[i].style.backgroundColor = 'hsl(228, 28%, 20%)'; 
};
for (let i = 0; i < kartice.length; ++i) {
  kartice[i].style.backgroundColor = 'hsl(228, 28%, 20%)'; 
};

}


}

    // document.getElementById(id).style.property = new style

    
//   function darkmode(){
//     body.style.backgroundImage = 'linear-gradient(180deg , hsl(229, 18%, 30%) 10%,$dark-body 14%)' ;

//     broj1[0].style.color = 'white';
//     broj1[1].style.color = 'white';
//     broj1[2].style.color = 'white';
//     broj1[3].style.color = 'white';

//     broj2[0].style.color = 'white';
//     broj2[1].style.color = 'white';
//     broj2[2].style.color = 'white';
//     broj2[3].style.color = 'white'; 
//     broj2[4].style.color = 'white';
//     broj2[5].style.color = 'white';
//     broj2[6].style.color = 'white';
//     broj2[7].style.color = 'white';
//   }
  
//   function nodark(){
//     broj1[0].style.color = 'black';
//     broj1[1].style.color = 'black';
//     broj1[2].style.color ='black';
//     broj1[3].style.color = 'black';

//     broj2[0].style.color = 'black';
//     broj2[1].style.color = 'black';
//     broj2[2].style.color = 'black';
//     broj2[3].style.color = 'black';
//     broj2[4].style.color = 'black';
//     broj2[5].style.color = 'black';
//     broj2[6].style.color = 'black';
//     broj2[7].style.color = 'black';
     
//   }



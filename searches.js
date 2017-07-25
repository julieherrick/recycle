var pinterest_board = {"waterbottles":"https://www.pinterest.com/julieann4536/water-bottle-crafts/", 
"water bottles":"https://www.pinterest.com/julieann4536/water-bottle-crafts/", 
"water bottle":"https://www.pinterest.com/julieann4536/water-bottle-crafts/", 
"bottles":"https://www.pinterest.com/julieann4536/water-bottle-crafts/", 
"bottle": "https://www.pinterest.com/julieann4536/water-bottle-crafts/", 
"cans":"https://www.pinterest.com/mpeavylonghorns/aluminum-can-crafts/", 
"can":"https://www.pinterest.com/mpeavylonghorns/aluminum-can-crafts/", 
"cardboard":"https://www.pinterest.com/julieann4536/cardboard-crafts/", 
"pencilstub":"https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/",
"pencil stub":"https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/", 
"pencil stubs": "https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/",
"pencilstubs": "https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/", 
"graphite": "https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/", 
"lead": "https://www.pinterest.com/mpeavylonghorns/pencil-stub-crafts/", 
"magazine": "https://www.pinterest.com/julieann4536/magazine-crafts/", 
"magazines": "https://www.pinterest.com/julieann4536/magazine-crafts/", 
"clothing": "https://www.pinterest.com/mpeavylonghorns/clothing-crafts/", 
"clothes": "https://www.pinterest.com/mpeavylonghorns/clothing-crafts/", 
"toilet paper": "https://www.pinterest.com/mpeavylonghorns/toilet-paper-roll-crafts/", 
"wrapper": " https://www.pinterest.com/mpeavylonghorns/wrapper-crafts/",
"wrappers": " https://www.pinterest.com/mpeavylonghorns/wrapper-crafts/",
"candy wrapper": " https://www.pinterest.com/mpeavylonghorns/wrapper-crafts/",
"candy wrappers": " https://www.pinterest.com/mpeavylonghorns/wrapper-crafts/",
"chopsticks": "https://www.pinterest.com/mpeavylonghorns/chopstick-crafts/",
"chopstick": "https://www.pinterest.com/mpeavylonghorns/chopstick-crafts/",
"chop stick": "https://www.pinterest.com/mpeavylonghorns/chopstick-crafts/",
"chop sticks": "https://www.pinterest.com/mpeavylonghorns/chopstick-crafts/",
"plastic bag": "https://www.pinterest.com/julieann4536/plastic-bag-crafts/", 
"plastic bags": "https://www.pinterest.com/julieann4536/plastic-bag-crafts/",
"bags": "https://www.pinterest.com/julieann4536/plastic-bag-crafts/",
"bag": "https://www.pinterest.com/julieann4536/plastic-bag-crafts/",
"tire": "https://www.pinterest.com/mpeavylonghorns/tire-crafts/", 
"tires": "https://www.pinterest.com/mpeavylonghorns/tire-crafts/",
https://www.pinterest.com/Kviolin13/milk-jug-crafts/
https://www.pinterest.com/Kviolin13/prescription-bottle-reusable-crafts/};


  // function doClick(buttonName,e)
  //   {
  //       //the purpose of this function is to allow the enter key to 
  //       //point to the correct button to click.
  //       document.getElementById("d").innerHTML = "hhhhhhhhhhhhh"
  //       var key;

  //        if(window.event)
  //             key = window.event.keyCode;     //IE
  //        else
  //             key = e.which;     //firefox

  //       if (key == 13)
  //       {
  //           //Get the button the user wants to have clicked
  //           var btn = document.getElementById('mySearch').value;

  //           document.getElementById("d").innerHTML = btn;
  //           if (btn != null)
  //           { //If we find the button click it
  //               // btn.click();
  //               // event.keyCode = 0;
  //           }
  //       }
  //  }
function myFunction() {
     var x = document.getElementById("mySearch").value;
     var x = x.toLowerCase();
     document.write(pinterest_board[x].key);
    document.getElementById("board").href ="https://www.pinterest.com/mpeavylonghorns/aluminum-can-crafts/";
    
      
      return false;
        

}
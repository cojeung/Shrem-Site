function change_pic(_src) {
      var clicked_image = _src; //store returned src as clicked image
      var clicked = 'f'; //if image has been "changed" yet

      if (clicked=='f') {
        var change_image = document.getElementById('LARGE_wind_pic'); //change this big one
        change_image.src = clicked_image; //change it
        clicked ='t';
      }
      else {
        clicked_image.src = clicked_image; //orig image
        clicked = 'f';
      }
} //end change_pic


function return_caption(orig_title, orig_paren, new_title, new_paren) {
  var clicked = 'f';

  //h1
  var orig_title = document.getElementById(orig_title);
  var new_title = document.getElementById(new_title);

  //h2
  var orig_paren = document.getElementById(orig_paren);
  var new_paren = document.getElementById(new_paren);

  if (clicked=='f') { //when clicked
    orig_title.innerHTML = new_title.innerHTML;
    orig_paren.innerHTML = new_paren.innerHTML;
    clicked ='t';
  }
  else { //when not clicked
    orig_title.innerHTML = orig_title.innerHTML;
    orig_paren.innerHTML = orig_paren.innerHTML;
    clicked ='f'; //reset
  }

} //end return_caption

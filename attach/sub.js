var starVal;

function starValue(x) {
  starVal = x;
  console.log(starVal)
}


function validateForm() {
  var x = document.forms["form"]["FirstName"].value;
  var y = document.forms["form"]["email"].value;
  var z = document.forms["form"]["comment"].value;
  // var t = document.forms["form"]["rate"].value;
  var t = starVal;

  console.log(x, y, z, t)
  if (x == "" || y == "" || z == "" || t == "") {
    alert("Details must be filled out");
    return false;
  }
  Submit();

}



function Submit() {

  var name = document.getElementById('FirstName').value;
  // var star1 = document.getElementById('star1').style.color;
  // var star2 = document.getElementById('star2').style.color;
  // var star3 = document.getElementById('star3').style.color;
  // var star4 = document.getElementById('star4').style.color;
  // var star5 = document.getElementById('star5').style.color;
  // var rate = "";
  if (name == "") {
    alert("Please enter your name before you submit");
  }
  else if (starVal == 5) {
    rate = "5";
    alert("Hi " + name + ". You rated us with  " + rate + " stars. " +
      "Thanks for your response.");
  }
  else if (starVal == 4) {
    rate = "4";
    alert("Hi " + name + ". You rated us with  " + rate + " stars. " +
      "Thanks for your response.");
  }

  else if (starVal == 3) {
    rate = "3";
    alert("Hi " + name + ". You rated us with  " + rate + " stars. " +
      "Thanks for your response.");
  }

  else if (starVal == 2) {
    rate = "2";
    alert("Hi " + name + ". You rated us with  " + rate + " stars. " +
      "Thanks for your response.");
  }

  else if (starVal == 1) {
    rate = "1";
    alert("Hi " + name + ". You rated us with  " + rate + " stars. " +
      "Thanks for your response.");
  }

  else {

    return false;
  }



  // $('input:radio').click(function () {

  // });

}


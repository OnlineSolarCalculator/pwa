var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var acc2 = document.getElementsByClassName("accordion2");
var i2;
for (i2 = 0; i2 < acc2.length; i2++) {
  acc2[i2].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel2 = this.nextElementSibling;
    if (panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    } 
  });
}


  var validNumber = new RegExp(/^\d*\.?\d*$/);
  var lastValid1 = document.getElementById("in1").value;
  var lastValid2 = document.getElementById("in2").value;
  var lastValid3 = document.getElementById("in3").value;
  var lastValid4 = document.getElementById("in4").value;
  var lastValid6 = document.getElementById("in6").value;
  var lastValid7 = document.getElementById("in7").value;
  var lastValid8 = document.getElementById("in8").value;
  var lastValid9 = document.getElementById("in9").value;
  var lastValid10 = document.getElementById("in10").value;
  var lastValid11 = document.getElementById("in11").value;
  function validateNumber1(elem) {
    if (validNumber.test(elem.value)) {
      lastValid1 = elem.value;
    } else {
      elem.value = lastValid1;
    }
  }
  function validateNumber2(elem) {
    if (validNumber.test(elem.value)) {
      lastValid2 = elem.value;
    } else {
      elem.value = lastValid2;
    }
  }
  function validateNumber3(elem) {
    if (validNumber.test(elem.value)) {
      lastValid3 = elem.value;
    } else {
      elem.value = lastValid3;
    }
  }
  function validateNumber4(elem) {
    if (validNumber.test(elem.value)) {
      lastValid4 = elem.value;
    } else {
      elem.value = lastValid4;
    }
  }
  function validateNumber6(elem) {
    if (validNumber.test(elem.value)) {
      lastValid6 = elem.value;
    } else {
      elem.value = lastValid6;
    }
  }
  function validateNumber7(elem) {
    if (validNumber.test(elem.value)) {
      lastValid7 = elem.value;
    } else {
      elem.value = lastValid7;
    }
  }
  function validateNumber8(elem) {
    if (validNumber.test(elem.value)) {
      lastValid8 = elem.value;
    } else {
      elem.value = lastValid8;
    }
  }
  function validateNumber9(elem) {
    if (validNumber.test(elem.value)) {
      lastValid9 = elem.value;
    } else {
      elem.value = lastValid9;
    }
  }
  function validateNumber10(elem) {
    if (validNumber.test(elem.value)) {
      lastValid10 = elem.value;
    } else {
      elem.value = lastValid10;
    }
  }
  function validateNumber11(elem) {
    if (validNumber.test(elem.value)) {
      lastValid11 = elem.value;
    } else {
      elem.value = lastValid11;
    }
  }



function calc()
    {  
        var in1 = parseFloat(document.getElementById('in1').value);
        var in2 = parseFloat(document.getElementById('in2').value);
        var in3 = parseFloat(document.getElementById('in3').value);
        var in4 = parseFloat(document.getElementById('in4').value);
        var in6 = parseFloat(document.getElementById('in6').value);
        var in7 = parseFloat(document.getElementById('in7').value);
        var in8 = parseFloat(document.getElementById('in8').value);
        var in9 = parseFloat(document.getElementById('in9').value);
        var in10 = parseFloat(document.getElementById('in10').value);
        var in11 = parseFloat(document.getElementById('in11').value);
        var check1 = document.getElementById('check1');
        if (check1.checked == true){
          var in5 = in7
        } else {
          var in5 = in6
        }
       
        var save1 = (in1/30*(in3/100)/in9/in4);
        var save2 = (in1*12*in3/100);
        var save3 = (in1*12-save2);
        var save4 = (save1*in5*1000);
        var save5 = (save3*in2);
        var save6 = (save4+save5*in8);
        var save7 = (in1*12*in2*in8-save6);
        var save8 = ((in1*12-save3)*in2);
        var save9 = (save6/in8/(in1*12));
        var save10 = (save4/save8);
        var saveA = in2

        var car1 = (in1*12*in10);
        var car2 = (save2*in11+save3*in10);
        var car3 = (car1-car2);
        var car4 = ((car1-car2)*in8);
        var trees = (car4/23); //20kg/year * 25 years lifetime * 10% mortality rate
        var plastic = (car4/0.025);
        var cartrip = (car4*3.983/40075);

        // 35.4 km/gallon
        // 8.887 kgco2 /gallon
        // 3.983 km/kg co2
        // 400000 kg co2
        // 1593338 km
        // 40075 km
       
        save1 = save1 || 0
        save2 = save2 || 0
        save3 = save3 || 0
        save4 = save4 || 0
        save5 = save5 || 0
        save6 = save6 || 0
        save7 = save7 || 0
        save8 = save8 || 0
        save9 = save9 || 0
        save10 = save10 || 0
        saveA = saveA || 0
        car1 = car1 || 0
        car2 = car2 || 0
        car3 = car3 || 0
        car4 = car4 || 0
        trees = trees || 0
        plastic = plastic || 0
        cartrip = cartrip || 0


        document.getElementById('save1').value = (Math.round(save1* 100) / 100).toLocaleString();
        document.getElementById('save2').value = (Math.round(save2* 100) / 100).toLocaleString();
        document.getElementById('save3').value = (Math.round(save3* 100) / 100).toLocaleString();
        document.getElementById('save4').value = (Math.round(save4* 1) / 1).toLocaleString();
        document.getElementById('save5').value = (Math.round(save5* 1) / 1).toLocaleString();
        document.getElementById('save6').value = (Math.round(save6* 1) / 1).toLocaleString();
        document.getElementById('save7').value = (Math.round(save7* 1) / 1).toLocaleString();
        document.getElementById('save8').value = (Math.round(save8* 1) / 1).toLocaleString();
        document.getElementById('save9').value = (Math.round(save9* 1000) / 1000).toLocaleString();
        document.getElementById('save10').value = (Math.round(save10 * 100) / 100).toLocaleString();
        document.getElementById('saveA').value = saveA;

        document.getElementById('lifetime1').value = in8 + " Years";
        document.getElementById('lifetime2').value = in8 + " Years";
        document.getElementById('lifetime3').value = in8 + " Years";
        
        document.getElementById('car1').value= (Math.round(car1* 1) / 1).toLocaleString();
        document.getElementById('car2').value= (Math.round(car2* 1) / 1).toLocaleString();
        document.getElementById('car3').value= (Math.round(car3* 1) / 1).toLocaleString();
        document.getElementById('car4').value= (Math.round(car4* 1) / 1).toLocaleString();

        document.getElementById('carboneqtext1').value = "Planting " + (Math.round(trees* 1) / 1).toLocaleString() + " trees";
        document.getElementById('carboneqtext2').value = "Avoiding the use of " + (Math.round(plastic* 1) / 1).toLocaleString() + " plastic bags"; 
        document.getElementById('carboneqtext3').value = "Driving a gas-powered car around the world " + (Math.round(cartrip* 10) / 10).toLocaleString() + " times";

       
        if (save7 == 0) {
          // Get the snackbar DIV
          var x = document.getElementById("snackbar");
          // Add the "show" class to DIV
          x.className = "show";
          // After 3 seconds, remove the show class from DIV
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        } else if (car4 == 0){
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        } else if (save4 == 0){
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        } else {
        document.getElementById("system-tab").click();

      }
        





    }


function TwoToOne()
{
  document.getElementById("input-tab").click();
}

function TwoToThree()
{
  document.getElementById("savings-tab").click();
}

function ThreeToTwo()
{
  document.getElementById("system-tab").click();
}

function ThreeToFour()
{
  document.getElementById("carbon-tab").click();
}

function FourToThree()
{
  document.getElementById("savings-tab").click();
}

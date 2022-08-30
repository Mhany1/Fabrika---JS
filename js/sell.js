/** @format */

var x = document.getElementsByClassName("tab");
var rads = document.getElementsByClassName("rad-steps");
var currentTab = 0;
showTab(currentTab);

function changeTab(n) {
  //nextTab()
  if (currentTab < 2) {
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
  } else submitData();
}

function showTab(n) {
  x[n].style.display = "block";

  document.getElementById("back").style.display =
    (n == 0) | (n == x.length - 1) ? "none" : "inline";
  document.getElementById("next").innerHTML =
    n == x.length - 1 ? "Submit" : "Next";

  changeStepRadioChecked(n); //stepsRed()
}

function changeStepRadioChecked(n) {
  for (let i = 0; i < rads.length; i++) {
    if (rads[i].checked && i < rads.length - 1) rads[n].checked = true;
  }
}

function submitData() {
  hideTabsAndBtns();
  //Insert data to an new object, stringify it and POST it to the API with fetch
}

function hideTabsAndBtns() {
  document.getElementById("next").style.display = "none";
  document.getElementById("back").style.display = "none";
  document.getElementById("div_steps").style.display = "none";
  document.getElementById("file").style.display = "none";
  // Data for sell car

  class carInformation {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }

  var brand = document.getElementById("data1").value;
  var model = document.getElementById("data2").value;
  var year = document.getElementById("data3").value;

  var p = new carInformation(brand, model, year);
  console.log(p);

  var pos = JSON.stringify(p);
  // document.cookie = "allData=" + pos;
  document.cookie = "brand=" + p.brand;
  document.cookie = "model=" + p.model;
  document.cookie = "year=" + p.year;
  // console.log(document.cookie = "allData=" + pos);

  // var date = new Date();
  // date.setDate(date.getDate() + 1);
  // document.cookie = key + "=" + value +  ";expires=" + date.toUTCString()

  //console.log(document.cookie.sp);
  // document.cookie.split("=")
  // var equal = ''

  document.getElementById("final").innerHTML = `
    <div class="alert alert-dismissible alert-danger">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <h4 class="alert-heading">Thanks!</h4>
  <p class="mb-0">Your request has been submitted,You can see it now , <a href="products.html" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
</div>`;

  var allCarsSell = document.getElementById("totalCars");
  var space2 = " ";

  space2 = `<div  class="card m-5 btn" style="width: 18rem;">
    <img src=" " class="card-img-top" alt="...">
    <div class="card-body">
        <h5 id="make" class="card-title">${p.brand}</h5>
        <p class="card-text">${p.model}</p>
         <p class="card-text">${p.year}</p>
        <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
    </div>`;
  allCarsSell.innerHTML += space2;
}

// function stepsRed(n) {
//     let i = document.getElementsByClassName("rad-steps");
//     for (let i = 0; i < x.length; i++) {
//         x[i].className = x[i].className.replace(" checked+div>p", " ")
//         x[n].className += " checked+div>p";
//     }
// }

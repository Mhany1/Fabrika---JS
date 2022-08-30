var all_cars = [];
async function getCarsData() {
  await CRUD("https://c0de-l00p.github.io/fabrica/assets/json/cars.json", "GET", undefined, function (res) {
    all_cars = res.data;
    for (let car of res.data) {
      CreateACardFromData(car.attributes, car.id);
      // SendData(car.attributes);
    }
  });
}

getCarsData();

function CreateACardFromData(obj, objID) {
  //use this object data in its places
  let card = `
    <div class="col-md-4 ">
    <a href="datails.html" onclick="sessionStorage.setItem('carID',${objID})">
        <div class="card">
            <img src="${obj.imgs.data[0].attributes.url}" class="card-img-top" alt="${obj.imgs.data[0].attributes.url}">

            <div class="card-body car-information">
                <p>${obj.brand.data.attributes.name}|${obj.model}|${obj.capacity}L|AT ${obj.located_in}</p>
                <div style="justify-content: space-between; margin-top: 18px; margin-bottom: 15px;" class="d-flex">
                    <div>
                        <span class="car-color">${obj.production} ${obj.color}</span><br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.35" height="26.025" viewbox="0 0 33.35 26.025">
                            <defs>
                                <style>
                                    .a {
                                        fill: #00427a;
                                    }
                                </style>
                            </defs>
                            <g transform="translate(0 0)"><path class="a" d="M180.593,2827.346h-6.279a.977.977,0,0,0,0,1.955h6.279a.977.977,0,0,0,0-1.955Zm0,0" transform="translate(-160.779 -2803.276)"/><path class="a" d="M179.743,2819.358a3.069,3.069,0,0,0-4.115-4.114l-4.6-4.6a.977.977,0,0,0-1.382,1.382l4.6,4.6a3.068,3.068,0,0,0,4.114,4.114l1.083,1.083a.977.977,0,1,0,1.382-1.382Zm-2.748-.25a1.115,1.115,0,1,1,1.116-1.115,1.117,1.117,0,0,1-1.116,1.115Zm0,0" transform="translate(-160.32 -2801.318)"/><path class="a" d="M175.817,2800.142a16.676,16.676,0,0,0-14.44,25.013.976.976,0,0,0,1.334.356l2.719-1.57a.976.976,0,1,0-.977-1.691l-1.846,1.065a14.729,14.729,0,0,1-1.478-5.522h2.129a.977.977,0,0,0,0-1.954H161.13a14.6,14.6,0,0,1,1.48-5.52l1.843,1.064a.977.977,0,0,0,.977-1.693l-1.84-1.063a14.851,14.851,0,0,1,4.04-4.04l1.063,1.841a.977.977,0,0,0,1.693-.977l-1.064-1.843a14.622,14.622,0,0,1,5.52-1.48v2.129a.977.977,0,0,0,1.954,0v-2.129a14.622,14.622,0,0,1,5.519,1.48l-1.063,1.843a.977.977,0,0,0,1.693.977l1.063-1.841a14.851,14.851,0,0,1,4.04,4.04l-1.84,1.063a.977.977,0,1,0,.977,1.693l1.843-1.064a14.6,14.6,0,0,1,1.48,5.52h-2.129a.977.977,0,1,0,0,1.954h2.129a14.729,14.729,0,0,1-1.478,5.522l-1.846-1.066a.977.977,0,1,0-.977,1.692l2.719,1.57a.975.975,0,0,0,1.333-.356,16.674,16.674,0,0,0-14.44-25.013Zm0,0" transform="translate(-159.143 -2800.142)"/></g>
                        </svg>
                        <span class="car-speed">${obj.distance}</span>
                    </div>
                    <div style="margin-top: 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.753" height="30.753" viewbox="0 0 30.753 30.753">
                            <defs>
                                <style>
                                    .a {
                                        fill: #0c3f6a;
                                    }
                                </style>
                            </defs>
                            <g transform="translate(0)"><path class="a" d="M26.248,0a4.505,4.505,0,0,0-.9,8.919v4.656a.9.9,0,0,1-.9.9H16.278V8.919a4.5,4.5,0,1,0-1.8,0v5.557H5.406V8.919a4.5,4.5,0,1,0-1.8,0V21.834a4.5,4.5,0,1,0,1.8,0V16.278h9.07v5.557a4.5,4.5,0,1,0,1.8,0V16.278h8.169a2.706,2.706,0,0,0,2.7-2.7V8.919A4.505,4.505,0,0,0,26.248,0ZM7.208,26.248a2.7,2.7,0,1,1-2.7-2.7A2.706,2.706,0,0,1,7.208,26.248ZM4.5,7.208a2.7,2.7,0,1,1,2.7-2.7A2.706,2.706,0,0,1,4.5,7.208Zm13.575,19.04a2.7,2.7,0,1,1-2.7-2.7A2.706,2.706,0,0,1,18.079,26.248Zm-2.7-19.04a2.7,2.7,0,1,1,2.7-2.7A2.706,2.706,0,0,1,15.377,7.208Zm10.872,0a2.7,2.7,0,1,1,2.7-2.7A2.706,2.706,0,0,1,26.248,7.208Z"/></g>
                        </svg>
                        <span>Automatic</span>
                    </div>
                </div>
                <div class="car-price d-flex">
                    <div class="price">Price :
                    </div>
                    <div class="price-num">
                        ${obj.price} EGP</div>
                </div>
            </div>

        </div>
    </a>
</div>
    `;

  document.getElementById("div_cars").insertAdjacentHTML("beforeend", card);
}

// ------------------------ brand & model selects ---------------------//

//TODO this is not adding elements for the select for some reason
//TODO get count for the related cars for every brand
async function startDDL() {
  let brandSelect = document.getElementById("select_brands");
  brandSelect.style.backgroundColor = "black";
  let modelSelect = document.getElementById("select_models");

  CRUD("https://c0de-l00p.github.io/fabrica/assets/json/brands.json", "GET", undefined, function (res) {
    res.data.forEach((brand) => {
      let option = document.createElement("option");
      option.value = brand.id;
      option.text = brand.attributes.name;
      console.log("options", option);
      $("#select_brands").append(option);
      //   brandSelect.appendChild(option);

      //   $("#select_brands").append($("<option>", { value: 4, text: 4 }));

      //   var mySelect = document.getElementById("select_brands");
      //   var newElement = document.createElement("option");
      //   newElement.text = 5;
      //   mySelect.add(newElement);
    });
  });
}
// startDDL();

//Behave based on selection of car brand

var brands = [];

CRUD("https://c0de-l00p.github.io/fabrica/assets/json/brands.json", "GET", undefined, async function (res) {
    console.log("brands", res);
  brands = await res.data;
});

// $("#select_brands").change(function () {
//   let brand = this.value;

//   let carsOnBrand =
//     brand == ""
//       ? all_cars
//       : brands.find((brand) => find.data.attributes.name == brand);
//   carsOnBrand.cars.data?.forEach((car) =>
//     CreateACardFromData(car.attributes, car.id)
//   );
// });

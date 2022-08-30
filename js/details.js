const carID = sessionStorage.getItem("carID");
var all_cars = [];

//show car data by id from api
async function getCarData(carID) {
  CRUD("https://c0de-l00p.github.io/fabrica/assets/json/cars.json", "GET", undefined, function (res) {
    all_cars = res.data;
    console.log(res.data)
    let filtered = all_cars.find((car) => car.id == carID);
    console.log(filtered.attributes);
    CreateACardImgCarousel(filtered.attributes.imgs.data);
    AttachCarData(filtered.attributes);
    AttachCarMainInfo(filtered.attributes);
  });

  // await CRUD(
  //   "http://localhost:1337/api/cars/" + carID + "?populate=*",
  //   "GET",
  //   undefined,
  //   function (res) {
  //     console.log(res.data.attributes);
  //     CreateACardImgCarousel(res.data.attributes.imgs.data);
  //     AttachCarData(res.data.attributes);
  //     AttachCarMainInfo(res.data.attributes);
  //   }
  // );
}

getCarData(carID);

function CreateACardImgCarousel(imgs) {
  for (let img of imgs) {
    // let carouselItem = `<div class="carousel-item active">
    //     <img src="${img.attributes.url}" class="d-block w-100" alt="${img.attributes.url}">
    //   </div>`;

    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    carouselItem.classList.add("active");
    let image = document.createElement("img");
    image.setAttribute("src", img.attributes.url);
    image.classList.add("d-block");
    image.classList.add("w-100");

    carouselItem.appendChild(image);

    document.getElementById("div_car_carousel").appendChild(carouselItem);

    let thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", img.attributes.url);
    thumbnail.classList.add("m-1");
    thumbnail.classList.add("mt-2");
    thumbnail.classList.add("col-3");

    document.getElementById("thumbnails").appendChild(thumbnail);
  }
}

function AttachCarData(car) {
  document.getElementById("div_distance").innerHTML +=
    " " + car.distance + " KM";
  document.getElementById("div_petrol").innerHTML +=
    " " + car.is_electric ? " Electric" : " Petrol";
  document.getElementById("div_automatic").innerHTML += car.is_autogear
    ? " Automatic"
    : " Manual";
  document.getElementById("div_location").innerHTML += " " + car.located_in;
  document.getElementById("div_capacity").innerHTML +=
    " " + car.capacity + " L";
}

function AttachCarMainInfo(car) {
  let summary = document.createElement("h2");
  summary.innerHTML = `${car.brand.data.attributes.name}|${car.model}|${car.capacity}|${car.size}|AT|${car.located_in}`;

  let summaryTail = document.createElement("p");
  summaryTail.innerHTML = `${car.brand.data.attributes.name}, ${car.model} ${car.production}, ${car.color}`;

  let price = document.createElement("h2");
  price.classList.add("text-danger");
  price.classList.add("font-weight-bold");
  price.innerHTML = car.price + " EGP";

  let btns = document.getElementById("div_btns_to_order");
  document.getElementById("div_car_main_info").insertBefore(summary, btns);
  document.getElementById("div_car_main_info").insertBefore(summaryTail, btns);
  document.getElementById("div_car_main_info").insertBefore(price, btns);
}

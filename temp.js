let details = navigator.userAgent;

/* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
      it returns boolean value*/
let isMobileDevice = regexp.test(details);

// const root = ReactDOM.createRoot(
//   document.getElementById('swiper')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);
var root = document.querySelector(":root");

var appearCount = 0;

var appearanceBut = document.getElementById("appearanceBut");
var appearance = document.getElementById("appearance");

function changeAppearance() {
  appearCount++;

  if (appearCount % 2 == 0) {
    console.log("Light Mode");

    root.style.setProperty("--swiper-theme-color", "#222");
    root.style.setProperty("--backgroundColor", "#fff");
    root.style.setProperty("--fontColor", "#000");
    root.style.setProperty("--gridColor", "rgb(235, 235, 235)");
    root.style.setProperty("--warnColor", "rgba(200, 200, 200, 0.25)");
    root.style.setProperty("--graphLinesColor", "#e3e3e3");
    root.style.setProperty("--infoPanelColor", "rgb(245, 245, 245)");
    root.style.setProperty("--curtainColor", "rgba( 215, 215, 215, 0.25 )");

    // appearanceBut.style.fill = "var(--backgroundColor)";
    appearanceBut.style.stroke = "var(--graphLinesColor)";

    localStorage.setItem("Appearance", "Light");
  } else if (appearCount % 2 != 0) {
    console.log("Dark Mode");

    root.style.setProperty("--swiper-theme-color", "#fff");
    root.style.setProperty("--backgroundColor", "#0c0c0c");
    root.style.setProperty("--fontColor", "#fff");
    root.style.setProperty("--gridColor", "rgb(30, 30, 30)");
    root.style.setProperty("--warnColor", "rgba(30, 30, 30, 0.25)");
    root.style.setProperty("--graphLinesColor", "#2a2a2a");
    root.style.setProperty("--infoPanelColor", "rgb(35, 35, 35)");
    root.style.setProperty("--curtainColor", "rgba(0, 0, 0, 0.25 )");

    // appearanceBut.style.fill = "var(--backgroundColor)";
    appearanceBut.style.stroke = "var(--graphLinesColor)";

    localStorage.setItem("Appearance", "Dark");
  }
}

var testAppear = localStorage.getItem("Appearance");

if (testAppear == "Dark") {
  changeAppearance();
}

const menu = document.getElementById("swiperttt");

let dodf = document.getElementById("swiperttt");
let vall = Array.from(document.getElementsByClassName("vall"));
let bullet = Array.from(
  document.getElementsByClassName("swiper-pagination-bullet")
);

if (!isMobileDevice) {
  dodf.innerHTML +=
    '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';

  root.style.setProperty("--bulletGap", "6px");
  root.style.setProperty("--bulletSize", "10px");
} else {
  root.style.setProperty("--bulletGap", "30px");
  root.style.setProperty("--bulletSize", "12.5px");

  dodf.innerHTML +=
    '<div class="swiper-button-prev-mobile swiper-button-prev"></div><div class="swiper-button-next-mobile swiper-button-next"></div>';
}

var grid = document.getElementById("gridInput");
var fontSize = document.getElementById("fontSize");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 500,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },

  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// function changeGrid() {
//   // grid.value = 17;
//   var valt = grid.value;

//   // swiperttt.style.backgroundImage = ;

//   console.log(grid.value);
//   console.log(swiperttt.style.backgroundImage);
// }

// fontSize.addEventListener("onmouseover", function changeFontSize() {
//   // swiperttt.style. = "radial-gradient( rgb(244 244 244) " + grid.value + "%, transparent 9% );";
// });

if (!isMobileDevice) {
  console.log(isMobileDevice);
  // dodf.innerHTML +=
  //   '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';

  vall.forEach((item) => {
    item.style.fontSize = "3em";

    // console.log(item);
  });
} else {
  console.log(isMobileDevice);

  bullet.forEach((item) => {
    item.style.width =
      "var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 15px))";
    item.style.height =
      "var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 15px))";
    item.style.margin =
      "0 var(--swiper-pagination-bullet-horizontal-gap, 15px)";

    // console.log(item.style.fontSize);

    var css =
      ".swiper-pagination-bullet:hover {outline: 0px var(--swiper-pagination-bullet-inactive-color, #000) solid;outline-offset: 0px;transition: 0.25s ease} ";
    var style = document.createElement("style");

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    item.appendChild(style);
  });

  vall.forEach((item) => {
    if (!item.classList.contains("unitUnused")) {
      item.style.fontSize = "66.7px";
    }

    root.style.setProperty("--sliderFontSize", "66.7px");

    // console.log(item.style.fontSize);
  });

  menu.style.backgroundSize = "60px 60px";
}

var bodyEl = document.body;

setInterval(function () {
  swiper.on("slideChange", function () {
    menu.dataset.activeIndex = swiper.activeIndex;
    bodyEl.dataset.activeIndex = swiper.activeIndex;

    console.log(document.body.dataset.activeIndex);
  });

}, 200);

//Load these as the data saved in local storage
var c = localStorage.getItem("c");
var f = localStorage.getItem("f");
var h = localStorage.getItem("h");

function getDweets() {
    let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let data = JSON.parse(req.responseText);
        console.log(data.record);
        c = data.celsius;
        f = Math.round(data.fahrenheit);
        h = data.humidity;

            //Set for local storage
            localStorage.setItem("c", c);
            localStorage.setItem("f", f);
            localStorage.setItem("h", h);
      } else {
        console.error("Error fetching data:", req.status);
      }
    }
  };

  // Replace "your/data/path" if you want a specific node, or leave as root
  req.open(
    "GET",
    "https://tempmeter-52f5e-default-rtdb.firebaseio.com/.json",
    true
  );
  req.send();
}

setInterval(() => {
  getDweets();
}, 1500);

var temps = [94, 94, 91, 91, 88, 94, 98];
var highTemp;
var lowTemp;

const svg = document.getElementById("svg");

function getInfo() {}

var tempVal = document.getElementById("temp");
var humdVal = document.getElementById("humd");

tempVal.innerHTML = "--°";
humdVal.innerHTML = "--%";

var id = document.getElementById("svgLine");
// id.points[4].y=233;

var warnWrap = document.getElementById("warnWrap");

var celsiusOn = false;

var numbRun = 0;

var count = 0;

function showInfo() {
  highTemp = Math.max(...temps);
  lowTemp = Math.min(...temps);

  // console.log("0 " + lowTemp + " 160 " + highTemp + "");

  // svg.setAttribute('viewBox' , "0 " + lowTemp*2.5 + " 160 " + (highTemp - lowTemp)*2.5 + "");
  // svg.setAttribute('height' , "" + ((highTemp-lowTemp) + 20) + "");

  var points = "";

  temps.forEach((item, index) => {
    var place = highTemp - item + lowTemp;

    points += "" + (index * 20 + 20) + "," + place * 2.5 + " ";

    // console.log(points);
  });

  // id.setAttribute("points", points);

  if (celsiusOn) {
    tempVal.innerHTML = "" + c + "°";
  } else {
    tempVal.innerHTML = "" + f + "°";
  }

  humdVal.innerHTML = "" + h + "%";
      
  if(count != 0){
    if (c == null || f == null) {
      warnWrap.style.bottom = "50px";
      warnWrap.style.opacity = "1";
      tempVal.innerHTML = "--°";

      humdVal.innerHTML = "--%";
    } else {
      warnWrap.style.bottom = "-100px";
      warnWrap.style.opacity = "0";

      if (celsiusOn) {
        tempVal.innerHTML = "" + c + "°";
      } else {
        tempVal.innerHTML = "" + f + "°";
      }

      humdVal.innerHTML = "" + h + "%";
    }
  }
  
  count++;

  // localStorage.setItem("Font Size");
  // localStorage.setItem("Bullet Gap");
  // localStorage.setItem("Bullet Size");
  // localStorage.setItem("Graph Size");
  // localStorage.setItem("Humd Color");
  // localStorage.setItem("Temp Color");
  // localStorage.setItem("Accent Color");
  // localStorage.setItem("Grid Bullet Size");
}
var fontSze;
var gridSze;
var gridRadSze;
var bulletSze;
var bulletGap;
var tempClr;
var humdClr;
var accentClr;
var graphSze;
var graphClr;

localStorage.getItem("Font Size");
localStorage.getItem("Bullet Gap");
localStorage.getItem("Bullet Size");
localStorage.getItem("Graph Size");
localStorage.getItem("Graph Color");
localStorage.getItem("Humd Color");
localStorage.getItem("Temp Color");
localStorage.getItem("Accent Color");
localStorage.getItem("Grid Bullet Size");

function updateSettings() {
  localStorage.setItem("Font Size");
  localStorage.setItem("Bullet Gap");
  localStorage.setItem("Bullet Size");
  localStorage.setItem("Graph Size");
  localStorage.setItem("Graph Color");
  localStorage.setItem("Humd Color");
  localStorage.setItem("Temp Color");
  localStorage.setItem("Accent Color");
  localStorage.setItem("Grid Bullet Size");
}

setInterval(function ff() {
  showInfo();
}, 100);

// localStorage.setItem("Font Size", );
//   localStorage.setItem("Bullet Gap", );
//   localStorage.setItem("Bullet Size", );
//   localStorage.setItem("Graph Size", );
//   localStorage.setItem("Humd Color", );
//   localStorage.setItem("Temp Color", );
//   localStorage.setItem("Accent Color", );
//   localStorage.setItem("Grid Bullet Size", );

var fUnit = document.getElementById("tempF");
var cUnit = document.getElementById("tempC");

var unitUse = fUnit;

function changeUnit() {
  if (fUnit.classList.contains("unitUsed")) {
    fUnit.classList.remove("unitUsed");
    fUnit.classList.add("unitUnused");
    cUnit.classList.remove("unitUnused");
    cUnit.classList.add("unitUsed");

    root.style.setProperty(
      "--unitRight",
      cUnit.getBoundingClientRect().right + "px"
    );

    celsiusOn = true;
    showInfo();
    localStorage.setItem("Unit", "°C");

    unitUse = cUnit;
  } else {
    fUnit.classList.remove("unitUnused");
    fUnit.classList.add("unitUsed");
    cUnit.classList.remove("unitUsed");
    cUnit.classList.add("unitUnused");

    root.style.setProperty(
      "--unitRight",
      fUnit.getBoundingClientRect().right + "px"
    );

    celsiusOn = false;
    showInfo();
    localStorage.setItem("Unit", "°F");

    unitUse = fUnit;
  }
}

var unit = localStorage.getItem("Unit");

if (unit == "°C") {
  changeUnit();

  unitUse = cUnit;
}

setInterval(() => {
  root.style.setProperty(
    "--unitRight",
    unitUse.getBoundingClientRect().right -
      unitUse.parentElement.getBoundingClientRect().left +
      "px"
  );

}, 50);

// cUnit.parentElement.innerHTML = ;

// var unused = Array(document.getElementsByClassName('unitUnused'));

// unused.forEach(addEventListener('onclick', changeUnit()));

var infoPanel = document.getElementById("infopanel");
var curtian = document.getElementById("curtain");

function toggleInfo(){
  if (infoPanel.classList.contains("closed")){
    //Panel is closed, open the panel
    infoPanel.classList.remove("closed");
    curtian.classList.remove("closed");
  } else {
    infoPanel.classList.add("closed");
    curtian.classList.add("closed");
  }
}

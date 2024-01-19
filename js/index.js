document.addEventListener("DOMContentLoaded", function () {
  var list = document.getElementById("languageList");
  var listItems = list.getElementsByTagName("li");
  var delay = 200;

  function toggleList() {
    list.style.display = list.style.display === "none" ? "block" : "none";
  }

  function closeListWithDelay() {
    setTimeout(function () {
      list.style.display = "none";
    }, 3000);
  }

  function closeList() {
    list.style.display = "none";
  }

  function toggleLanguageList() {
    var languageList = document.getElementById("languageList");
    languageList.classList.toggle("visible");
  }

  function changeLanguage(language) {
    var selectedLanguage = document.getElementById("selectedLanguage");
    selectedLanguage.innerText = language;
  }

  function toggleUnderline(span) {
    var spans = document.querySelectorAll(".from_to span");
    spans.forEach(function (element) {
      element.classList.remove("active");
    });

    span.classList.add("active");
  }

  function toggleStationBox(button) {
    var stationBox = button.nextElementSibling;
    var currentOpacity = parseFloat(
      window.getComputedStyle(stationBox).getPropertyValue("opacity")
    );

    stationBox.style.opacity = currentOpacity === 0 ? 1 : 0;
  }

  function selectStation(station) {
    console.log("Selected station: " + station);

    setTimeout(function () {
      var stationBoxes = document.querySelectorAll(".station_box");
      stationBoxes.forEach(function (box) {
        box.style.opacity = 0;
      });
    }, delay);
  }

  function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    var day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentDateInput = document.getElementById("currentDate");
    currentDateInput.value = getCurrentDate();
  });

  function changeQuantity(number, value) {
    var inputElement = document.getElementById(number);
    var currentValue = parseInt(inputElement.value, 10);
    var newValue = currentValue + value;

    if (newValue >= 0 && newValue <= 9) {
      inputElement.value = newValue;
    }
  }

  // Swiper
  var swiper = new Swiper(".noti_slide", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    speed: 8000,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  });

  document.querySelector(".pl").addEventListener("click", toggleList);

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", closeList);
  }
  //travel swiper
  var swiper = new Swiper(".travel_imgslide", {
    slidesPerView: 3,
    // loop: true,
    // centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

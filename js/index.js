function changeQuantity(number_adult, value) {
    var inputElement = document.getElementById(number_adult);
    var currentValue = parseInt(inputElement.value, 10);
    var newValue = currentValue + value;

    if (newValue >= 0 && newValue <= 9) {
      inputElement.value = newValue;
    }
  }
  function changeQuantity(number_child, value) {
    var inputElement = document.getElementById(number_child);
    var currentValue = parseInt(inputElement.value, 10);
    var newValue = currentValue + value;

    if (newValue >= 0 && newValue <= 9) {
      inputElement.value = newValue;
    }
  }
  function changeQuantity(number_old, value) {
    var inputElement = document.getElementById(number_old);
    var currentValue = parseInt(inputElement.value, 10);
    var newValue = currentValue + value;

    if (newValue >= 0 && newValue <= 9) {
      inputElement.value = newValue;
    }
  }
    document.addEventListener("DOMContentLoaded", function () {
        var list = document.getElementById("languageList");
        var listItems = list.getElementsByTagName("li");
      
        function toggleList() {
          list.style.display = (list.style.display === "none") ? "block" : "none";
        }

        function closeListWithDelay() {
            setTimeout(function() {
              list.style.display = "none";
            }, 3000); // 500 밀리초 (0.5초) 딜레이 설정, 원하는 시간으로 조절 가능
          }
      
        function closeList() {
          list.style.display = "none";
        }
      
        document.querySelector(".pl").addEventListener("click", toggleList);
      
        for (var i = 0; i < listItems.length; i++) {
          listItems[i].addEventListener("click", closeList);
        }
      });

// 현재 날짜를 가져오기 위한 함수
function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1, 2자리로 패딩
    var day = currentDate.getDate().toString().padStart(2, '0'); // 일자도 2자리로 패딩
    return `${year}-${month}-${day}`;
  }

  // 페이지 로드 시 현재 날짜를 input에 설정
  document.addEventListener("DOMContentLoaded", function() {
    var currentDateInput = document.getElementById("currentDate");
    currentDateInput.value = getCurrentDate();
  });

      var delay = 200; // 딜레이 시간 (밀리초)

  function toggleStationBox(button) {
    var stationBox = button.nextElementSibling;
    var currentOpacity = parseFloat(window.getComputedStyle(stationBox).getPropertyValue('opacity'));

    if (currentOpacity === 0) {
      stationBox.style.opacity = 1;
    } else {
      stationBox.style.opacity = 0;
    }
  }

  function selectStation(station) {
    // 여기에 선택된 역에 대한 작업을 추가할 수 있습니다.
    console.log("Selected station: " + station);

    // 딜레이 후 .station_box 닫기
    setTimeout(function() {
      var stationBoxes = document.querySelectorAll(".station_box");
      for (var i = 0; i < stationBoxes.length; i++) {
        stationBoxes[i].style.opacity = 0;
      }
    }, delay);
  }
window.onload(){
  document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);
}
var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

function create_calendar_month(year, month) {
  var header_date = new Date(year, month);
  header_year = header_date.getFullYear();
  header_month = header_date.getMonth();
  header_text.innerHTML = months[header_month] + " " + header_year;
  content.innerHTML = "<tr><th>Do</th><th>Lu</th><th>Ma</th><th>Me</th><th>Gio</th><th>Ve</th><th>Sa</th></tr><tr></tr>";
  var first_day = new Date(year, month, 1).getDay();
  var prev_month_last_date = new Date(year, month, 0).getDate();
  for (var i = first_day - 1; i >= 0; i--) {
    var td = document.createElement('td');
    td.className = "prev_month";
    document.getElementsByTagName('tr')[1].appendChild(td);
    td.innerHTML = prev_month_last_date - i;
  }
  var j = first_day;
  var k = 1;
  for (var i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    if (j == 7) {
      content.appendChild(document.createElement('tr'));
      k++;
      j = 0;
    }
    var td = document.createElement('td');
    td.className = "curr_month";
    document.getElementsByTagName('tr')[k].appendChild(td);
    td.innerHTML = i;
    j++;
  }
  var i = 1;
  while (j < 7) {
    var td = document.createElement('td');
    td.className = "next_month";
    document.getElementsByTagName('tr')[k].appendChild(td);
    td.innerHTML = i++;
    j++;
  }
  if (today.getMonth() == month && today.getFullYear() == year) {
    document.getElementsByClassName('curr_month')[today.getDate() - 1].className += " today";
  }
  if (selected_month == month && selected_year == year) {
    document.getElementsByClassName('curr_month')[selected_date - 1].className += " selected";
  }
}

function start_animation() {
  header_text_new.innerHTML = header_text.innerHTML;
  content_new.innerHTML = content.innerHTML;
  calendar_new.style.display = "block";
  calendar_new.style.opacity = 1;
}

function animation() {
  var start = Date.now();
  var timer = setInterval(function() {
    var timepassed = Date.now() - start;
    calendar_new.style.opacity = 1 - timepassed / 500;
    if (timepassed > 500) {
      clearInterval(timer);
      calendar_new.style.display = "none";
    }
  }, 20);
}

function animation_left() {
  calendar.style.left = "-660px";
  calendar.style.zIndex = 1;
  var start = Date.now();
  var timer = setInterval(function() {
    var timepassed = Date.now() - start;
    calendar.style.left = timepassed * 1.32 - 660 + "px";
    if (timepassed > 500) {
      clearInterval(timer);
      calendar_new.style.display = "none";
      calendar.style.zIndex = 0;
      calendar.style.left = 0;
    }
  }, 10);
}

function animation_right() {
  var temp_div = document.createElement('div')
  temp_div.id = "white_block";
  document.getElementsByTagName('body')[0].appendChild(temp_div);
  calendar.style.left = "660px";
  calendar.style.zIndex = 1;
  var start = Date.now();
  var timer = setInterval(function() {
    var timepassed = Date.now() - start;
    calendar.style.left = 660 - timepassed * 1.32 + "px";
    if (timepassed > 500) {
      clearInterval(timer);
      calendar_new.style.display = "none";
      calendar.style.zIndex = 0;
      calendar.style.left = 0;
      document.getElementsByTagName('body')[0].removeChild(temp_div);
    }
  }, 10);
}

function month_today_mark() {
  if (today.getFullYear() == header_text.innerHTML) {
    document.getElementsByClassName("calendar_month")[today.getMonth()].className += " today";
  } else {
    document.getElementsByClassName("calendar_month")[today.getMonth()].className = "calendar_month";
  }
}

prev_butt.onclick = function() {
  start_animation();
  create_calendar_month(year, --month);
  animation_left();
}

next_butt.onclick = function() {
  start_animation();
  create_calendar_month(year, ++month);
  animation_right();
}

content.onclick = function() {
  start_animation();
  if (event.target.className == "curr_month") {
    if (document.getElementsByClassName("selected")[0]) {
      document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
    document.getElementsByClassName("curr_month")[event.target.innerHTML - 1].className += " selected";
    selected_date = event.target.innerHTML;
    selected_month = header_month;
    selected_year = header_year;
  }
  if (event.target.className == "curr_month today") {
    if (document.getElementsByClassName("selected")[0]) {
      document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
    selected_date = 0;
    selected_month = 0;
    selected_year = 0;
  }
  if (event.target.className == "calendar_month" || event.target.className == "calendar_month today") {
    var i = 0;
    for (i = 0; i < 12; i++) {
      if (months[i].substr(0, 3) == event.target.innerHTML) {
        break;
      }
    }
    year = header_year;
    month = i;
    create_calendar_month(year, month);
    calendar_type = "month";
  }
  animation();
}

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var header_year = year;
var header_month = month;
create_calendar_month(year, month);
var calendar_type = "month";
var selected_year = 0;
var selected_month = 0;
var selected_date = 0;
var first_period_yerar;

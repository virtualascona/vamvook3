function create_calendar_month(e,t){var a=new Date(e,t);header_year=a.getFullYear(),header_month=a.getMonth(),header_text.innerHTML=months[header_month]+" "+header_year,content.innerHTML="<tr><th>Do</th><th>Lu</th><th>Ma</th><th>Me</th><th>Gio</th><th>Ve</th><th>Sa</th></tr><tr></tr>";for(var n=new Date(e,t,1).getDay(),r=new Date(e,t,0).getDate(),l=n-1;l>=0;l--){var o=document.createElement("td");o.className="prev_month",document.getElementsByTagName("tr")[1].appendChild(o),o.innerHTML=r-l}for(var c=n,d=1,l=1;l<=new Date(e,t+1,0).getDate();l++){7==c&&(content.appendChild(document.createElement("tr")),d++,c=0);var o=document.createElement("td");o.className="curr_month",document.getElementsByTagName("tr")[d].appendChild(o),o.innerHTML=l,c++}for(var l=1;7>c;){var o=document.createElement("td");o.className="next_month",document.getElementsByTagName("tr")[d].appendChild(o),o.innerHTML=l++,c++}today.getMonth()==t&&today.getFullYear()==e&&(document.getElementsByClassName("curr_month")[today.getDate()-1].className+=" today"),selected_month==t&&selected_year==e&&(document.getElementsByClassName("curr_month")[selected_date-1].className+=" selected")}function start_animation(){header_text_new.innerHTML=header_text.innerHTML,content_new.innerHTML=content.innerHTML,calendar_new.style.display="block",calendar_new.style.opacity=1}function animation(){var e=Date.now(),t=setInterval(function(){var a=Date.now()-e;calendar_new.style.opacity=1-a/500,a>500&&(clearInterval(t),calendar_new.style.display="none")},20)}function animation_left(){calendar.style.left="-660px",calendar.style.zIndex=1;var e=Date.now(),t=setInterval(function(){var a=Date.now()-e;calendar.style.left=1.32*a-660+"px",a>500&&(clearInterval(t),calendar_new.style.display="none",calendar.style.zIndex=0,calendar.style.left=0)},10)}function animation_right(){var e=document.createElement("div");e.id="white_block",document.getElementsByTagName("body")[0].appendChild(e),calendar.style.left="660px",calendar.style.zIndex=1;var t=Date.now(),a=setInterval(function(){var n=Date.now()-t;calendar.style.left=660-1.32*n+"px",n>500&&(clearInterval(a),calendar_new.style.display="none",calendar.style.zIndex=0,calendar.style.left=0,document.getElementsByTagName("body")[0].removeChild(e))},10)}function month_today_mark(){today.getFullYear()==header_text.innerHTML?document.getElementsByClassName("calendar_month")[today.getMonth()].className+=" today":document.getElementsByClassName("calendar_month")[today.getMonth()].className="calendar_month"}var months=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];prev_butt.onclick=function(){start_animation(),create_calendar_month(year,--month),animation_left()},next_butt.onclick=function(){start_animation(),create_calendar_month(year,++month),animation_right()},content.onclick=function(){if(start_animation(),"curr_month"==event.target.className&&(document.getElementsByClassName("selected")[0]&&document.getElementsByClassName("selected")[0].classList.remove("selected"),document.getElementsByClassName("curr_month")[event.target.innerHTML-1].className+=" selected",selected_date=event.target.innerHTML,selected_month=header_month,selected_year=header_year),"curr_month today"==event.target.className&&(document.getElementsByClassName("selected")[0]&&document.getElementsByClassName("selected")[0].classList.remove("selected"),selected_date=0,selected_month=0,selected_year=0),"calendar_month"==event.target.className||"calendar_month today"==event.target.className){var e=0;for(e=0;12>e&&months[e].substr(0,3)!=event.target.innerHTML;e++);year=header_year,month=e,create_calendar_month(year,month),calendar_type="month"}animation()};var today=new Date,year=today.getFullYear(),month=today.getMonth(),header_year=year,header_month=month;create_calendar_month(year,month);var calendar_type="month",selected_year=0,selected_month=0,selected_date=0,first_period_yerar;

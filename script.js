
			function countdown(){
				var now=new Date();
				//var now=new Date(millseConds);
				//var now= new Date(dateString);
				//var eventDate= new Date(year,month,date,h,m,s,ms);
				var eventDate= new Date(2019,12,01);
				var currentTime=now.getTime();
				var eventTime=eventDate.getTime();
				var realTime=eventTime-currentTime;
				var s=Math.floor(realTime/1000);  // math.floor converts no. to its nearest integer
				var m=Math.floor(s/60);
				var h=Math.floor(m/60);
				var d=Math.floor(h/24);
				//everything is converted to hour,min, sec,date
				//time to find remaing hours,min ,sec


				h%=24;
				m%=60;
				s%=60;
				
					h=(h<10)?"0"+h:h;
					m=(m<10)?"0"+m:m;
					s=(s<10)?"0"+s:s;
					document.getElementById("days").textContent=d;
					document.getElementById("days").innerText=d;


					document.getElementById("hours").textContent=h;
					


					document.getElementById("minutes").textContent=m;
					document.getElementById("seconds").textContent=s;
				setTimeout(countdown,1000);
			}
			countdown();
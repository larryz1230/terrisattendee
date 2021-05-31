
var d = new Date();
var curdate = d.getDate();
var curhour = d.getHours();
var curmin = 0;




var minn = 0;
var $hands = $('#liveclock div.hand');
console.log(curdate + " " +  curhour + " "+ curmin);
movetimeforward(0);
function init(){
	d = new Date(2021, 5, curdate, curhour, (curmin/4)*15);
		updateclock();
}

// updateclock();

// window.requestAnimationFrame = window.requestAnimationFrame
// || window.mozRequestAnimationFrame
// || window.webkitRequestAnimationFrame
// || window.msRequestAnimationFrame
// || function(f){return setTimeout(f, 1000)}

// var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


function updateclock(){
   // var curdate = new Date()
   console.log("d.gethours:"+ d.getHours() + " " + d.getMinutes());
   var hour_as_degree = ( d.getHours() + d.getMinutes()/60 ) / 12 * 360
   var minute_as_degree = d.getMinutes() / 60 * 360
   // var second_as_degree = ( d.getSeconds() + d.getMilliseconds()/1000 ) /60 * 360
   $hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
   $hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
   // $hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })

   // console.log(hour_as_degree);
   // console.log(minute_as_degree);


 // requestAnimationFrame(updateclock) //
 // window.cancelAnimationFrame(updateclock);
 // console.log(second_as_degree)
}

// requestAnimationFrame(updateclock)
// updateclock();

function movetimeforward(time){
	if (curmin+time>=60){
		if (curhour==23){
			curdate++;
		}
		curhour++;
		curhour = curhour%24;
		
	}

	if (curmin+time<0){
		if (curhour==0){
			curdate--;
			curhour = 24;
		}
		curhour--;
		
	}

	if (time>0){
		curmin = Math.abs((curmin + time)%60);
	} else {
		curmin = curmin+120;
		curmin = curmin + time;
		curmin = curmin%60;
	}

	
	
	d = new Date(2021, 5, curdate, curhour, curmin);
	console.log(curdate + " " +  curhour + " "+ curmin);
	updateclock();
	return;
}

function movetimeback(){
	window.cancelAnimationFrame(updateclock);
}


// var mydata = JSON.parse(data);
// var length = mydata.length;
// for (var i=0; i<length; i++){
// 	console.log(mydata[i].eventd);
// }


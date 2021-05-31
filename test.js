// TODO: Make time boundaries


var dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var curdate = d.getDate();
var curhour = d.getHours();
var curmin = 0;
 console.log(d.getMonth() + " " + d.getDate());
document.getElementById('daytitle').innerHTML = dayofweek[d.getDay()] + " " + (d.getMonth()+1) + "/" +  d.getDate();




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
  d = new Date(2021, d.getMonth(), d.getDate(), d.getHours(), (d.getMinutes()+time));
  console.log(dayofweek[d.getDay()] + " " + d.getMonth() + " " + d.getDate() + " " +  d.getHours() + " "+ d.getMinutes());
  updateclock();
  document.getElementById('daytitle').innerHTML = dayofweek[d.getDay()] + " " + (d.getMonth()+1) + "/" +  d.getDate();
  print();
  return;
}

function movetimeback(){
  window.cancelAnimationFrame(updateclock);
}


// var mydata = JSON.parse(data);
// var length = mydata.length;
// for (var i=0; i<length; i++){
//  console.log(mydata[i].eventd);
// }

function skipday(direction){
  console.log(direction);
  d = new Date(d.getYear(), d.getMonth(), (d.getDate()+direction), d.getHours(), d.getMinutes());
  movetimeforward(0);
  print();
}




print();


function print(){

  fetch('data.json')
      .then(response => response.json())
      .then(data => {
        appendData(data);
      })
      // .then(console.log);

  }


  function appendData(data){
    var table = document.getElementById('events');
    table.innerHTML = "";
      console.log(data);
      for(var i = 0; i < data.length; i++){
        console.log(data[i].monthstart + " " + (d.getMonth()+1));
        if (data[i].daystart==d.getDate()){
          if (data[i].monthstart==(d.getMonth()+1)){
            if (data[i].hourstart==d.getHours()){
              var row = 
        `<tr style="background-color:#6b6464">
          <td style="width: 10%;">${data[i].hourstart + ":" + data[i].minstart}</td>
          <div style="display:block;">
            <td style="width: 60%;">${data[i].eventd}</td>
            <td style="width: 30%;">${data[i].location}</td>
          </div>
        </tr>`
        table.innerHTML += row;
            } else{
        var row = 
        `<tr>
          <td style="width: 10%;">${data[i].hourstart + ":" + data[i].minstart}</td>
          <div style="display:block;">
            <td style="width: 60%;">${data[i].eventd}</td>
            <td style="width: 30%;">${data[i].location}</td>
          </div>
        </tr>`
        table.innerHTML += row;
      }
      }
    }
      }
  }
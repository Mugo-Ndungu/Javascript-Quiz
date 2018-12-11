// var ansOne = $("input[name='ques1']:checked").val();
// var ansTwo = $("input[name='ques2']:checked").val();
// var ansThree = $("input[name='ques3']:checked").val();
// var ansFour = $("input[name='ques4']:checked").val();
// var ansFive = $("input[name='ques5']:checked").val();
// var ansSix = $("input[name='ques6']:checked").val();
// var ansSeven = $("input[name='ques7']:checked").val();
// var ansEight = $("input[name='ques8']:checked").val();
// var ansNine = $("input[name='ques9']:checked").val();
// var ansTen = $("input[name='ques10']:checked").val();
// var correctScore = 0;

// document.addEventListener('DOMContentLoaded', function() {
//   particleground(document.getElementById('particles'), {
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });
//   var intro = document.getElementById('intro');
//   intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
// }, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/


function checkAns() {
  var correctScore = 0;
  var ansOne = document.querySelector('input[name="ques1"]:checked').value;
  var ansTwo = document.querySelector('input[name="ques2"]:checked').value;
  var ansThree = document.querySelector('input[name="ques3"]:checked').value;
  var ansFour = document.querySelector('input[name="ques4"]:checked').value;
  var ansFive = document.querySelector('input[name="ques5"]:checked').value;
  var ansSix = document.querySelector('input[name="ques6"]:checked').value;
  var ansSeven = document.querySelector('input[name="ques7"]:checked').value;
  var ansEight = document.querySelector('input[name="ques8"]:checked').value;
  var ansNine = document.querySelector('input[name="ques9"]:checked').value;
  var ansTen = document.querySelector('input[name="ques10"]:checked').value;



  if (ansOne === "d") {
    correctScore += 10;
  }
  if (ansTwo === "a") {
    correctScore+=10;
  }
  if (ansThree === "c") {
    correctScore+=10;
  }
  if (ansFour === "b") {
    correctScore+=10;
  }
  if (ansFive === "d") {
    correctScore+=10;
  }
  if (ansSix === "c") {
    correctScore+=10;
  }
  if (ansSeven === "d") {
    correctScore+=10;
  }
  if (ansEight === "a") {
    correctScore+=10;
  }
  if (ansNine === "b") {
    correctScore+=10;
  }
  if (ansTen === "a") {
    correctScore+=10;
  }
  $("#formDiv").hide();
  $("#results").show();
  $('#result').text(correctScore);

}
function reset() {
$("#formDiv").show();
$("#results").hide();
location.reload();

}

// $(".results").hide();

//
// particlesJS('particles-js',
//
//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }
//
// );


var ansOne = $("input[name='ques1']:checked").val();
var ansTwo = $("input[name='ques2']:checked").val();
var ansThree = $("input[name='ques3']:checked").val();
var ansFour = $("input[name='ques4']:checked").val();
var ansFive = $("input[name='ques5']:checked").val();
var ansSix = $("input[name='ques6']:checked").val();
var ansSeven = $("input[name='ques7']:checked").val();
var ansEight = $("input[name='ques8']:checked").val();
var ansNine = $("input[name='ques9']:checked").val();
var ansTen = $("input[name='ques10']:checked").val();
var correctScore = 0;

$(document).ready(function() {
  $('body').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});


function checkAns() {
  if (ansOne == "") {correctScore++;}
  if (anstwo == "") {correctScore++;}
  if (ansThree == "") {correctScore++;}
  if (ansFour == "") {correctScore++;}
  if (ansFive == "") {correctScore++;}
  if (ansSix == "") {correctScore++;}
  if (ansSeven == "") {correctScore++;}
  if (ansEight == "") {correctScore++;}
  if (ansNine == "") {correctScore++;}
  if (ansTen == "") {correctScore++;}
}

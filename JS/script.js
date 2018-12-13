$(document).ready(function() {

  $("#check").click(function() {

    var correctScore = 0;
    var ansOne = ($('input[Type = radio][name="ques1"]:checked').val());
    var ansTwo = ($('input[Type = radio][name="ques2"]:checked').val());
    var ansThree = ($('input[Type = radio][name="ques3"]:checked').val());
    var ansFour = ($('input[Type = radio][name="ques4"]:checked').val());
    var ansFive = ($('input[Type = radio][name="ques5"]:checked').val());
    if (ansOne === undefined || ansTwo === undefined || ansThree === undefined || ansFour === undefined || ansFive === undefined) {
      $('#attempquestions').text('All Questions must be answered!!');
      $('#attempquestions').toggle(2000);

    } else {
      if (ansOne === "d") {
        correctScore += 20;
      }
      if (ansTwo === "a") {
        correctScore += 20;
      }
      if (ansThree === "c") {
        correctScore += 20;
      }
      if (ansFour === "b") {
        correctScore += 20;
      }
      if (ansFive === "d") {
        correctScore += 20;
      }

      $("#formDiv").hide(2000);
      $("#results").show(2000);
      $("#result").text("Your Score IS:"+correctScore);
    }
  });
  $("#reset").click(function() {
    $("#formDiv").show(2000);
    $("#results").hide(2000);
    location.reload();

  })
});

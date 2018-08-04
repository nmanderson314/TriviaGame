//show one question at a time
//add a timeout to the question
//question changes if a)user answers correctly or b) timer runs out
//if correct answer - show answer was correct
//if the user is wrong or runs out of time, show that they were wrong and display the correct answer
//final screen: show score and 

//billy eichner's Immigrant or "Real" American

//real american: ted bundy, unibomber, casey anthony, 
//immigrants: nikola tesla, lupita nyongo, ryan reynolds, ALEJANDRO GONZÁLEZ IÑÁRRITU 



//!! LINK OUT TO CHARITY SITES
//link to clip https://www.youtube.com/watch?v=E9KLxtL1rxs


var all = ["NIKOLA TESLA", "ALEJANDRO GONZÁLEZ IÑÁRRITU", "RYAN REYNOLDS", "LUPITA NYONGO", "TED BUNDY","THE UNIBOMBER","CASEY ANTHONY","JEFFREY DAHMER"];
var classI = ["NIKOLA TESLA", "ALEJANDRO GONZÁLEZ IÑÁRRITU", "RYAN REYNOLDS", "LUPITA NYONGO"];
var classA = ["TED BUNDY","THE UNIBOMBER","CASEY ANTHONY","JEFFREY DAHMER"];
var random = '';
var correctAnswer = false;
var correctCount = 0;
var incorrectCount = 0;
var answered = false;


function go(){
    $(".instruction").css('visibility', 'hidden');
    $("#goBtn").css('visibility', 'hidden');
    $("#clock").css('visibility', 'visible');
    setTimeout(function() {
        end();
        }, 60000);
};

function end(){
    $(".instruction").css('visibility', 'visible');
    $("#goBtn").css('visibility', 'visible');
}

function nextQuestion(){
    random = all[(Math.floor(Math.random() * 8))];
    console.log(random);
    $("#name").empty();
    $("#answer").empty();
    answered = false;
    correctAnswer = false;
    $("#name").append(random);

    return random;
};

if(random == ''){
    nextQuestion();
}

$("#immigrantBtn").click(function(){
    answered = true;
    if(classI.indexOf(random) > -1){
        $("#answer").empty();
        $("#answer").append("CORRECT!");
        correctAnswer = true;
        ++correctCount;
    }
});

$("#americanBtn").click(function(){
    answered = true;
    if(classA.indexOf(random) > -1){
        $("#answer").empty();
        $("#answer").append("CORRECT!");
        correctAnswer=true;
        ++correctCount;
    }
});

$(".btn").click(function(){
    if(answered === true){
        if(correctAnswer === false){
            $("#answer").empty();
            $("#answer").append("WRONG!!!");
            ++incorrectCount;
        };
    
        setTimeout(function() {
            nextQuestion();
            }, 1000);
    };
})

$("#goBtn").click(function(){
    go();
})



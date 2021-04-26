// This file holds functions for parsing the data
import { json } from "body-parser"
function reformatData(data) {
    //in parse data...
    var allData = [];
    var Heinz = ["steal the money from his work", "blackmail someone for the money", "commit credit card fraud", "get the medicine by stealing","sell his own medication", "sell all his clothes for money", "go on strike until wages increase", "try other medicines at random","be given the medicine by a doctor", "inherit money from a close relative", "receive the money from a stranger", "discover a cheap new medicine","use a generic medication instead", "buy a different insurance plan", "enroll in federal healthcare", "borrow the money from a bank","be given the money by a turtle", "make the money time traveling", "grow the money on a tree", "get the money by clapping"];
    var Josh = ["steal another person's car", "take a taxi without paying", "take another driver hostage", "sneak onto public transportation","book a flight for next year", "sell car for ride to airport", "pay 1000 dollars for a ride", "try to run there in time","beckon a friend passing by", "convince the airport to delay flight", "get a stranger to drive him", "arrange for a private plane","reschedule for a later flight", "ask the gas station clerk for help", "call a friend for a ride", "take public transportation","get a new car by thinking", "ride a cat to the airport", "teleport himself to the airport", "levitate and fly to the airport"];
    var Brian = ["overcharge the next customers", "steal money from a coworker", "lie about how much the bakery sold", "give new customers incorrect change","close the store five hours early", "pay with his retirement fund", "try to invent new pastries", "discount food to encourage tipping","find the money on the ground", "discover the money is in his pocket", "get a child to donate the money", "receive a 100 dollar tip","explain the situation to his boss", "ask other employees what to do", "use money from his own wallet", "borrow money from a friend","turn the cash register invisible", "use some monopoly money instead", "take pictures of missing bills", "get the money by sneezing"];
    var Mary = ["quickly copy someone's homework", "put her name on a friend's homework", "forge an excuse note", "lie about being sick to go home","ask her mom to FedEx the homework", "look under the lunchroom tables", "turn in a completely blank page", "turn in last week's homework again","discover her teacher is absent", "learn school is canceled today", "remember she has an extra copy", "be given an A by mistake","run home to get her homework", "bring in her homework tomorrow", "explain what happened to her teacher", "quickly redo the homework assignment","have her homework teleported", "remind herself yesterday evening", "turn in several socks instead", "erase the teacher's memory"];
    var Brad = ["secretly take his friends' food", "leave the weakest people behind", "rob other hikers they meet", "kill his friend's dog for food","go hunting for water buffalo", "eat random berries and leaves", "each venture off independently", "eat all their food immediately","find thermal vents to keep warm", "find a stream showing the path", "meet a former expedition guide", "find an abandoned bear cave","stay put and wait for help", "get more food by hunting and fishing", "build a large fire to alert rescuers", "create a shelter to stay warm","use his mind to keep everyone warm", "make new jackets from pine trees", "alert airplanes overhead by yelling", "grind up rocks for food"];
    var Liz = ["go for a run outside instead", "decide to lift weights at home", "pay for a one-day gym pass", "renew her gym membership","decide to never exercise again", "try again in three minutes", "complain in a foreign language", "run back and forth in the lobby","turn invisible and go in", "wish all gyms to be free forever", "renew her membership by blinking", "turn her hat into a gym pass","take someone else's gym card", "claim she left her wallet inside", "sneak past the gym attendant", "go in the back door without paying","learn the gym stopped checking IDs", "receive a free lifetime membership", "find a one-day pass in purse", "discover the gym is free today"];
    var Sam = ["try another credit card", "pay his date back later", "write a paper check instead", "go to a nearby ATM","start cooking in the restaurant’s kitchen","order an entire second meal", "never eat Italian food again","run around the restaurant screaming","wish money into his account","collect money off a tree","make the restaurant food free","summon money out of thin air","take money from the cashier","sneak out of the restaurant","steal money from his date","pretend dinner made him sick","be given a free meal","have a stranger pay","find a $100 gift card","pay with European money"];
    var Sara = ["ask for an exam extension","study hard the whole night","participate in a study session","ask her professor for help","drop out of the college","try to answer every question incorrectly","turn in last month’s exam","start studying after the exam","pause time to study","acquire a photographic memory","upload the answers to her brain","read her smartest classmate’s mind","lie about a family emergency","copy her classmate’s answers","poison her professor before class","pull the fire alarm during testing","guess correctly on most questions","have her professor excuse her","find out the test is cancelled","realize the test is optional"];
    var Bob = ["admit that the bag is missing","help her search for the bag","report the missing bag","ask other people what they saw","start singing famous opera ballads","build a new bag out of pencils","wait for the thief to return it","look for the bag on the ceiling","teleport to the bag’s location","summon the bag with a magic wand","erase the woman’s memory","undo the past few events","leave before the woman returns","lie that the bag was stolen at gunpoint","blame another person at the library","pretend to be deaf","convince her she doesn’t need it","see the thief walking by with the bag","discover the woman deliberately hid it","realize the bag was never missing"];
    var Emily = ["promise him cake when he gets home","go buy a nut-free dessert","serve ice cream instead","give the child a toy instead","hide the forks from everyone","postpone the party for a month","send everyone home early","explain the history of cake","zap the nuts from the cake","modify genetics to eliminate allergies","pull the allergy out of him","convince him to not have a reaction","lie that the cake is nut-free","kick the child out of the party","reprimand him for inconveniencing everyone","blame the child’s parents for genetics","discover a nut-free cake in her bag","invent an anti-allergy remedy","learn that the child was lying","learn that the child doesn’t want cake"]
    var demo1 = JSON.parse(data[1]["responses"]);
    //var demo2 = JSON.parse(data[3]["responses"]);
    var first_vignette_index = 24;
    var num_vignettes = 10;
    var num_q_per_vignette = 20;
    var crt_index = first_vignette_index + num_vignettes + (num_vignettes*2*num_q_per_vignette)
    var crtData = ["hi"]; //Object.values(JSON.parse(data[crt_index]["responses"]));
    var baiData = ["hello"]; //Object.values(JSON.parse(data[crt_index+1]["responses"]));
    var bdiData = ["hey"]; //Object.values(JSON.parse(data[crt_index+2]["responses"]));
    var warmup_index = 3;
    var num_warmup_trials = 20;
    var trial = {};
    var view_time = 0;
    var trial_vignette_order = 0;
    var trial_vignette = "warmup";
    var stim_order = 0;
    var i = warmup_index;
    while(i <= num_warmup_trials) {
        var trialData = {};
        //demographic info
        trialData.id = demo1["Q7"]
        trialData.age = demo1["Q0"];
        trialData.gender = demo1["Q5"];
        trialData.hand = demo1["Q1"];
        trialData.education = demo1["Q6"];
        trialData.language = demo1["Q2"];
        trialData.country = demo1["Q4"];
        trialData.nationality = demo1["Q3"];
        //anxiety inventory
        trialData.crt = crtData;
        trialData.bai = baiData;
        trialData.bdi = bdiData;
        //trial specific info
        trial = data[i];
        trialData.vignette = trial_vignette;
        trialData.vignette_order = trial_vignette_order;
        trialData.rt_vignette = view_time;
        trialData.stimulus = trial["stimulus"];
        trialData.stimulus_order = i-4;
        trialData.modal_type = "";
        trialData.speed = trial.speed;
        // I added trialData.modal
        trialData.modal = trial.modal;
        trialData.response = "";
        trialData.correct = trial.correct;
        trialData.rt_trial = trial["rt"];
        allData.push(trialData);
        i = i+1;
    }
    //vignette trials
    i = first_vignette_index;
    for(var j=0; j<num_vignettes; j++) {
        trial_vignette_order = trial_vignette_order + 1;
        var s = data[i+1]["stimulus"];
        var v = "";
        if (Heinz.includes(s)) v = "Heinz";
        else if (Josh.includes(s)) v = "Josh";
        else if (Brian.includes(s)) v = "Brian";
        else if (Mary.includes(s)) v = "Mary";
        else if (Brad.includes(s)) v = "Brad";
        else if (Liz.includes(s)) v = "Liz";
        else if (Sam.includes(s)) v = "Sam";
        else if (Sara.includes(s)) v = "Sara";
        else if (Bob.includes(s)) v = "Bob";
        else v = "Emily";
        trial_vignette = v;
        stim_order = 1;
        trial = data[i];
        view_time = trial["rt"];
        i=i+1;
        for(var k=0; k<num_q_per_vignette; k=k+1) {
            trial = data[i];
            trialData = {};
            //demographic info
            trialData.id = demo1["Q7"]
            trialData.age = demo1["Q0"];
            trialData.gender = demo1["Q5"];
            trialData.hand = demo1["Q1"];
            trialData.education = demo1["Q6"];
            trialData.language = demo1["Q2"];
            trialData.country = demo1["Q4"];
            trialData.nationality = demo1["Q3"];
            //anxiety inventory
            trialData.crt = crtData;
            trialData.bai = baiData;
            trialData.bdi = bdiData;
            //trial specific info
            trialData.vignette = trial_vignette;
            trialData.vignette_order = trial_vignette_order;
            trialData.rt_vignette = view_time;
            trialData.stimulus_order = stim_order;
            trialData.stimulus = trial["stimulus"];
            trialData.modal_type = trial.modal_type;
            trialData.speed = trial.speed;
            trialData.response = trial["answered"];
            trialData.correct = (trialData.response == trialData.modal_type);
            trialData.rt_trial = trial["rt"];
            stim_order = stim_order+1;
            allData.push(trialData);
            i = i+2;
        }
    }
    return allData;
}

export function makeQuery(data) {
    console.log("Parsing data");
    data = JSON.parse(JSON.stringify(data));
    data = reformatData(data);
    console.log("done");
    var keys = "";
    var keyArr = Object.keys(data[0]);
    for(var i=0; i<keyArr.length; i++) {
        keys = keys.concat(keyArr[i] + ", ");
    }
    keys = "(" + keys.substring(0, keys.length-2) + ")";
    var valuesList = [];
    var x = 0;
    for(var i=0; i<data.length; i++) {
        var dict = data[i];
        valuesList[x] = "";
        var valArray = Object.values(dict);
        for(var j=0; j<valArray.length; j++) {
            valuesList[x] = valuesList[x].concat('"' + valArray[j] + '", ');
        }
        x++;
    }
    var valuesStr = ""
    for (var i=0; i<valuesList.length; i++) {
        var values = valuesList[i];
        values = "(" + values.substring(0, values.length-2) + ")";
        valuesStr = valuesStr + values + ", ";
    }
    valuesStr = valuesStr.substring(0, valuesStr.length-2);
    //console.log("INSERT INTO responses" + keys + " " + "VALUES " + valuesStr + ";");
    return("INSERT INTO ind_diff" + keys + " " + "VALUES " + valuesStr + ";");
}
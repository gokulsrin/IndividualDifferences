// This file holds functions for parsing the data 

import { json } from "body-parser"

function reformatData(data) {
    //in parse data...
    var allData = [];
    var Heinz = ["steal the money from his work", "blackmail someone for the money", "commit credit card fraud", "get the medicine by stealing","sell his own medication", "sell all his clothes for money", "go on strike until wages increase", "try random other medicines","be given the medicine by a doctor", "inherit money from a close relative", "receive the money from a stranger", "discover a cheap new medicine","sells some of his stocks or bonds", "use a generic medication instead", "buy a different insurance plan", "enroll in federal healthcare", "borrow the money from a bank", "be given the money by a friend", "loan the money from his family", "sell an extra car for the money","be given the money by a turtle", "make the money time traveling", "grow the money on a tree", "get the money by clapping"];
    var Josh = ["steal another person's car", "take a taxi without paying", "take another driver hostage", "sneak onto public transportation","book a flight for next year", "sell car for ride to airport", "pay 1000 dollars for a ride", "try to run there in time","beckon a friend passing by", "convince airport to delay flight", "get a stranger to drive him", "arrange for a private plane","reschedule for a later flight", "ask the gas station clerk for help", "take the public bus there", "request aiport shuttle pickup", "ask a relative to pick him up", "hail a taxi at the intersection", "call a friend for a ride", "take public transportation","get a new car by thinking", "ride a cat to the airport", "teleport himself to the airport", "levitate and fly to the airport"];
    var Brian = ["overcharge the next customers", "steal money from a coworker", "lie about how much the bakery sold", "give new customers incorrect change","close the store five hours early", "pay with his retirement fund", "try to invent new pastries", "discount food to encourage tipping","find the money on the ground", "discover the money is in his pocket", "get a child to donate the money", "receive a 100 dollar tip","explain the situation to his boss", "ask other employees what to do", "get a payday advance loan", "sell something he owns for money", "use money from his own wallet", "add in money from his daily tips", "borrow money from a friend", "write a check for $50.75","turn the cash register invisible", "use some monopoly money instead", "take pictures of missing bills", "get the money by sneezing a lot"];
    var Mary = ["quickly copy someone's homework", "put her name on a friend's homework", "forge an excuse note", "lie about being sick to go home","ask her mom to FedEx the homework", "look under the lunchroom tables", "turn in a completely blank page", "turn in last week's homework again","discover her teacher is absent", "learn school is canceled today", "remember she has an extra copy", "be given an A by mistake","run home to get her homework", "bring in her homework tomorrow", "ask for an extra-credit assignment", "ask her mom what she should do", "explain what happened to her teacher", "quickly redo the homework assignment", "ask her mom to bring the homework", "have her parents call the teacher","have her homework teleported", "remind herself yesterday evening", "turn in several socks instead", "erase the teacher's memory"];
    var Brad = ["secretly take his friends' food", "leave the weakest people behind", "rob other hikers they meet", "kill his friend's pet dog for food","go hunting for water buffalo", "eat random berries and leaves", "each venture off independently", "eat all their food immediately","find thermal vent to keep warm", "find stream showing the path out", "meet a former expedition guide", "find an abandoned bear cave","stay put and wait for help", "follow a river out of the wilderness", "alert rescuers with emergency flares", "find a river for fresh water and fish", "get more food by hunting and fishing", "build a large fire to alert rescuers", "create a shelter to stay warm", "be found by the rescue crew","use his mind to keep everyone warm", "make new jackets from pine trees", "alert airplanes overhead by yelling", "grind up rocks for food and water"];
    var Liz = ["wait to go to the gym tomorrow", "go for a run outside instead", "decide to lift weights at home", "eat lunch instead of working out", "use a friend's guest pass", "pay for a one-day gym pass", "be allowed in just this once", "renew her gym membership","decide to never exercise again", "try again in three minutes", "complain in a foreign language", "run back and forth across lobby","turn invisible and go in", "wish all gyms to be free forever", "renew her membership by blinking", "turn her hat into a gym pass","take someone else's gym card", "claim she left her wallet inside", "sneak past the gym attendant", "go in the back door without paying","learn the gym stopped checking IDs", "receive a free lifetime membership", "find a one-day pass in purse", "discover the gym is free today"];
    

    var demo1 = JSON.parse(data[2]["responses"]);
    var demo2 = JSON.parse(data[3]["responses"]);
    var vignette_trials = [26, 59, 126, 193, 260, 327];
    var i = 5;
    var view_time = 0;
    var trial_vignette_order = 0;
    var trial_vignette = "warmup";
    var stim_order = 0;
    while(i < 393) {
        var trialData = {};
        trialData.subject_id = JSON.parse(data[1]["responses"]).subject_id;
        trialData.age = demo1["Q0"];
        trialData.lang = demo1["Q1"];
        trialData.nationality = demo1["Q2"];
        trialData.country = demo1["Q3"];
        trialData.gend = demo2["Q0"];
        trialData.hand = demo2["Q1"];
        trialData.education = demo2["Q2"];
        var trial = data[i];
        if(i < 25) { //warmup
            trialData.vignette = trial_vignette;
            trialData.vignette_order = trial_vignette_order;
            trialData.vignette_view_time = view_time;
            trialData.stimulus = trial["stimulus"];
            trialData.stimulus_order = i-4;
            //trialData[key_press] = trial[key_press];
            trialData.response = "" //why isn't this recorded in warmup?
            trialData.correct = trial.correct;
            trialData.rt = trial["rt"];
            i = i+1;
        }
        else {
            if(i == 25) {
                i = i+1;
            }
            if(vignette_trials.includes(i)) {
                trial_vignette_order = trial_vignette_order + 1;
                var s = data[i+1]["stimulus"];
                var v = "";

                if (Heinz.includes(s)) {
                    v = "Heinz";
                }
                else if (Josh.includes(s)) {
                    v = "Josh";
                }
                else if (Brian.includes(s)) {
                    v = "Brian";
                }
                else if (Mary.includes(s)) {
                    v = "Mary";
                }
                else if (Brad.includes(s)) {
                    v = "Brad";
                }
                else {
                    v = "Liz";
                }
                trial_vignette = data[i+1]["stimulus"];
                view_time = trial["rt"];
                i = i+1;
                trial = data[i];
                stim_order = 1;
            }
            trialData.vignette = trial_vignette;
            trialData.vignette_order = trial_vignette_order;
            trialData.vignette_view_time = view_time;
            trialData.stimulus = trial["stimulus"];
            trialData.stimulus_order = stim_order;
            trialData.modal_type = trial.modal_type;
            trialData.response = trial["answered"];
            trialData.correct = trialData.response == trialData.modal_type;
            trialData.rt = trial["rt"];
            stim_order = stim_order+1;
            i = i+2;
        }
        allData.push(trialData); //this is a list of the data from each trial, where the data recorded from each trial is:
                                    //subject_id, gender, age, education, hand, vignette, vignette_order, vignette_view_time, stimulus, stimulus_order, modal_type, response, correct, rt
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
    //console.log(valuesStr);
    return("INSERT INTO responses" + keys + " " + "VALUES " + valuesStr + ";");
}
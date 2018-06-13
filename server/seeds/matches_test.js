require('dotenv').config();
let Database = require('../config/database');
let Match = require('../models/match');
let mongoose = require('mongoose');
let async = require('async');

mongoose.Promise = global.Promise;


function finish() {
    process.exit();
}

//Declare all products
let match_list = [
    {
        match_id: "1",
        local_team: "RUSIA",
        visitor_team: "ARABIA SAUDITA",
        date: new Date("2018-04-14T10:00Z"),
        localScore: 2,
        visitorScore: 1,
        type: "Grupos",
        group: "A"
    },
    {
        match_id: "2",
        local_team: "EGIPTO",
        visitor_team: "URUGUAY",
        date: new Date("2018-04-15T07:00"),
        localScore: 1,
        visitorScore: 2,
        type: "Grupos",
        group: "A"

    },
    {
        match_id: "3",
        local_team: "MARRUECOS",
        visitor_team: "IRÁN",
        date: new Date("2018-04-15T10:00Z"),
        localScore: 1,
        visitorScore: 1,
        type: "Grupos",
        group: "B"

    },
    {
        match_id: "4",
        local_team: "PORTUGAL",
        visitor_team: "ESPAÑA",
        date: new Date("2018-04-15T13:00Z"),
        localScore: 3,
        visitorScore: 1,
        type: "Grupos",
        group: "B"

    },
    {
        match_id: "5",
        local_team: "FRANCIA",
        visitor_team: "AUSTRALIA",
        date: new Date("2018-04-16T05:00Z"),
        localScore: 0,
        visitorScore: 0,
        type: "Grupos",
        group: "C"

    },
    {
        match_id: "6",
        local_team: "ARGENTINA",
        visitor_team: "ISLANDIA",
        date: new Date("2018-04-16T08:00Z"),
        localScore: 2,
        visitorScore: 2,
        type: "Grupos",
        group: "D"


    },
    {
        match_id: "7",
        local_team: "PERÚ",
        visitor_team: "DINAMARCA",
        date: new Date("2018-04-16T11:00Z"),
        localScore: 1,
        visitorScore: 2,
        type: "Grupos",
        group: "C"

    },
    {
        match_id: "8",
        local_team: "CROACIA",
        visitor_team: "NIGERIA",
        date: new Date("2018-04-16T14:00Z"),
        localScore: 2,
        visitorScore: 2,
        type: "Grupos",
        group: "D"

    },
    // {
    //     match_id: "9",
    //     local_team: "COSTA RICA",
    //     visitor_team: "SERBIA",
    //     date: new Date("2018-04-17T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    // },
    // {
    //     match_id: "10",
    //     local_team: "ALEMANIA",
    //     visitor_team: "MÉXICO",
    //     date: new Date("2018-04-17T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    // },
    // {
    //     match_id: "11",
    //     local_team: "BRASIL",
    //     visitor_team: "SUIZA",
    //     date: new Date("2018-04-17T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    //
    // },
    // {
    //     match_id: "12",
    //     local_team: "SUECIA",
    //     visitor_team: "COREA DEL SUR",
    //     date: new Date("2018-04-18T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    //
    // },
    // {
    //     match_id: "13",
    //     local_team: "BÉLGICA",
    //     visitor_team: "PANAMÁ",
    //     date: new Date("2018-04-18T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    //
    // },
    // {
    //     match_id: "14",
    //     local_team: "TÚNEZ",
    //     visitor_team: "INGLATERRA",
    //     date: new Date("2018-04-18T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    //
    // },
    // {
    //     match_id: "15",
    //     local_team: "COLOMBIA",
    //     visitor_team: "JAPÓN",
    //     date: new Date("2018-04-19T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "16",
    //     local_team: "POLONIA",
    //     visitor_team: "SENEGAL",
    //     date: new Date("2018-04-19T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "17",
    //     local_team: "RUSIA",
    //     visitor_team: "EGIPTO",
    //     date: new Date("2018-04-19T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "A"
    //
    //
    // },
    // {
    //     match_id: "18",
    //     local_team: "PORTUGAL",
    //     visitor_team: "MARRUECOS",
    //     date: new Date("2018-04-20T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "B"
    //
    //
    // },
    // {
    //     match_id: "19",
    //     local_team: "URUGUAY",
    //     visitor_team: "ARABIA SAUDITA",
    //     date: new Date("2018-04-20T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "A"
    //
    //
    // },
    // {
    //     match_id: "20",
    //     local_team: "IRÁN",
    //     visitor_team: "ESPAÑA",
    //     date: new Date("2018-04-20T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "B"
    //
    //
    // },
    // {
    //     match_id: "21",
    //     local_team: "DINAMARCA",
    //     visitor_team: "AUSTRALIA",
    //     date: new Date("2018-04-21T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "C"
    //
    //
    // },
    // {
    //     match_id: "22",
    //     local_team: "FRANCIA",
    //     visitor_team: "PERÚ",
    //     date: new Date("2018-04-21T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "C"
    //
    //
    // },
    // {
    //     match_id: "23",
    //     local_team: "ARGENTINA",
    //     visitor_team: "CROACIA",
    //     date: new Date("2018-04-21T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "D"
    //
    //
    // },
    // {
    //     match_id: "24",
    //     local_team: "BRASIL",
    //     visitor_team: "COSTA RICA",
    //     date: new Date("2018-04-22T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    //
    // },
    // {
    //     match_id: "25",
    //     local_team: "NIGERIA",
    //     visitor_team: "ISLANDIA",
    //     date: new Date("2018-04-22T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "D"
    //
    //
    // },
    // {
    //     match_id: "26",
    //     local_team: "SERBIA",
    //     visitor_team: "SUIZA",
    //     date: new Date("2018-04-22T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    //
    // },
    // {
    //     match_id: "27",
    //     local_team: "BÉLGICA",
    //     visitor_team: "TÚNEZ",
    //     date: new Date("2018-04-23T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    //
    // },
    // {
    //     match_id: "28",
    //     local_team: "COREA DEL SUR",
    //     visitor_team: "MÉXICO",
    //     date: new Date("2018-04-23T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    //
    // },
    // {
    //     match_id: "29",
    //     local_team: "ALEMANIA",
    //     visitor_team: "SUECIA",
    //     date: new Date("2018-04-23T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    //
    // },
    // {
    //     match_id: "30",
    //     local_team: "INGLATERRA",
    //     visitor_team: "PANAMÁ",
    //     date: new Date("2018-04-24T07:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    //
    // },
    // {
    //     match_id: "31",
    //     local_team: "JAPÓN",
    //     visitor_team: "SENEGAL",
    //     date: new Date("2018-04-24T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "32",
    //     local_team: "POLONIA",
    //     visitor_team: "COLOMBIA",
    //     date: new Date("2018-04-24T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "33",
    //     local_team: "URUGUAY",
    //     visitor_team: "RUSIA",
    //     date: new Date("2018-04-25T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "A"
    //
    //
    // },
    // {
    //     match_id: "34",
    //     local_team: "ARABIA SAUDITA",
    //     visitor_team: "EGIPTO",
    //     date: new Date("2018-04-25T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "A"
    //
    //
    // },
    // {
    //     match_id: "35",
    //     local_team: "IRÁN",
    //     visitor_team: "PORTUGAL",
    //     date: new Date("2018-04-25T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "B"
    //
    //
    // },
    // {
    //     match_id: "36",
    //     local_team: "ESPAÑA",
    //     visitor_team: "MARRUECOS",
    //     date: new Date("2018-04-25T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "B"
    //
    //
    // },
    // {
    //     match_id: "37",
    //     local_team: "DINAMARCA",
    //     visitor_team: "FRANCIA",
    //     date: new Date("2018-04-26T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "C"
    //
    // },
    // {
    //     match_id: "38",
    //     local_team: "AUSTRALIA",
    //     visitor_team: "PERÚ",
    //     date: new Date("2018-04-26T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "C"
    //
    //
    // },
    // {
    //     match_id: "39",
    //     local_team: "NIGERIA",
    //     visitor_team: "ARGENTINA",
    //     date: new Date("2018-04-26T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "D"
    //
    //
    // },
    // {
    //     match_id: "40",
    //     local_team: "ISLANDIA",
    //     visitor_team: "CROACIA",
    //     date: new Date("2018-04-26T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "D"
    //
    //
    // },
    // {
    //     match_id: "41",
    //     local_team: "COREA DEL SUR",
    //     visitor_team: "ALEMANIA",
    //     date: new Date("2018-04-27T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    //
    // },
    // {
    //     match_id: "42",
    //     local_team: "MÉXICO",
    //     visitor_team: "SUECIA",
    //     date: new Date("2018-04-27T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "F"
    //
    //
    // },
    // {
    //     match_id: "43",
    //     local_team: "SERBIA",
    //     visitor_team: "BRASIL",
    //     date: new Date("2018-04-27T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    //
    // },
    // {
    //     match_id: "44",
    //     local_team: "SUIZA",
    //     visitor_team: "COSTA RICA",
    //     date: new Date("2018-04-27T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "E"
    //
    //
    // },
    // {
    //     match_id: "45",
    //     local_team: "JAPÓN",
    //     visitor_team: "POLONIA",
    //     date: new Date("2018-04-28T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "46",
    //     local_team: "SENEGAL",
    //     visitor_team: "COLOMBIA",
    //     date: new Date("2018-04-28T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "H"
    //
    //
    // },
    // {
    //     match_id: "47",
    //     local_team: "INGLATERRA",
    //     visitor_team: "BÉLGICA",
    //     date: new Date("2018-04-28T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    //
    // },
    // {
    //     match_id: "48",
    //     local_team: "PANAMÁ",
    //     visitor_team: "TÚNEZ",
    //     date: new Date("2018-04-28T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //     type: "Grupos",
    //     group: "G"
    //
    // },
    // {
    //     match_id: "49",
    //     local_team: "A1",
    //     visitor_team: "B2",
    //     date: new Date("2018-04-30T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    // },
    // {
    //     match_id: "50",
    //     local_team: "C1",
    //     visitor_team: "D2",
    //     date: new Date("2018-04-30T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "51",
    //     local_team: "D1",
    //     visitor_team: "C2",
    //     date: new Date("2018-07-01T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "52",
    //     local_team: "B1",
    //     visitor_team: "A2",
    //     date: new Date("2018-07-01T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "53",
    //     local_team: "E1",
    //     visitor_team: "F2",
    //     date: new Date("2018-07-02T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "54",
    //     local_team: "G1",
    //     visitor_team: "H2",
    //     date: new Date("2018-07-02T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "55",
    //     local_team: "F1",
    //     visitor_team: "E2",
    //     date: new Date("2018-07-03T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "56",
    //     local_team: "H1",
    //     visitor_team: "G2",
    //     date: new Date("2018-07-03T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Octavos"
    //
    //
    // },
    // {
    //     match_id: "57",
    //     local_team: "W49",
    //     visitor_team: "W50",
    //     date: new Date("2018-07-06T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Cuartos"
    //
    // },
    // {
    //     match_id: "58",
    //     local_team: "W53",
    //     visitor_team: "W54",
    //     date: new Date("2018-07-06T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Cuartos"
    //
    //
    // },
    // {
    //     match_id: "59",
    //     local_team: "W52",
    //     visitor_team: "W51",
    //     date: new Date("2018-07-07T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Cuartos"
    //
    //
    // },
    // {
    //     match_id: "60",
    //     local_team: "W55",
    //     visitor_team: "W56",
    //     date: new Date("2018-07-07T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Cuartos"
    //
    //
    // },
    // {
    //     match_id: "61",
    //     local_team: "W57",
    //     visitor_team: "W58",
    //     date: new Date("2018-07-10T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Semifinales"
    //
    //
    // },
    // {
    //     match_id: "62",
    //     local_team: "W59",
    //     visitor_team: "W60",
    //     date: new Date("2018-07-11T13:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Semifinales"
    //
    //
    // },
    // {
    //     match_id: "63",
    //     local_team: "L61",
    //     visitor_team: "L62",
    //     date: new Date("2018-07-14T09:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Tercer Lugar"
    //
    // },
    // {
    //     match_id: "64",
    //     local_team: "W61",
    //     visitor_team: "W62",
    //     date: new Date("2018-07-15T10:00Z"),
    //     localScore: 2, visitorScore: 1,
    //
    //     type: "Final"
    //
    //
    // },
];

let calls = match_list.map(function (item) {
    return function (callback) {
        Match.create(item, callback)
    }
});

async.series(calls, function (err, result) {
    if (err) console.log(err);
    console.log("Finished inserting Matches");
    finish();
})



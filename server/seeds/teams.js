// require('dotenv').config();
let Database = require('../config/database');
let Team = require('../models/team');
let mongoose = require('mongoose');
let async = require('async');

mongoose.Promise = global.Promise;


function finish(){
    process.exit();
}

//Declare all products
let team_list= [
    //Manuales
    { name: 'Rusia',
        logo: '/images/logos/rusia.jpg',
        grupo: "A"
    },
    { name: 'Arabia Saudita',
        logo: '/images/logos/arabia.jpg',
        grupo : "A"
    },
    { name: 'Egipto',
        logo: '/images/logos/egipto.jpg',
        grupo : "A"
    },
    { name: 'Uruguay',
        logo: '/images/logos/uruguay.jpg',
        grupo : "A"
    },

    { name: 'Marruecos',
        logo: '/images/logos/marruecos.jpg',
        grupo : "B"

    },
    { name: 'Irán',
        logo: '/images/logos/iran.jpg',
        grupo : "B"
    },
    { name: 'Portugal',
        logo: '/images/logos/portugal.jpg',
        grupo : "B"
    },
    { name: 'España',
        logo: '/images/logos/españa.jpg',
        grupo : "B"
    },

    { name: 'Francia',
        logo: '/images/logos/francia.jpg',
        grupo : "C"

    },
    { name: 'Australia',
        logo: '/images/logos/australia.jpg',
        grupo : "C"

    },
    { name: 'Argentina',
        logo: '/images/logos/argentina.jpg',
        grupo : "D"

    },
    { name: 'Islandia',
        logo: '/images/logos/islandia.jpg',
        grupo : "D"

    },
    { name: 'Perú',
        logo: '/images/logos/peru.jpg',
        grupo : "C"

    },
    { name: 'Dinamarca',
        logo: '/images/logos/dinamarca.jpg',
        grupo : "C"

    },
    { name: 'Croacia',
        logo: '/images/logos/croacia.jpg',
        grupo : "D"

    },
    { name: 'Nigeria',
        logo: '/images/logos/nigeria.jpg',
        grupo : "D"

    },
    { name: 'Costa Rica',
        logo: '/images/logos/costarica.jpg',
        grupo : "E"

    },
    { name: 'Serbia',
        logo: '/images/logos/serbia.jpg',
        grupo : "E"

    },
    { name: 'Alemania',
        logo: '/images/logos/alemania.jpg',
        grupo : "F"

    },
    { name: 'México',
        logo: '/images/logos/mexico.jpg',
        grupo : "F"

    },
    { name: 'Brasil',
        logo: '/images/logos/brasil.jpg',
        grupo : "E"

    },
    { name: 'Suiza',
        logo: '/images/logos/suiza.jpg',
        grupo : "E"
    },
    { name: 'Suecia',
        logo: '/images/logos/suecia.jpg',
        grupo : "F"

    },
    { name: 'Corea del Sur',
        logo: '/images/logos/scorea.jpg',
        grupo : "F"

    },
    { name: 'Bélgica',
        logo: '/images/logos/belgica.jpg',
        grupo : "G"

    },
    { name: 'Panamá',
        logo: '/images/logos/panama.jpg',
        grupo : "G"

    },
    { name: 'Túnez',
        logo: '/images/logos/tunez.jpg',
        grupo : "G"

    },
    { name: 'Inglaterra',
        logo: '/images/logos/inglaterra.jpg',
        grupo : "G"

    },
    { name: 'Colombia',
        logo: '/images/logos/colombia.jpg',
        grupo : "H"

    },
    { name: 'Japón',
        logo: '/images/logos/japon.jpg',
        grupo : "H"

    },
    { name: 'Polonia',
        logo: '/images/logos/polonia.jpg',
        grupo : "H"

    },
    { name: 'Senegal',
        logo: '/images/logos/senegal.jpg',
        grupo : "H"

    },

    ];

let calls = team_list.map(function(item){
    return function(callback){
        Team.create(item,callback)
    }
});

async.series(calls, function(err, result){
    if(err) console.log(err);
    console.log("Finished inserting Teams");
    finish();
});






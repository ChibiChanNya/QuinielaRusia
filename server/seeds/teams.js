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
    },
    { name: 'Arabia Saudita',
        logo: '/images/logos/arabia.jpg',
    },
    { name: 'Egipto',
        logo: '/images/logos/egipto.jpg',
    },
    { name: 'Uruguay',
        logo: '/images/logos/uruguay.jpg',
    },

    { name: 'Marruecos',
        logo: '/images/logos/marruecos.jpg',
    },
    { name: 'Irán',
        logo: '/images/logos/iran.jpg',
    },
    { name: 'Portugal',
        logo: '/images/logos/portugal.jpg',
    },
    { name: 'España',
        logo: '/images/logos/españa.jpg',
    },

    { name: 'Francia',
        logo: '/images/logos/francia.jpg',
    },
    { name: 'Australia',
        logo: '/images/logos/australia.jpg',
    },

    { name: 'Argentina',
        logo: '/images/logos/argentina.jpg',
    },
    { name: 'Islandia',
        logo: '/images/logos/islandia.jpg',
    },
    { name: 'Perú',
        logo: '/images/logos/peru.jpg',
    },
    { name: 'Dinamarca',
        logo: '/images/logos/dinamarca.jpg',
    },
    { name: 'Croacia',
        logo: '/images/logos/croacia.jpg',
    },
    { name: 'Nigeria',
        logo: '/images/logos/nigeria.jpg',
    },
    { name: 'Costa Rica',
        logo: '/images/logos/costarica.jpg',
    },
    { name: 'Serbia',
        logo: '/images/logos/serbia.jpg',
    },
    { name: 'Alemania',
        logo: '/images/logos/alemania.jpg',
    },
    { name: 'México',
        logo: '/images/logos/mexico.jpg',
    },
    { name: 'Brasil',
        logo: '/images/logos/brasil.jpg',
    },
    { name: 'Suiza',
        logo: '/images/logos/suiza.jpg',
    },
    { name: 'Suecia',
        logo: '/images/logos/suecia.jpg',
    },
    { name: 'Corea del Sur',
        logo: '/images/logos/scorea.jpg',
    },
    { name: 'Bélgica',
        logo: '/images/logos/belgica.jpg',
    },
    { name: 'Panamá',
        logo: '/images/logos/panama.jpg',
    },
    { name: 'Túnez',
        logo: '/images/logos/tunez.jpg',
    },
    { name: 'Inglaterra',
        logo: '/images/logos/inglaterra.jpg',
    },
    { name: 'Colombia',
        logo: '/images/logos/colombia.jpg',
    },
    { name: 'Japón',
        logo: '/images/logos/japon.jpg',
    },
    { name: 'Polonia',
        logo: '/images/logos/polonia.jpg',
    },
    { name: 'Senegal',
        logo: '/images/logos/senegal.jpg',
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






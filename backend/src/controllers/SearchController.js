const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

// Busca dos DEV
module.exports = {
    async index(request, response){
       const{ latitude, longitude, techs} = request.query;

       const techsArray = parseStringsAsArray(techs);

       const devs = await Dev.find({
           techs:{ 
               $in: techsArray
            },
       });
       
        console.log(techsArray);
         return response.json({ devs:[] });
    }    
}
const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require ('../utils/parseStringAsArray');

	//Rota de listar
module.exports = {
	async index(request,response){
		const devs = await Dev.find();

		return response.json(devs);
	},
	//Rota de Guardar os Dados
	async store(request, response) {
		const { github_username, techs, longitude, latitude } = request.body;
		let dev = await Dev.findOne({ github_username });

		if (!dev) {
			const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//Solicitação da API
			const { name = login, avatar_url, bio } = apiResponse.data;
			const techsArray = parseStringAsArray(techs);
			const location = {
				type: "Point",
				coordinates: [longitude, latitude],
			};
        //Criação do Dev baseado no retorno da API
			 	dev = await Dev.create({
				github_username,
				name,
				avatar_url,
				bio,
				techs: techsArray,
				location,
			})
		}
		return response.json(dev);
	}
};

//COMENTÀRIOS//

//ControllersFun index: Listar <> show:Listar Unico <> store:Criar <> update:Alterar <> Destroy: Deletar
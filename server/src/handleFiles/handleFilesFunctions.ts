const fs = require('fs');
const path = require('path');

const handleFilesPath = async () : Promise<string[]> => {

	if (!fs.existsSync(path.join('./src', 'files'))){

		await fs.mkdir((path.join('./src', 'files')), (err :  TypeError) => {
		
			if (err) throw err;
		
		})

	}

	var filesNames :string [] = await fs.readdirSync(path.join('./src', 'files'))
	return filesNames

};

module.exports = handleFilesPath;
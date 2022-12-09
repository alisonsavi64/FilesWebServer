const showExpressRouter = require('express');
const {Request, Response} = require('express');
const download = require('download');
const showPath = require('path');
const showFs = require('fs')


const handleFiles = require('../handleFiles/handleFilesFunctions');

const router = showExpressRouter.Router();

router.get('/', async (req : typeof Request , res: typeof Response) => {
	
	var data : string[] = await handleFiles()
	console.log(entrei)
	res.json({filesName: data})

})

router.get('/:file', async(req: typeof Request, res: typeof Response) => {

	const filePathToDownload = showPath.join('./src', 'files', `${req.params.file}`);
	res.download(filePathToDownload)
	

})

module.exports = router;
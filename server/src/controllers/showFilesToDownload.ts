const showExpressRouter = require('express');
const {Request, Response} = require('express');
const download = require('download');
const showPath = require('path');
const showFs = require('fs')
const multer = require('multer');

const upload = multer({

	dest: './uploads/',

});

const handleFiles = require('../handleFiles/handleFilesFunctions');

const router = showExpressRouter.Router();

router.get('/', async (req : typeof Request , res: typeof Response) => {
	
	var data : string[] = await handleFiles()
	res.json({filesName: data})

})

router.get('/:file', async(req: typeof Request, res: typeof Response) => {

	const filePathToDownload = showPath.join('./src', 'files', `${req.params.file}`);
	res.download(filePathToDownload)
	

})

router.post('/uploadFile', async(req: typeof Request, res: typeof Response) => {

	console.log(req.files)
	res.json({legal: "funfando"})
	
});

module.exports = router;
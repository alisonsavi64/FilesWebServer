import {useEffect, useState, useRef} from 'react';

import downloadjs from 'downloadjs';

import axios from 'axios';

function Home () {

	const [files, setFiles] = useState([]);
	const filesElement = useRef(null);

	useEffect(() => {

		axios.get('http://192.168.0.137:8000').then((response) => {

			setFiles(response.data.filesName);

		}).catch((err) => {
			console.log(err)
		})

	},[])


	function downloadFile(fileName){
		console.log('aqui')
		axios.get(`http://192.168.0.137:8000/${fileName}`, {responseType: 'blob'}).then((response) => {
			downloadjs(response.data, `${fileName}`)
		}, [])
		
	}

	function handleSubmit () {
		const url = `http://192.168.0.137:8000/uploadFile`
		const formData = new FormData()
		for (const fileToSend of filesElement.current.files) {
			formData.append('file', fileToSend)
		}
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			}
		}
		axios.post(url, {body: formData, mode: 'cors',config}).then((response) => {
			console.log(response.data);
		})
	}
		

	return (
		<>
		<div class="text-3xl bg-black text-white text-center">
			<h1 class="py-3">Files</h1>
			<label class="border-2 border-white">
				<input class="text-sg" type="file" multiple ref={filesElement}/>
				<button onClick={handleSubmit}>Upload</button>
			</label>
		</div>
		<div class="grid h-1/2 place-items-center my-2">
			{files.map((file) => (
				<div onClick={() => {downloadFile(file)}} class="text-center bg-black text-white my-2 h-12 w-72">
					<h1>{file}</h1>
				</div>
			))}

		</div>
		</>
	);

}

export default Home;
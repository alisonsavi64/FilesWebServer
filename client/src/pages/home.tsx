import {useEffect, useState} from 'react';

import downloadjs from 'downloadjs';

import axios from 'axios';

function Home () {

	const [files, setFiles] = useState([])

	useEffect(() => {

		axios.get('http://192.168.0.137:8000').then((response) => {

			setFiles(response.data.filesName);

		}).catch((err) => {
			console.log(err)
		})

	},[])


	function handleClick(fileName){
		console.log('aqui')
		axios.get(`http://192.168.0.137:8000/${fileName}`, {responseType: 'blob'}).then((response) => {
			downloadjs(response.data)
		}, [])
		
	}

	return (

		<div>
			<h1 class="text-center py-3 text-3xl">Files</h1>
			{files.map((file) => (
				<div onClick={() => {handleClick(file)}} class="my-2 text-center border-2 border-black w-1/2">
					<h1>{file}</h1>
				</div>
			))}

		</div>

	);

}

export default Home;
import path from 'path'

const isImage = (filename) => {
	return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(filename).toLocaleLowerCase())
}

const filePath = (filename) => {
	return `http://127.0.0.1:3000/storages/${filename.substr(0, 9)}/${filename}`;
}


export { isImage, filePath }

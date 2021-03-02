import path from 'path'

const isImage = (filename) => {
	return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(filename).toLocaleLowerCase())
}

const filePath = (filename) => {
	return `${process.env.SERVER}/storages/${filename.substr(0, 9)}/${filename}`;
}


export { isImage, filePath }

const randomstring = require("randomstring");
const path = require('path')
const multer = require('multer')

const destination = path.join(__dirname, '..', 'public')

const storage = multer.diskStorage({
    destination,
    filename(req, file, cb) {
        if (!file.originalname.match(/\.(txt)$/ig)) {
            cb(new Error('Only txt files are allowed'))
        } else {
            const file_name = `${randomstring.generate(10)}.txt`
            cb(null, file_name);
        }
    },
})

module.exports = multer({ storage });
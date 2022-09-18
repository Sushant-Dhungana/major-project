const express =require('express')
const router = express()
const multer = require('multer')
const path = require('path')
const { getAllAds, getAds, setAd, updateAd, deleteAd, getAdsBySeaarch } = require('../controller/sellController')
const {protect} = require('../middleware/authMiddleware')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      let ext = path.extname(file.originalname)  
      cb(null, req.body.bike + Date.now()+ext)
    }
  })
  
 const  fileFilter = function (req, file, cb) {

    if( file.mimetype == 'img/png' ||
        file.mimetype == 'img/jpeg' ||
         file.mimetype == 'img/jpg' ){
        cb(null, true)
    } else {
        cb(null, false)
    }
}



//for single image
const upload = multer({
        storage: storage,
        //fileFilter: fileFilter      
    })
//for multiple image
//const upload = multer({ storage: storage }).array('image[]', 3);

router.get('/search', getAdsBySeaarch)
router.get('/', getAllAds)
router.get('/:id', protect,  getAds)

router.post('/', upload.single('image'), protect, setAd)
router.put('/:id', protect, updateAd)
router.delete('/:id', protect, deleteAd) 

module.exports = router
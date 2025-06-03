import multer from "multer";

//store the files in diskstorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//store the storage in multer
export const upload = multer({ storage });

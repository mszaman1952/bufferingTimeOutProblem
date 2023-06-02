



const express = require('express');
const router = express.Router();
const helloController = require("../controller/helloController.js");
const studentsController = require('../controller/students.controller.js')



router.get('/hello-get',helloController.helloGet);

router.post("/hello-post", helloController.helloPost);

router.post("/insertStudent", studentsController.insertStudent);



module.exports = router;





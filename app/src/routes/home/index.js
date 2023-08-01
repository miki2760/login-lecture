"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/license", ctrl.output.license);
router.get("/member", ctrl.output.member);
router.get("/jobs", ctrl.output.jobs);
router.get("/gongmo", ctrl.output.gongmo);
router.get("/community", ctrl.output.community);
router.get("/hire", ctrl.output.hire);
router.get("/dba", ctrl.output.dba);
router.get("/write", ctrl.output.write);
router.get("/view", ctrl.output.view);
router.get("/comsys", ctrl.output.comsys);






router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;  //외부로 내보냄
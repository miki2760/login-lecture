"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    }, 
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
    license: (req, res) => {
        res.render("home/license");
    },
    member: (req, res) => {
        res.render("home/member");
    },
    hire: (req, res) => {
        res.render("home/hire");
    },
    jobs: (req, res) => {
        res.render("home/jobs");
    },
    gongmo: (req, res) => {
        res.render("home/gongmo");
    },
    community: (req, res) => {
        res.render("home/community");
    },
    dba: (req, res) => {
        res.render("../jobs/dba");
    },
    write: (req, res) => {
        res.render("home/write");
    },
    view: (req, res) => {
        res.render("home/view");
    },
    comsys: (req, res) => {
        res.render("../liscence/comsys");
    },

};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};


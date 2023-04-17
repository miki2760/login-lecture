"use strict";

class UserStorage {
    static #users = {   //스태틱 정적변수 = 외부에서 불러와짐 하지만 #으로 외부에서 받되 공개되지는 않도록 은닉화하였음
        id: ["sunwoong", "나개발", "나팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["김선웅", "나개발", "나팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;

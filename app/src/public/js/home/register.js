"use strict";

const id = document.querySelector("#user"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#pw"),
    confirmPsword = document.querySelector("#confirm-pw"),
    registerBtn = document.querySelector("#btn");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value
    };
    console.log(req);

    fetch("/register", {   
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
    }
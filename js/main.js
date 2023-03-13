// const x = 15;
// const y = 5;
// const z = 100;
// const Numbers = [10, 85, 21, 5, 8, 4, 100, 45, 152];
// let minNum = Numbers[0];
// let maxNum = Numbers[0];

// for (let i = 0; i < Numbers.length; i++) {
//     minNum = Math.min(minNum, Numbers[i]);
//     maxNum = Math.max(maxNum, Numbers[i]);

// }
// console.log(minNum);
// console.log(maxNum);

// const me = {
//     Name: "Muhammad",
//     Age: 15,
//     Status: "Dev",
//     myInfo: function() {
//         return `Salom mening ismim ${me.Name} yoshim ${me.Age} status ${this.Status}`
//     }
// }
// console.log(me.myInfo());
const form = document.querySelector(".form"),
    inpName = document.querySelector(".inpName"),
    inpRel = document.querySelector(".inpRel"),
    inpPhone = document.querySelector(".inpPhone"),
    button = document.querySelector(".btn"),

    resultName = document.querySelector(".result-name"),
    resultRel = document.querySelector(".result-rel"),
    resultPhone = document.querySelector(".result-phone"),
    name_remove = document.querySelector(".name_remove"),
    rel_remove = document.querySelector(".rel_remove"),
    phone_remove = document.querySelector(".phone_remove");


button.addEventListener("click", function(e) {
    e.preventDefault();
    if (inpName.value === "") {
        resultName.textContent = ("Enter Name!");
        resultRel.textContent = ("Enter Relation!");
        resultPhone.textContent = ("Enter Phone!");
    } else if (inpName.value) {
        resultName.textContent = (inpName.value)


    } else {
        console.log("Hato");
    }
    if (inpRel.value) {
        resultRel.textContent = (inpRel.value)
    } else {
        console.log("Hato");
    }
    if (inpPhone.value) {
        resultPhone.textContent = (inpPhone.value)
    } else {
        console.log("Hato");
    }

})
const removeBtn = document.querySelector(".name_remove"),
    text = document.querySelector(".text");
removeBtn.addEventListener("click", function(e) {

    resultName.remove();
})
const removeBtnRel = document.querySelector(".rel_remove"),
    text2 = document.querySelector(".text");
removeBtnRel.addEventListener("click", function(e) {

    resultRel.remove();
})
const removeBtnPhone = document.querySelector(".phone_remove"),
    text3 = document.querySelector(".text");
removeBtnPhone.addEventListener("click", function(e) {

    resultPhone.remove();
})
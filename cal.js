let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let res = document.getElementById("res")


document.getElementById("add").addEventListener("click", function() {
    let r = parseInt(num1.value) + parseInt(num2.value)
    res.innerHTML = r.toString()
})
document.getElementById("sub").addEventListener("click", function() {
    let r = parseInt(num1.value) - parseInt(num2.value)
    res.innerHTML = r.toString()
})
document.getElementById("mul").addEventListener("click", function() {
    let r = parseInt(num1.value) * parseInt(num2.value)
    res.innerHTML = r.toString()
})
document.getElementById("div").addEventListener("click", function() {
    let r = parseInt(num1.value) / parseInt(num2.value)
    res.innerHTML = r.toString()
})
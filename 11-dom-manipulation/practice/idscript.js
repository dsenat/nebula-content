let theForm= document.querySelector(".myForm");
console.log(theForm)
let idCard = document.querySelector(".idCard")

theForm.addEventListener("submit",(e)=> {
    e.preventDefault()
    console.log(e.target.fullName.value)
    let idNumber = e.target.idNumber.value
    let address = e.target.address.value
    let funFact = e.target.funFact.value
    let fullName = e.target.fullName.value
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let p2 = document.createElement("p2")
    let p3 = document.createElement("p3")
    h1.textContent = fullName
    p.textContent = idNumber
    p2.textContent = address
    p3.textContent = funFact
    idCard.append(h1)
    idCard.append(p)
    idCard.append(p2)
    idCard.append(p3)
})



console.log(document.body)
console.log(document.body.style.backgroundColor="blue")
console.log(document.body.style.paddingLeft="40%")
console.log(document.body.style.border="10px groove")
console.log(document.body.style.margin="0px 100px")

let h1=document.getElementById("h1").style.color="red"
console.log(h1)

let skill=document.getElementsByTagName("h4")
console.log(skill)
console.log(skill[0].innerText)

console.log(skill[0].innerHTML)
skill[0].innerHTML="<span>Technical Skills</span>"
console.log(skill[0].innerHTML)

let ul=document.getElementsByClassName("ul1")
console.log(ul[0])

let l1=document.getElementsByClassName("li1")
l1[0].innerHTML="PYTHON"
console.log(l1[1].innerHTML="HTML")

let hob=document.getElementById("hob")
console.log(hob.innerHTML="Writing")

let qry=document.querySelector("li.li1")
console.log(qry.innerHTML)

var query=document.querySelectorAll("ul.ul2")
console.log(query[0].innerHTML)
console.log(query[0].innerText)
var ul2=document.getElementsByClassName("ul2")
console.log(ul2)


let hobb=document.querySelector("ul.ul3")
console.log(hobb.innerHTML)

let hobbies=document.querySelectorAll("ul.ul3")
console.log(hobbies)

console.log(hobbies[1].innerHTML)


for(i=0;i<hobbies.length;i++){
    console.log(hobbies[i].innerHTML)
}

let form=document.getElementsByTagName("form")
console.log(form)

let frm=document.getElementById("frm")
console.log(frm.innerHTML)

console.log(frm.innerText)

frm[0].innerText="button"
console.log(frm[0].innerText)

let br=document.getElementsByTagName("br")
console.log(br)




let col=document.getElementById("but").style.color="white"
console.log(col)
console.log(document.getElementById("but").style.cursor="pointer")
console.log(document.getElementById("but").style.backgroundColor="blue")
console.log(document.getElementById("but").style.fontSize="20px")
console.log(document.getElementById("but").style.marginBottom="30px")

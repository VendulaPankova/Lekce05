            /*  <!-- 1. polivina lekce
     
     
const nadpis = document.querySelector("h1") ///vybere první nalezený element a stránce HTML
// const nadpis2 = document.querySelectorAll("h1")

nadpis.textContent = "Toto jsem změnil za pomocí JS"

nadpis.style.color = "yellow"
nadpis.style.backgroundColor ="red"

nadpis.classList.add("ramecek")
nadpis.classList.remove("ramecek")

document.querySelector("#obrazek-kocka").src = "https://www.petamour.cz/user/articles/images/ko__ka_dom__c___4.jpg"
document.querySelector("#obrazek-kocka").style.width = "500px"
document.querySelector("#obrazek-kocka").alt = "krásná kočka" */

const produkty = document.querySelector("#produkty")
const produkt ={
    nazev: "talir",
    cena: 100,
    mena: "czk",

                }

produkty.innerHTML =  `
<h2 class="ramecek">${produkt.nazev} </h2>
<p>${produkt.cena} ${produkt.mena}</p>

        `        

produkty.classList.add("trida5")   
produkty.classList.remove("trida2") 

if(produkty.classList.contains("trida6"))
{produkty.classList.remove("trida6")}
else{
    produkty.classList.add("trida6")
}
produkty.classList.toggle("trida7")

//produkty.className = " trida666 trida777"
    



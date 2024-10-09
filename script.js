const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

const USD = 5.54
const EUR = 6.07
const GBP = 7.25

amount.addEventListener("input", ()=>{
    const hasCaractere = /\D+/g
    amount.value = amount.value.replace(hasCaractere, "")
})

form.onsubmit = (event) =>{
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD ,"US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR ,"€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
    }
}

function convertCurrency(amount, price, symbol){
    try{

        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if(isNaN(total)){
            return alert('Por favor, digite um valor correto')
        }
        
        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais`
        footer.classList.add("show-result")
    }catch(error){
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possivel converter. Tente novamente")
    }
}

//formata a moeda em real Brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}


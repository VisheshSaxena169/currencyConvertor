
 let Baseurl="https://api.exchangeratesapi.io/v1/latest?access_key=b2160d3240f8bfa6fc52182d48a29689&%20symbols="
const from=document.getElementById("from");
const to=document.getElementById("to");
const convertBtn=document.getElementById("convert");
const amount=document.getElementById("amount");
const result=document.getElementById("result");



    for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
    if(code==="USD")
        newOption.selected=true;
    from.appendChild(newOption);
   
}
    for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
     if(code==="INR")
        newOption.selected=true;
    to.appendChild(newOption);
}

convertBtn.addEventListener("click",async ()=>{
    let amountVal=amount.value;
    
    if(amountVal===" " || amountVal===0){
        alert("Please enter a valid amount");
        return;
    }
    console.log(from.value,to.value);
    let url=`${Baseurl}${from.value},${to.value}`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data.rates);
    let ans= (data.rates[to.value]/data.rates[from.value])*amountVal;
    console.log(ans);
    result.innerText=`${amountVal} ${from.value} = ${ans.toFixed(2)} ${to.value}`;
    
    
})




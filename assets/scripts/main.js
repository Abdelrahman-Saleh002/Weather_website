// http://api.weatherapi.com/v1/current.json?key=b6c9e8a6ed764d3cac5152643251105&q=Dubai&aqi=no


const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandtimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit" , searchForLocation)


let target = "Dubai"

const fetchResults =async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=b6c9e8a6ed764d3cac5152643251105&q=${targetLocation}&aqi=no`
    const res = await fetch (url)
    const data = await res.json()
    console.log(data);
    
    let temp = data.current.temp_c
    let locationName = data.location.name
    let time = data.location.localtime
    let condition = data.current.condition.text
    updateDetails (temp , locationName , time , condition)
}

function updateDetails (temp , locationName , time , condition){
    temperatureField.innerHTML = temp
    locationField.innerHTML = locationName
    dateandtimeField.innerHTML = time
    conditionField.innerHTML = condition
}


function searchForLocation(e){
    e.preventDefualt()
    target = searchField.value
    fetchResults(target)
}


fetchResults(target)
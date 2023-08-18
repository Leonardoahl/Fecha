console.log("hola mundo")
const text = document.getElementById("answer");
const dateForm = document.forms["dateForm"];

dateForm.addEventListener("submit", e =>{
    e.preventDefault();
    const date = {
        day: document.getElementById("day").value,
        month: document.getElementById("month").value,
        year: document.getElementById("year").value
    }

    const isValidDate = validateDate(date);

    console.log(isValidDate);

    if(isValidDate){
        const dateObj = new Date(date.year, date.month-1, date.day);
        console.log(dateObj);
        console.log(dateObj.getDay());
        const dateObjStr = getWeekDay(dateObj.getDay());
        console.log(dateObjStr); 
        text.innerHTML = `<h1>${dateObjStr.day}, es ${dateObjStr.weekday} </h1>`;
    }else{
        text.innerHTML = `<h1>Por favor ingresa una fecha valida</h1>`;
    }



});

function checkLeapYear(year){
    const leap = new Date(year,1,29).getDate() === 29;
    let isLeap = false;
    if(leap) isLeap = true;
    return isLeap;
}

function validateDate({day, month, year}){
    let validDate = false;
    const isLeap = checkLeapYear(year);
    if(month <= 12 && month >= 1){
        if(isLeap){
            if(day > 0 && day <= 29){
                validDate = true;
            }
        }else{
            if(day > 0 && day <= 28){
                validDate = true;
            }
        }
    }

    return validDate;

}

function getWeekDay(day){
    let dayOjb;
    console.log(day);
    switch (day) {
        case 0:
            return dayOjb = {day :"Domingo", weekday: "no laborable"};
        case 1:
            return dayOjb =  {day :"Lunes", weekday: "laborable"};
        case 2:
            return dayOjb = {day :"Martes", weekday: "laborable"};
        case 3:
            return dayOjb =  {day :"Miercoles", weekday: "laborable"};
        case 4:
            return dayOjb = {day :"Jueves", weekday: "laborable"};
        case 5:
            return dayOjb =  {day :"Viernes", weekday: "laborable"};
        case 6:
            return dayOjb = {day :"Sabado", weekday: "no laborable"};

        default:
            break;
    }
}
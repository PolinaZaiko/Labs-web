function showDate() {
    let out = document.getElementById("current-date");
    let today =new Date();
    out.innerHTML = "Дата и время для русской локали: " + today.toLocaleDateString("ru-RU");
    let out1 = document.getElementById("current-date1");
    out1.innerHTML = "Дата и время для африканской локали: " + today.toLocaleDateString("af");
    let out2 = document.getElementById("current-date2");
    out2.innerHTML = "Дата и время для египетской локали: " + today.toLocaleDateString("ar-EG");
    let out3 = document.getElementById("current-date3");
    out3.innerHTML = "Дата и время для чешской локали: " + today.toLocaleDateString("cs");
    let out4 = document.getElementById("current-date4");
    out4.innerHTML = "Дата и время для германской локали: " + today.toLocaleDateString("de-DE");
    let out5 = document.getElementById("current-date5");
    out5.innerHTML = "Дата и время для канадской локали: " + today.toLocaleDateString("en-CA");
    let out6 = document.getElementById("current-date6");
    out6.innerHTML = "Дата и время для аргентинской локали: " + today.toLocaleDateString("es-AR");
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector("input[type=date]");
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount=Math.floor(daysCount)
    document.getElementById('data').innerHTML = "Количество дней с даты рождения: " + daysCount;
}

function showDaysCountZero() {
    let today = new Date();
    let inputDate = document.querySelector("input[type=date]");
    inputDate.value = "";
    daysCount = 0;
    document.getElementById('data').innerHTML = "Количество дней с даты рождения: " + daysCount;
}
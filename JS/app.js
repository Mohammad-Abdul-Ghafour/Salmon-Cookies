'use strict'

let workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
let citysArr = [];
let totalHours=[];
let divEl = document.getElementById('citySails');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

function Citys(cityName, minCust, maxCust, avgSail) {
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSail = avgSail;
    this.custPerHour = [];
    this.avgSailPerHour = [];
    this.totalDay=0;
    citysArr.push(this);
}
Citys.prototype.generateRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < workingHours.length - 1; i++) {
        this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min);
        this.avgSailPerHour[i] = Math.ceil(this.custPerHour[i] * this.avgSail)
        this.totalDay+=this.avgSailPerHour[i]
    }
}

Citys.prototype.totals = function () {
    for (let i = 0; i < workingHours.length; i++) {
        totalHours[i]=0;
        for (let j = 0; j < citysArr.length; j++) {
            if(i== workingHours.length - 1){
                totalHours[i]+= citysArr[j].totalDay
            }else{
            totalHours[i]+= citysArr[j].avgSailPerHour[i]}
        }
    }
}

let seattle = new Citys('Seattle', 23, 65, 6.3);
seattle.generateRandomNumber(seattle.minCust, seattle.maxCust)
seattle.totals();
console.log(seattle);
console.log(citysArr);
console.log(totalHours);

let tokyo = new Citys('Tokyo', 3, 24, 1.2);
tokyo.generateRandomNumber(tokyo.minCust, tokyo.maxCust)
tokyo.totals();

let dubai = new Citys('Dubai', 11, 38, 3.7);
dubai.generateRandomNumber(dubai.minCust, dubai.maxCust)
dubai.totals();

let paris = new Citys('Paris', 20, 38, 2.3);
paris.generateRandomNumber(paris.minCust, paris.maxCust)
paris.totals();

let lima = new Citys('Lima', 2, 16, 4.6);
lima.generateRandomNumber(lima.minCust, lima.maxCust)
lima.totals();

function tableHeader(){
    let trEl = document.createElement('tr')
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'City Name';

    for (let i=0;i<workingHours.length;i++){
        let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = workingHours[i];}
}
tableHeader();

Citys.prototype.render =function(){
    let trEl = document.createElement('tr')
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.cityName;
for(let i =0;i<this.avgSailPerHour.length +1 ;i++){
    if(i==this.avgSailPerHour.length){
        let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.totalDay;
    }else{
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.avgSailPerHour[i];}}
}

for (let i = 0; i < citysArr.length; i++) {
    citysArr[i].render();
}

function tableFooter(){
    let trEl = document.createElement('tr')
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('td');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Totals';

for(let i=0;i<totalHours.length;i++){
    let thEl2 = document.createElement('td');
    trEl.appendChild(thEl2);
    thEl2.textContent = totalHours[i];}
}
tableFooter();

'use strict'

let workingHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
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

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = '6.00 am';

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = '7.00 am';

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = '8.00 am';
    
    let thEl5 = document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent = '9.00 am';

    let thEl6 = document.createElement('th');
    trEl.appendChild(thEl6);
    thEl6.textContent = '10.00 am';

    let thEl7 = document.createElement('th');
    trEl.appendChild(thEl7);
    thEl7.textContent = '11.00 am';

    let thEl8 = document.createElement('th');
    trEl.appendChild(thEl8);
    thEl8.textContent = '12.00 pm';

    let thEl9 = document.createElement('th');
    trEl.appendChild(thEl9);
    thEl9.textContent = '1.00 pm';

    let thEl10 = document.createElement('th');
    trEl.appendChild(thEl10);
    thEl10.textContent = '2.00 pm';

    let thEl11 = document.createElement('th');
    trEl.appendChild(thEl11);
    thEl11.textContent = '3.00 pm';

    let thEl12 = document.createElement('th');
    trEl.appendChild(thEl12);
    thEl12.textContent = '4.00 pm';

    let thEl13 = document.createElement('th');
    trEl.appendChild(thEl13);
    thEl13.textContent = '5.00 pm';

    let thEl14 = document.createElement('th');
    trEl.appendChild(thEl14);
    thEl14.textContent = '6.00 pm';

    let thEl15 = document.createElement('th');
    trEl.appendChild(thEl15);
    thEl15.textContent = '7.00 pm';

    let thEl16 = document.createElement('th');
    trEl.appendChild(thEl16);
    thEl16.textContent = 'Daily Location Total';
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

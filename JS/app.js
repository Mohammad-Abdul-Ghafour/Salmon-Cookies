'use strict'
let seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSail: 6.3,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],
    custPerHour: [],
    avgSailPerHour: [],
    generateRandomNumber: function () {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workingHours.length - 1; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
            this.avgSailPerHour.push(Math.ceil(this.custPerHour[i] * this.avgSail))
        }
    },
    render: function () {
        this.generateRandomNumber(this.minCust, this.maxCust);
        // this.generateCustArray();
        let divEl = document.getElementById('citySails');
        let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        let total = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workingHours[i]} ${this.avgSailPerHour[i]} coockies`
            total=this.avgSailPerHour[i]+total
            console.log(total)
            if (i == this.workingHours.length - 2) {
                i++
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${this.workingHours[i]} ${total} coockies`
            }
        }

    }

}
seattle.render();
console.log(seattle.custPerHour, seattle.avgSailPerHour);
let tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSail: 1.2,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],
    custPerHour: [],
    avgSailPerHour: [],
    generateRandomNumber: function () {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workingHours.length - 1; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
            this.avgSailPerHour.push(Math.ceil(this.custPerHour[i] * this.avgSail))
        }
    },
    render: function () {
        this.generateRandomNumber(this.minCust, this.maxCust);
        // this.generateCustArray();
        let divEl = document.getElementById('citySails');
        let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        let total = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workingHours[i]} ${this.avgSailPerHour[i]} coockies`
            total=this.avgSailPerHour[i]+total
            console.log(total)
            if (i == this.workingHours.length - 2) {
                i++
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${this.workingHours[i]} ${total} coockies`
            }
        }

    }

}
tokyo.render();
console.log(tokyo.custPerHour, tokyo.avgSailPerHour);
let dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSail: 3.7,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],
    custPerHour: [],
    avgSailPerHour: [],
    generateRandomNumber: function () {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workingHours.length - 1; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
            this.avgSailPerHour.push(Math.ceil(this.custPerHour[i] * this.avgSail))
        }
    },
    render: function () {
        this.generateRandomNumber(this.minCust, this.maxCust);
        // this.generateCustArray();
        let divEl = document.getElementById('citySails');
        let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        let total = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workingHours[i]} ${this.avgSailPerHour[i]} coockies`
            total=this.avgSailPerHour[i]+total
            console.log(total)
            if (i == this.workingHours.length - 2) {
                i++
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${this.workingHours[i]} ${total} coockies`
            }
        }

    }

}
dubai.render();
console.log(dubai.custPerHour, dubai.avgSailPerHour);
let paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSail: 2.3,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],
    custPerHour: [],
    avgSailPerHour: [],
    generateRandomNumber: function () {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workingHours.length - 1; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
            this.avgSailPerHour.push(Math.ceil(this.custPerHour[i] * this.avgSail))
        }
    },
    render: function () {
        this.generateRandomNumber(this.minCust, this.maxCust);
        // this.generateCustArray();
        let divEl = document.getElementById('citySails');
        let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        let total = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workingHours[i]} ${this.avgSailPerHour[i]} coockies`
            total=this.avgSailPerHour[i]+total
            console.log(total)
            if (i == this.workingHours.length - 2) {
                i++
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${this.workingHours[i]} ${total} coockies`
            }
        }

    }

}
paris.render();
console.log(paris.custPerHour, paris.avgSailPerHour);
let lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSail: 4.6,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],
    custPerHour: [],
    avgSailPerHour: [],
    generateRandomNumber: function () {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workingHours.length - 1; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
            this.avgSailPerHour.push(Math.ceil(this.custPerHour[i] * this.avgSail))
        }
    },
    render: function () {
        this.generateRandomNumber(this.minCust, this.maxCust);
        // this.generateCustArray();
        let divEl = document.getElementById('citySails');
        let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        let total = 0;
        for (let i = 0; i < this.workingHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workingHours[i]} ${this.avgSailPerHour[i]} coockies`
            total=this.avgSailPerHour[i]+total
            console.log(total)
            if (i == this.workingHours.length - 2) {
                i++
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `${this.workingHours[i]} ${total} coockies`
            }
        }

    }

}
lima.render();
console.log(lima.custPerHour, lima.avgSailPerHour);
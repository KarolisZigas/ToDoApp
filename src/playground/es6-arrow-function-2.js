const add = (a,b) => {
    // console.log(arguments)
    return a+b;
}
console.log((add(55,1, 1001)))

const user = {
    name: "Karolis",
    cities: ['Vilnius', "Panevėžys", "Thetford"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + " has lived in " + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());

const object = {
    number: [1, 2, 3, 4, 5, 6, 8],
    multiplyBy: 5,
    multiplier(){
        return this.number.map((skaicius) => skaicius * this.multiplyBy);
    }
}
console.log(object.multiplier());
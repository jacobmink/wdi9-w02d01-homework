// DATA STRUCTURES

// 1) Data Types
// light switch: boolean -> const lightSwitch = true;
// email address: string -> 'fake@nothing.com';
// spaceship: object -> const ship = {body: hull, weapons: laser blasters, tools: [tractor beam, warp drive]};
// list of student names: array of strings -> const nameList = ['student1','student2',etc.];
// list of students with locations: array of objects -> const bigList = [{name: 'student1',location: 'Alabama'},
//                                                                      {name: 'student2',location: 'New York'}];
// list of students with locations and list of favorite tv shows: array of objects with an array inside each -> 
//  const hugeList = [{name: 'student1',location: 'Alabama', fave_shows: [tvShow1,tvShow2]},
//                      {name: 'student2',location: 'New York', fave_shows: [tvShow1,tvShow2]}];

// 2) Take it Easy
// 1)
const colorArr = ['red','orange','yellow','green','blue','indigo','violet'];
// 2)
console.log(colorArr[colorArr.indexOf('blue')]);
// 3)
const jake = {favoriteFood: 'noodles', hobby: 'skyweaving', townName: 'Denver', faveData: 'object'};
// 4)
console.log(jake.hobby);

// 3) Crazy Object!
const crazyObject = {
taco: [
    {
    meat: 'steak',
    cheese: ['panela', 'queso', 'chihuahua']
    },
    {
    meat: 'chicken',
    salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
],
larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
    {
        name: "Jeff",
        occupation: "manager"
    },
    {
        name: "funkhauser",
        occupation: "tv dude"
    },
    {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
}
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

// 4) Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception);

 // Bond Films
const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// 5)
const bondTitles = [];
for (let i = 0; i < bondFilms.length; i++){
    bondTitles.push(bondFilms[i]["title"]);
}
console.log(bondTitles);

// 6)
const oddBonds = [];
for (let i = 0; i < bondFilms.length; i++){
    if (bondFilms[i]["year"] % 2 != 0){
        oddBonds.push(bondFilms[i]);
    }
}
// console.log(oddBonds);

// 7)
const grossArr = [];
let sum = 0;
for (let i = 0; i < bondFilms.length; i++){
    grossArr.push(parseInt(bondFilms[i]["gross"].replace(/,|\$/g,'')));
}
for (let i = 0; i < grossArr.length; i++){
    sum += grossArr[i];
}
console.log(`The Bond movies made $${sum} cumulatively.`);

// HUNGRY FOR MORE

/*
loop through actors, add 1 to value when an actor's name shows up, then 
create an object with actors' names as keys and number of their occurences
as values.

look at each movie object, look at actor name.

const actorObject = {};
for (let i = 0; i < bondFilms.length; i++){
    actorObject[bondFilms[i]["actor"]] += 1;
}


*/
// const actorsArr = [];
// for (let i = 0; i < bondFilms.length; i++){
//     actorsArr.push(bondFilms[i]["actor"]);
// }
// console.log(actorsArr);
// for (let i = 0; i < actorsArr.length; i++){
//     for (let j = 1; j < actorsArr.length; j++){
//     if (i != j){
//         if (actorsArr[i] == actorsArr[j]){
//             actorsArr.splice(actorsArr[j],1);
//         }
//     }
// }
// }
// console.log(actorsArr);

const actorObject = {};
for (let i = 0; i < bondFilms.length; i++){
    actorObject[bondFilms[i]["actor"]] = 0;
    actorObject[bondFilms[i]["actor"]] += 1;
}

// for (let i = 0; i < Object.keys(actorObject).length; i++){

// }

console.log(actorObject);
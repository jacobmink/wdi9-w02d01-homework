// DATA STRUCTURES

// Data Types
// light switch: boolean -> const lightSwitch = true;
// email address: string -> 'fake@nothing.com';
// spaceship: object -> const ship = {body: hull, weapons: laser blasters, tools: [tractor beam, warp drive]};
// list of student names: array of strings -> const nameList = ['student1','student2',etc.];
// list of students with locations: array of objects -> const bigList = [{name: 'student1',location: 'Alabama'},
//                                                                      {name: 'student2',location: 'New York'}];
// list of students with locations and list of favorite tv shows: array of objects with an array inside each -> 
//  const hugeList = [{name: 'student1',location: 'Alabama', fave_shows: [tvShow1,tvShow2]},
//                      {name: 'student2',location: 'New York', fave_shows: [tvShow1,tvShow2]}];

// Take it Easy
// 1)
const colorArr = ['red','orange','yellow','green','blue','indigo','violet'];
// 2)
console.log(colorArr[colorArr.indexOf('blue')]);
// 3)
const jake = {favoriteFood: 'noodles', hobby: 'skyweaving', townName: 'Denver', faveData: 'object'};
// 4)
console.log(jake.hobby);

// Crazy Object!
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

// Object-ception
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
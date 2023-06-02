//Activity 1

/*const person = {
    name: "Chris",
    age: 39,
    favSong: ["Smells like teenspirt", "Regulate", "Monking Bird", "Amore"]
  };
  for (let i = 0; i < person.favSong.length; i++){
    console.log(person.favSong[i]);
  }*/

 // person.name
 
  //console.log(person ["name"])
  
  //Activity 2

const pet = {
  petname:"Dave",
  petType: "Dog",
  petAge: 6,
  petBreed:"French Bulldog",
  petColour:"grey",
  lastFed: "09:00",
  feedPet (time){
    this.lastFed = time;
    return `${this.petName} has been fed. New feed time updated to ${time}`
  }
}

console.log(pet.feedPet("13:00"))
  

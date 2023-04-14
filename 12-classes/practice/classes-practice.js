
// Question 1
//Write a class that creates an animal
class Animal{
    constructer(name, noise, eats, lives){
        this.name = name
        this.noise = noise
        this.eats = eats
        this.lives = lives

    }
}
const zebra = new Animal ("Zebra", "neeeh", "grass", "Africa")
const elephant = new Animal ("Elephant", "trumpet", "plants", "jungle")
const goat = new Animal ("Goat","baaahh", "grass","mountains")
makeNoise(); {
  console.log(`${zebra.name}` + "makes a" + `${zebra.noise}` + "sound." )
}
eatsWhat();{}
livesWhere();{}

//The animal class should have the following properties:
//   - name
//   - noise
//   - eats
//   - lives
// The animal class should have the following methods:
//   - makeNoise
//   - eatsWhat
//   - livesWhere

// Initialize 3 animals with your class & log a sentence to the console, ex:
// `Dogs live in peoples houses, they bark and are carnivorous.`



// * Question 2
// Write a class that creates shoes
class Shoe {
  constructer(size, color, type, age){
    this.size = size
    this.color = color
    this.type = type
    this.age = age
  }
}
// The shoe should have the following properties:
  // - size
  // - color
  // - type
  // - age
// Initialize 3 shoes with your class & log a sentence to the console:
//   ex: `My flipflops are yellow, size 9, and 6 years old.`
// */
const dressShoe = new Shoe(9, "white", "heels", 1)
const runningShoe = new Shoe(9.5, "black", "running", 3)
const winterShoe = new Shoe(9.5, "yellow", "boots", 2)

//Question 3: Use Inheritance to create parent and child classes
// Reference Automobile -> Coupe example in lesson

// ex: Person -> teacher -> math teacher
//  Animal -> mammal -> land/sea
class Animal {
  constructer(name, type, lives){
    this.name = name
    this.type = type
    this.lives = lives
  }
}

eat() {}
sleep() {}

class Mammal extends Animal{
  constructer(name, type, lives){
    super(name, type, lives)
  }
}

class Landmammal extends Mammal {
  constructer(name, type, lives){
    super(name, type, lives)
  }
}
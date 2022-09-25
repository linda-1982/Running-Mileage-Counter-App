// document.getElementById("count-el").innerText = 5;

// ctr+k+c -comment  ctr+k+u-uncomment
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let manoAge=44;
// let humanDogRatio=7;
// let myDogAge=manoAge*humanDogRatio;
// console.log(myDogAge);

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//     let totalTime=lap1+lap2+lap2
//     console.log(totalTime)
// }
// logLapTime()



// Create a function that increments the lapsCompleted variable with one
// Run it three times
// let lapsCompleted = 0
// function incrementLaps(){
//    lapsCompleted=lapsCompleted+1
//     console.log(lapsCompleted)


// }
// incrementLaps()
// incrementLaps()
// incrementLaps()

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// grab the count-el element, store it in a countEl variable


// let countEl=document.getElementById("count-el")
// console.log(countEl)
// let count = 0
// function increment() {
//     count = count + 1
//     countEl.innerText=count
//     // set countEl's innerText to the count
// }

// function save(){
//     console.log(count)
// }
// save()

// let username="Linda"
// let message="You have three new notifications "
// let messageToUser= message+username
// console.log(messageToUser)


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name= "Linda"
// let greeting="Hi, my name is "
// let myGreeting=greeting+name
// console.log(myGreeting)

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4")//24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name


//and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText



// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText += "👋"

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     count +=1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }
// let saveEl=document.getElementById("save-el")
// function save() {
//     let countStr=count+= " - "
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     saveEl.textContent+=countStr
//     console.log(count)
// }
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
   
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0

}








 




// ⚠️ Don't use innerHTML, use innerText instead for security reasons

// i moved image variable declaration to the top so all Functions can have access to it
const image = document.querySelectorAll(".pic")

//I'm also importing player and computer score span here

let playerScore = parseInt(document.getElementById("myScore")).innerText || 0
let computerScore = parseInt(document.getElementById("comScore")).innerText || 0


const result = document.querySelector(".result");
const computerView = document.querySelector(".computer-view")


function computerChoice() {
    const images = ['rock.png', 'paper.png', 'scissors.png']
    const random = Math.floor(Math.random() * images.length)

    const imgElement = document.querySelector("#computer-pick")
    const computerText = document.querySelector(".computer-plays")
    
    computerText.innerHTML = 'computer plays...'
    imgElement.src = images[random]
 

    return imgElement
}   



image.forEach((item) => {
    item.addEventListener("click", () => {
      // The code below, i made another loop on each image item, made the images become inactive after you click. To control user's activity. This is done with their pointer Events set to None
      
      image.forEach((item) => {
        item.style.pointerEvents = "none"
        item.style.opacity = "0.5"
      })
      
         // Added a setTimeout below to make computer's choice div disappear by setting it's display to none and also made the Players images active again after 4 seconds. The images get back interactivity with their pointer Events set to auto
    setTimeout(() => {
      document.querySelector(".computer-view").style.display = "none"
      image.forEach((item) => {
        item.style.pointerEvents = "auto"
        item.style.opacity = "1"
        item.style.transform = "scale(1)"
      })
    },4000)

        item.style.opacity = "1"
        item.style.transform = "scale(1.2)"
        computer = computerChoice()
      
      // the code below set's back computer game display to flex on click because it was previously in None to make it disappear.
        document.querySelector(".computer-view").style.display = "flex"
        
       computerPlay = computer.getAttribute('src')
        player = item.getAttribute('src')

        if (player === computerPlay) {
          
            result.innerText = 'Its a tie!'
        } 
        else if (player === "rock.png" && computerPlay === "scissors.png") {
            
            result.innerText = 'You win!'
          //updated player score here
            playerScore += 1
          document.getElementById("myScore").innerText = playerScore


        }
        else if (player === "scissors.png" && computerPlay === "paper.png") {
            
            result.innerText = 'You win!'
          //updated player score here
          playerScore += 1
          document.getElementById("myScore").innerText = playerScore
        }
        else if (player === "paper.png" && computerPlay === "rock.png") {
            
            result.innerText = 'You win!'
          //updated Player score here
          playerScore += 1
          document.getElementById("myScore").innerText = playerScore
        }
        else {
            
            result.innerHTML = 'You lose'
          //updated computer score here

          computerScore += 1
          document.getElementById("comScore").innerText = computerScore
          
           
          


        }
      console.log(playerScore, computerScore)
      
        

    })

})
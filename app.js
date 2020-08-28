const hackedTitle = document.querySelector('h1');

console.log('hack title', hackedTitle);

hackedTitle.textContent = `Hacked!`


const deleteContent = document.querySelector(' main > p')
deleteContent.textContent = " "

const bodyImage = document.createElement('img');
bodyImage.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"
document.body.prepend(bodyImage);


const counterRest = document.querySelector("span");
counterRest.textContent= 0

const yourCompromised = document.createElement("p");
yourCompromised.textContent = "Your account has been compromised."
document.body.append(yourCompromised)

const resetLink1  = document.querySelectorAll("a")
resetLink1[0].setAttribute("href", `https://thebadguys.com`);

const resetLink2  = document.querySelectorAll("a")
resetLink2[1].setAttribute("href", `https://thebadguys.com`);

const resetLink3  = document.querySelectorAll("a")
resetLink3[2].setAttribute("href", `https://thebadguys.com`);

// const newLink = document.querySelectorAll('a')
// console.log(newLink)

// // newLink.map
// //     function()
// // )
// newLink.forEach(
//     function(anchor;
//         anchor.href = "https://thebadguys.com"}

// // const newLink = document.querySelector("a").href;
// // newLink.anchorObject.href = 
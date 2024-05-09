// var istatus = document.querySelectorAll("h5")

// var btn = document.querySelectorAll(".add") 

// var check = 0
// btn.forEach(function(btn){

// btn.addEventListener("click", function(){
//     if(check == 0){
//     istatus.innerHTML = "Friends"
//     istatus.style.color = "green"
//     btn.innerHTML = "Remove Friend"
//     check = 1
//     }else{
//         istatus.innerHTML = "Stranger"
//         istatus.style.color = "red"
//         btn.innerHTML = "Add Friend"
//         check = 0
//     }
// })
// })

//--------------------------------------------------------------------

//Select all elements with the class "add"
var buttons = document.querySelectorAll(".add");

// Iterate through each button
buttons.forEach(function(btn) {
    // Find the h5 element within the parent of the button
    var istatus = btn.parentElement.querySelector("h5");
    
    // Initialize check variable for each button
    var check = 0;
    
    // Add click event listener to each button
    btn.addEventListener("click", function() {
        if (check == 0) {
            istatus.innerHTML = "Friends";
            istatus.style.color = "green";
            btn.innerHTML = "Remove Friend";
            check = 1;
        } else {
            istatus.innerHTML = "Stranger";
            istatus.style.color = "red";
            btn.innerHTML = "Add Friend";
            check = 0;
        }
    });
});

//--------------------------------------------------

// var istatus = document.querySelectorAll("h5");
// var addFriends = document.querySelectorAll(".add");
// var removeFriends = document.querySelectorAll(".remove");

// // Function to update status to 'Friends'
// function addFriendStatus(istatus) {
//   istatus.innerHTML = "Friends";
//   istatus.style.color = "green";
//   istatus.style.backgroundColor = "rgb(70, 177, 255)";
// }

// // Function to update status to 'Stranger'
// function removeFriendStatus(istatus) {
//   istatus.innerHTML = "Stranger";
//   istatus.style.color = "red";
//   istatus.style.backgroundColor = "rgb(201, 228, 253)";
// }

// // Loop through all '.add' buttons
// addFriends.forEach(function(addFriend, index) {
//   addFriend.addEventListener("click", function() {
//     addFriendStatus(istatuses[index]);
//   });
// });

// // Loop through all '.remove' buttons
// removeFriends.forEach(function(removeFriend, index) {
//   removeFriend.addEventListener("click", function() {
//     removeFriendStatus(istatuses[index]);
//   });
// });

console.log("JS loaded in");
//All variables
const amountOfChatters = 3;
const chatterOne = document.querySelector('.chatArea1');
const chatterTwo = document.querySelector('.chatArea2');
const chatterThree = document.querySelector('.chatArea3');
const chatterFour = document.querySelector('.chatArea4');
const chatFieldOne = document.querySelector('.chatter1');
const chatFieldTwo = document.querySelector('.chatter2');
const chatFieldThree = document.querySelector('.chatter3');
const chatFieldFour = document.querySelector('.chatter4');
const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
const buttonFour = document.querySelector('.buttonFour');
const messageShowing = document.querySelector('.messages');

//Check to see how many chatters, create empty fields if less than 3
if(amountOfChatters == 1){
    chatterOne.innerHTML = "No user";
    chatterTwo.innerHTML = "No user";
    buttonThree.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldThree.value;
        chatFieldThree.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageThree");
    }
    )
    buttonFour.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldFour.value;
        chatFieldFour.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageFour");
    }
    )
} else if(amountOfChatters == 2){
    chatterOne.innerHTML = "No user";
    buttonTwo.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldTwo.value;
        chatFieldTwo.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageTwo");
    }
    )
    buttonThree.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldThree.value;
        chatFieldThree.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageThree");
    }
    )
    buttonFour.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldFour.value;
        chatFieldFour.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageFour");
    }
    )
} else {
    checkFieldOne();
    buttonTwo.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldTwo.value;
        chatFieldTwo.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageTwo");
    }
    )
    buttonThree.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldThree.value;
        chatFieldThree.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageThree");
    }
    )
    buttonFour.addEventListener('click', function(){
        const chatMessage = document.createElement("div");
        chatMessage.innerHTML = chatFieldFour.value;
        chatFieldFour.value = "";
        messageShowing.appendChild(chatMessage);
        chatMessage.classList.add("chatMessageFour");
    }
    )
}

function checkFieldOne() {
    buttonOne.addEventListener('click', function () {
        if (chatFieldOne.value === "") {
            alert("Please enter a message!");
        } else {
            const chatMessage = document.createElement("div");
            chatMessage.innerHTML = chatFieldOne.value;
            chatFieldOne.value = "";
            messageShowing.appendChild(chatMessage);
            chatMessage.classList.add("chatMessageOne");
        }
    }
    )

}

function checkFieldTwo(){
    buttonTwo.addEventListener('click', function(){
        if(chatFieldTwo.value === ""){
            alert("Please enter a message!");
        } else {
            const chatMessage = document.createElement("div");
            chatMessage.innerHTML = chatFieldTwo.value;
            chatFieldTwo.value = "";
            messageShowing.appendChild(chatMessage);
            chatMessage.classList.add("chatMessageTwo");
        }
    }
    )
}


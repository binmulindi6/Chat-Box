
let textInput = document.getElementById("text-input");
const chats = [];
let chat;
let text;
let user = 'left';
document.getElementById("btn-send").addEventListener("click",send)
let time;
var display = document.getElementById("display");

/*  DISPALY SCROLL BAR ALWAYS DOWN */


/************************************** */

/*********** */
function right(){
    user = "right";
}

function left(){
    user = "left";
}
/*************** */


function send(){

    chat = textInput.value;
    let code = "";

    if(chat != ""){
        time = new Date();
        text = '<div class="'+user+'-chat">' +
                    '<div class="avatar">' +'<img src="assets/img/icon/img_avatar2.png">'+ '</div>' +
                    '<div class="chat-text">' +
                        chat +
                        '<span class="time">' + time.toLocaleTimeString() + '</span>' + 
                    '</div>' +
                '</div>';

        chats.push(text);
        chats.forEach(inner);

        function inner(value){
            code += value;
        }
        display.innerHTML = code;
        textInput.value = '';

        /*  DISPALY SCROLL BAR ALWAYS DOWN */
        display.scrollTop = display.scrollHeight;

    }


}    

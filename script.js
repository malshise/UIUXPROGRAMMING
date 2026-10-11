const serviceName = "WORN BY DH";
let isRequested = false;
let submitCount = 0;

function makeRequestMessage(content, requested){
    if(requested === true){
        return "요청이 완료되었습니다. 요청 내용: " + content;
    }

    return "요청사항을 입력한 뒤 요청해주세요.";
}

const requestForm = document.querySelector("#request-form");
const emailinput = document.querySelector("#email");
const requestButton = document.querySelector("#requestButton");
const requestMessage = document.querySelector("#requestMessage");
const requestContent = document.querySelector("#requestContent");


function handleRequest(event){
    event.preventDefault();

    const content = requestContent.value.trim();

if(content === ""){
    requestMessage.textContent =
        "요청사항을 입력한 뒤 요청해주세요.";
    requestContent.focus();
    return;
}
isRequested = true;
submitCount += 1;

requestMessage.textContent =
  makeRequestMessage(content, isRequested);

requestMessage.classList.add("is-success");

requestButton.textContent = "요청완료"
requestButton.disabled = true;

}

requestForm.addEventListener("submit", handleRequest);
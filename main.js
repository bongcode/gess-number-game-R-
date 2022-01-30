//랜덤번호 지정
//유저가 번호를 입력한다.. 그리고 'go'라는 버튼을 누름
//유저가 번호를 맞추면, 맞췄습니다!
//랜덤번호 > 유저번호 = Down!!
//랜덤번호 < 유저번호 = Up!!
//Reset 버튼을 누르면 게임이 리셋이 된다.
//5번의 기회를 다쓰면 게임이 끝난다.(더이상의 추측은 불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다.(기회를 깍지 않는다.)
//유저가 입력한 숫자를 또 입력하면, 알려준다.(기회를 깍지 않는다.)

let computerNumber = 0
let palyButton = document.getElementById("play-button")
let userInput = document.getElementById("input-number")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let chanceArea = document.getElementById("chance-area")
let gameOver = false

palyButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)


function pickRandomNum() {
    computerNumber = Math.floor(Math.random()*100)+1
    console.log("정답:", computerNumber)
};

function play(){
    let userValue = userInput.value
    console.log(userValue)

    chances --;
    chanceArea.textContent = `남은기회: ${chances}번`


    if(userValue < computerNumber){
        resultArea.textContent = "UP!!"
    }else if(userValue > computerNumber){
        resultArea.textContent = "DOWN!!"
    }else{
        resultArea.textContent = "정답입니다!!"
    }

}

function reset(){
    userInput.value = ""
    pickRandomNum()
    resultArea.textContent = "결과값이 여기에 나옵니다."
}

pickRandomNum();
// data.js 가져오기 -- 배열로 가져오기
import { questions} from './data.js'

// question.html 에 있는 각 태그 위치를 정의 (변수로)
const progressValueEl = document.querySelector('.value')
//El은 엘리먼트 각각의 태그
// doc는 최상의 모듈, DOM(Document Object Model) html에서 최상의 객체
// 브라우저에서는 윈도우
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choices1El = document.querySelector('.choice1') 
const choices2El = document.querySelector('.choice2') 

// 선택 버튼에 EventListener를 달아놓는다
choices1El.addEventListener('click', function(){
  //console.log("첫 번째 단추가 눌렸습니다.")
  nextQuestion(0)
})

choices2El.addEventListener('click', function(){
  //console.log("두 번째 단추가 눌렸습니다.")
  nextQuestion(1)
})

let currentNumber = 0
let mbti =""

function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choices1El.innerHTML = question.choices[0].text
  choices2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1)*10 + '%'
  // mbti 타입을 저장하는 변수
  
}

renderQuestion()

function nextQuestion(choiceNumber){
  const question = questions[currentNumber]

  if(currentNumber === questions.length - 1){
    // 결과페이지 보이기
    showResultPage()
    return
  }

  //해당 mbti 타입을 읽어와야 한다.
  mbti = mbti + question.choices[choiceNumber].value
  console.log("mbti = " + mbti)

  currentNumber = currentNumber + 1;
  renderQuestion()
}

function showResultPage(){
  // 쿼리 스트링을 만들어 결과페이지 호출
  // http://127.0.0.1:5500/result.html?mbti=isfj
  location.href = './result.html?mbti=' + mbti
}


renderQuestion()
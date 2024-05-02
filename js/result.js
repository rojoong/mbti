import { results , mbtis } from './data.js';
//http://127.0.0.1:5050/results/html?mbti=istj
//mbti=istj 요것을 뽑아내야 합니다.
//쿼리스트링
const mbti = new URLSearchParams(location.search).get("mbti")
console.log("mbti = " + mbti)

const result = results[mbtis[mbti]]
//console.log(result)

const titleEl = document.querySelector(".page-title")
const characterEl = document.querySelector(".character")
const boxEls = document.querySelectorAll(".box")
const jobsEls = document.querySelectorAll(".job")
const lectureEl = document.querySelector(".lecture")
const lecturelmgEl = document.querySelector(".lecture img")


titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function(box, index){
  box.innerHTML = result.results[index]
})

jobsEls.forEach(function(job, index){
  job.innerHTML = result.jobs[index]
})

lectureEl.href = result.lectureUrl
lecturelmgEl.src = result.lectureImg
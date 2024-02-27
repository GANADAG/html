//비교연산자
let a=6;
let b="6";

console.log(a==b);//true..값으로만 비교
console.log(a===b);//flase..type까지 같아야 true나옴

console.log(Object.is(a,b));//false..object는 ===과 동일
console.log(`a의 타입은 ${typeof(a)}입니다`);//타입나옴..type=num
console.log(`b의 타입은 ${typeof(b)}입니다`);//타입나옴..type=str

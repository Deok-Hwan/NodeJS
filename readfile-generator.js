// 제너레이터를 이용한 해결 방법

// 제너레이터를 이용하면 제너레이터 함수로 정의한 함수 내부에서 yield가 나올 때까지 실행이 이뤄집니다.
// 그리고 다시 제너레이터 함수를 호출하면 이전의 yield부터 다음 yield까지의 부분을 실행 합니다.
// 따라서 함수를 중간에 중지하고, 중간부터 다시 실행하거나 하는 처리가 가능해 집니다.
// 이를 이용하면 비동기 처리 코드를 깔끔하게 작성할 수 있습니다.


const fs = require('fs')

// 비동기 처리 완료를 기다리고, 다음 함수를 연속해서 호출하는 함수
function read_gfn ( g, fname){
  fs.readFile(fname, 'utf-8', (err, data) => {
    g.next(data)
  })
}

// 제너레이터 함수를 정의합니다.
const g = (function * () {
  const a = yield read_gfn(g, 'a.txt')
  console.log(a)
  const b = yield read_gfn(g, 'b.txt')
  console.log(b)
  const c = yield read_gfn(g, 'c.txt')
  console.log(c)
})()

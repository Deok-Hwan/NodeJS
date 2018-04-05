const fs = require('fs')

// (1) a.txt를 읽어 들입니다.
fs.readFile('a.txt', 'utf-8', function(err, data){

  console.log('a.txt 파일을 읽어 들였습니다.' , data)

  // (2) b.txt를 읽어 들입니다.
  fs.readFile('b.txt', 'utf-8', function(err, data){
    console.log('b.txt를 읽어 들였습니다.' ,data)

    // (3) c.txt를 읽어 들입니다.
    fs.readFile('c.txt', 'utf-8', function(err, data){
      console.log('c.txt를 읽어 들입니다. ' ,data)
    })
  })
})

// ECMASCRIPT 2015에서는 이러한 콜백 지옥을 피하고자 프로미스와 제너레이터라는 기능이 추가 되었습니다.
// 이를 이용하면 비동기 처리를 쉽게 작성할 수 있습니다.

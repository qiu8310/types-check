import { get, get2 } from 'a'

get(['a', 'b', 'c', 'test'], ([a, b, c, test]) => {
  console.log(a.aa, b.bb, c.cc, test())
})

Promise.all // 用的是上面的方案

get2(['a', 'b', 'c', 'test'] as const, ([a, b, c, test]) => {
  console.log(a.aa, b.bb, c.cc, test())
})

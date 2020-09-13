import { get, get2 } from 'a'

get(['a', 'b', 'c'], ([a, b, c]) => {
  console.log(a.aa, b.bb, c.cc)
})


get2(['a', 'b', 'c'] as const, ([a, b, c]) => {
  console.log(a.aa, b.bb, c.cc)
})

Promise.all

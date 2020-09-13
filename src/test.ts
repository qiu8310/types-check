import { get } from 'a'

get(['a', 'b', 'c'], ([a, b, c]) => {
  console.log(a.aa, b.bb, c.cc)
})

Promise.all

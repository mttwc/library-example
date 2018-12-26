// Note the submodules do not need to be referenced!
import { foo1, bar2 } from '../../'

// Expected behavior: bar1 should not be present in the output bundle.js
console.log(foo1())
console.log(bar2()) // References foo2()
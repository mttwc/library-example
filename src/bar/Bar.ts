import { foo2 } from '../foo/Foo'

export function bar1() {
  return 'bar1'
}

export function bar2() {
  return foo2()
}
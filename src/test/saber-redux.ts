import * as saber_redux from '../core/saber-redux'

export function test_saber_redux() {
  typeof alert === 'undefined' ? console.log(saber_redux) : alert(saber_redux)
}

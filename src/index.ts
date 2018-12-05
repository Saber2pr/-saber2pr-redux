/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:25:19
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-05 23:41:08
 */
import { $Store } from './redux/dev/Build'
import { IAction_default } from './redux/types/Types'

// 监听回调
let listener = () => console.log($Store.getState())
// 注册监听回调
$Store.subscribe(listener)

// 发射action
$Store.dispatch<IAction_default>({
  type: 'default',
  value: 'hello redux'
})

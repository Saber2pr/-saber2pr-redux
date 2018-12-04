/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:25:19
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 15:15:59
 */
import { IAction } from './types/Types'
import { IAction_Type_Title } from './dev/Actions'
import { $Store } from './dev/Build'

// 监听回调
let listener = () => console.log($Store.getState())
// 注册监听回调
$Store.subscribe(listener)

// 发射action
$Store.dispatch<IAction<IAction_Type_Title>>({
  type: 'sayHello',
  value: 'hello ts'
})

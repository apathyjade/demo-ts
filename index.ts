/*
 * @Author: ApathyJade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2018-07-23 17:45:40
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2018-07-23 17:45:40
 */

import Div from './src/tag'

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: Div) {
  console.log(labelledObj.name);
}

let myObj = {id: 'div', class: 'div', name: 'Size 10 Object', disabled: true};
printLabel(myObj);
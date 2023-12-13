// 导入Angular核心模块
import { Directive, HostBinding, HostListener } from '@angular/core';

// 使用@Directive装饰器定义一个新的指令
@Directive({
  selector: '[appColors]'  // 指定指令的选择器，这里为'appColors'
})
export class ColorsDirective {

  // 定义一个颜色数组，包含各种颜色字符串
  colors = [
    'AliceBlue',
    'Cyan',
    'Black',
    'Grey',
    'Purple',
    'White'
  ]

  // 用于在颜色数组中循环的索引
  i = 0

  // 构造函数
  constructor() { }

  // 使用@HostBinding装饰器将元素的背景颜色属性绑定到bgColor变量
  @HostBinding('style.background-color') 
  bgColor:string = 'White'  // 初始背景颜色设置为白色

  // 使用@HostListener装饰器监听元素的点击事件
  @HostListener('click') 
  changeColor(){
    this.bgColor = this.colors[this.i]  // 根据索引i更改背景颜色
    this.i = ++this.i % this.colors.length  // 更新索引i，实现循环切换颜色
  }
}

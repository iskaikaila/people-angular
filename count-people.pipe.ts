// 导入Angular核心模块
import { Pipe, PipeTransform } from '@angular/core';

// 使用@Pipe装饰器定义一个新的管道
@Pipe({
  name: 'countPeople'  // 设置管道的名称为'countPeople'
})
export class CountPeoplePipe implements PipeTransform {
  // 实现PipeTransform接口中的transform方法
  transform(people: any[]): number {
    // 返回输入数组的长度
    return people.length;
  }
}

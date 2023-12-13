import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // 这是一个搜索管道，用于过滤包含指定查询字符串的人员列表

  transform(people: any[], querystring: string): any {
    // 使用filter方法过滤人员列表，仅保留包含查询字符串的人员
    return people.filter(p => { 
      return p.name.includes(querystring);
    });
  }

}

// 导入Angular核心模块
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // 导入ActivatedRoute服务用于访问路由参数

// 使用@Component装饰器定义组件元数据
@Component({
  selector: 'app-person-view',  // 定义组件的选择器
  templateUrl: './person-view.component.html',  // 指定组件的HTML模板
  styleUrls: ['./person-view.component.css']  // 指定组件的样式文件
})

  
export class PersonViewComponent {
  pname: string  // 定义一个字符串属性用于存储人物的名字

  constructor(private activatedRoute: ActivatedRoute) {
    // 从路由快照中获取名为'name'的参数并赋值给pname
    this.pname = activatedRoute.snapshot.params['name'];
  } // 构造函数，注入ActivatedRoute服务
}

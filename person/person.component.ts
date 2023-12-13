// 导入Angular核心和路由相关模块
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// 使用@Component装饰器定义组件元数据
@Component({
  selector: 'app-person',  // 定义组件的选择器
  templateUrl: './person.component.html',  // 指定组件的HTML模板
  styleUrls: ['./person.component.css']  // 指定组件的样式文件
})
export class PersonComponent implements OnInit {
  @Input() person: any  // 通过Input装饰器从父组件接收person数据
  @Output() delete = new EventEmitter()  // 通过Output装饰器创建一个事件发射器，用于向父组件发送删除事件

  // 构造函数，注入Router服务
  constructor(private router: Router) {
     // this.person = {
    //   name : "bobby",
    //   age: 42,
    //   instructor: true,
    //   added_on: new Date().getTime()
      
    // }
  }

  // onDelete方法：处理删除操作
  onDelete(evt: any, person_name: string) {
    evt["person_name"] = person_name  // 将人物名称添加到事件对象中
    this.delete.emit(evt)  // 触发delete事件，将事件对象发送给父组件
  }

  // ngOnInit生命周期钩子：在组件初始化时执行
  ngOnInit(): void {
  }

  // onView方法：处理查看人物详情的操作
  onView() {
    this.router.navigate(["/person", this.person.name])  // 使用路由导航到人物详情页面，路径参数为人物名称
  }
}


// 导入Angular核心模块和服务
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';  // 导入PeopleService服务

// 使用@Component装饰器定义组件元数据
@Component({
  selector: 'app-people-list',  // 定义组件的选择器
  templateUrl: './people-list.component.html',  // 指定组件的HTML模板
  styleUrls: ['./people-list.component.css']  // 指定组件的样式文件
})
export class PeopleListComponent implements OnInit {
  people: any[]  // 定义一个数组来存储人物信息
  query: string  // 定义一个查询字符串变量

  // 构造函数，注入PeopleService服务
  constructor(private ps: PeopleService) {
    this.query = ''  // 初始化查询字符串为空
    this.people = []  // 初始化人物数组为空

        // this.people = [
    //   {
    //     name : "bobby",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "aaa",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "bbbb",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "ccc",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   }
      
    // ]
  }

  // ngOnInit生命周期钩子：在组件初始化时执行
  ngOnInit(): void {
    this.people = this.ps.get()  // 调用PeopleService的get方法来获取人物列表
  }

  // onPersonDelete方法：处理删除人物的操作
  onPersonDelete(evt: { person_name: string }) {
    let del_per = evt.person_name  // 获取要删除的人物名称
    this.people = this.ps.delete(del_per)  // 调用PeopleService的delete方法来删除人物
    console.log(`person ${del_per} is deleted`)  // 在控制台打印删除信息
  }
}


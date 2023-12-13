// 导入Angular核心模块、表单相关模块和服务
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

// 使用@Component装饰器定义组件元数据
@Component({
  selector: 'app-person-add-form',  // 定义组件的选择器
  templateUrl: './person-add-form.component.html',  // 指定组件的HTML模板
  styleUrls: ['./person-add-form.component.css']  // 指定组件的样式文件
})

  
export class PersonAddFormComponent {
  form: FormGroup  // 定义一个FormGroup来表示整个表单

  // 构造函数，注入PeopleService和Router服务
  constructor(private ps: PeopleService, private router: Router) {
    // 创建表单控件
    let formControls = {
      name: new FormControl('', [  // 创建名字字段的FormControl，添加必填和最小长度验证器
        Validators.required,
        Validators.minLength(4)
      ]),
      instructor: new FormControl(),  // 创建讲师字段的FormControl
      age: new FormControl()  // 创建年龄字段的FormControl
    }
    this.form = new FormGroup(formControls)  // 通过formControls初始化FormGroup
  }

  // 自定义表单验证器
  formValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get("name")  // 获取名字字段的控件
    const ins = control.get("instructor")  // 获取讲师字段的控件
    const valid_names = ['bobby', 'steve']  // 定义有效的名字列表
    // 如果名字在有效名字列表中且讲师字段为true，或者讲师字段为false，则验证通过，否则返回验证错误
    return valid_names.includes(name!.value.trim()) && ins!.value || !ins!.value ?
      null : { form_error: true }
  }

  // 提交表单的方法
  onSubmit(newPerson: any) {
    // console.log(newPerson)  // 可以在控制台打印新人物的信息，用于调试
    this.ps.add(newPerson)  // 调用PeopleService的add方法添加新人物
    this.router.navigate(["/people"])  // 提交后导航到人物列表页面
  }
}

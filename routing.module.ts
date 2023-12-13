import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { PersonViewComponent } from './person-view/person-view.component';
// import { PersonEditComponent } from './person-edit/person-edit.component';

// 定义应用程序的路由配置
const appRoutes: Routes = [
  { path: 'people', component: PeopleListComponent }, // 显示人员列表的路由
  { path: 'person/add', component: PersonAddFormComponent }, // 显示添加人员表单的路由
  { path: 'person/:name', component: PersonViewComponent }, // 显示个人资料的路由，其中":name"是动态参数
  { path: '', redirectTo: '/people', pathMatch: 'full' } // 默认重定向到/people路由
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

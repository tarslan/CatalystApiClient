import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';



@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: PeopleListComponent }
      { path: 'details/:id', component: PeopleDetailsComponent }
    ])
  ]
})
export class PeopleModule { }

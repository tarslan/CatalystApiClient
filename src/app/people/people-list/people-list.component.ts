import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { People } from './../../_interfaces/people/people.module'
import { ErrorHandlerService } from './../../shared/services/error-handler.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public people: People[];
  public errorMessage: string = '';

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getPeople();
  }
  public getPeople = () => {
    let apiAddress: string = "api/person";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.people = res as People[];
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    })
  }

}

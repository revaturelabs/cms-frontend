import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagOperationForm} from "../../model/tag.operation.form"
import {Content} from "../../model/content";
import { Module } from 'src/app/model/module';

@Component({
  selector: 'app-tag-operations',
  templateUrl: './tag-operations.component.html',
  styleUrls: ['./tag-operations.component.css']
})
export class TagOperationsComponent implements OnInit {

  tag: Tag;
  tags: Tag[];
  message: string;
  form: TagOperationForm;

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new TagOperationForm(new Tag(1,1,"", "", 1, 
    [new Content(1, "", "", "" ,"", [1,2,3], new Date(0), new Date(1))],[ new Module(1, "", false)], new Date(0), new Date(1) ),
    new Content(1, "", "", "" ,"", [1,2,3], new Date(0), new Date(1)));
    this.refreshTags();
  }

  refreshTags() {
    this.tagService.retrieveAllTags().subscribe(
      response => {
        this.tags = response;
      }
    );
  }

  deleteTag(id) {
    console.log(`delete tag ${id}`);
    this.tagService.deleteTag(id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Tag ${id} Successful!`;
        this.refreshTags();
      }
    );
  }

  updateTag(id) {
    this.router.navigate(['tag', id]);
  }

  submitCreate() {
    this.router.navigate(['tag', -1]);
  }
}

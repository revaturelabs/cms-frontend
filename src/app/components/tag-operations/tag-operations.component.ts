import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagOperationForm} from '../../model/tag.operation.form';
import {Content} from '../../model/content';
import {Module} from '../../model/module';
import {InputContentDTO} from '../../model/content.dto';

@Component({
  selector: 'app-tag-operations',
  templateUrl: './tag-operations.component.html',
  styleUrls: ['./tag-operations.component.css']
})
export class TagOperationsComponent implements OnInit {

  tag: Tag;
  content: Content;
  module: Module;
  tags: Tag[];
  contents: Content[];
  modules: string[];
  inputContent = new InputContentDTO(new Content(0, [], '', '', '', '', null, null),  [], new Module(0, '', true, null, null));

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTags();
    this.refreshModules();
    this.refreshContents();
  }

  refreshTags() {
    this.tagService.retrieveAllTags().subscribe(
      response => {
        console.log(response);
        this.tags = response;
      }
    );
  }
  refreshModules() {
    this.tagService.retrieveAllModules().subscribe(
      response => {
        this.modules = response;
      }
    );
  }
  refreshContents() {
    this.tagService.retrieveAllContents().subscribe(
      response => {
        this.contents = response;
      }
    );
  }

  // updateTag(id) {
  //   this.router.navigate(['tag', id]);
  // }
  //
  submitCreate() {
    console.log(this.inputContent);
    this.tagService.createContent(this.inputContent).subscribe(data => console.log(data));
    // this.router.navigate(['tag', -1]);
  }

  addTagName(tagName: string) {
    // this.inputContent.content.tags.push(tagName);
    this.inputContent.tags.push(tagName);
  }
}

import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagOperationForm} from '../../model/tag.operation.form';
import {Content} from '../../model/content';
import {Module} from '../../model/module';

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
  modules: Module[];
  message: string;
  form: TagOperationForm;

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new TagOperationForm(new Tag(null, null, '', '', null, null, null),
      new Content(null, '', '', '', '', null, null, null),
      new Module(null, '', null, null, null ));
    this.refreshTags();
    this.refreshModules();
    this.refreshContents();
  }

  refreshTags() {
    this.tagService.retrieveAllTags().subscribe(
      response => {
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

  // deleteTag(id) {
  //   console.log(`delete tag ${id}`);
  //   this.tagService.deleteTag(id).subscribe(
  //     response => {
  //       console.log(response);
  //       this.message = `Delete of Tag ${id} Successful!`;
  //       this.refreshTags();
  //     }
  //   );
  // }

  // updateTag(id) {
  //   this.router.navigate(['tag', id]);
  // }
  //
  submitCreate() {
    this.router.navigate(['tag', -1]);
  }
}

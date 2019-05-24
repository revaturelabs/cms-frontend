import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagOperationForm} from '../../model/tag.operation.form';
import {Content} from '../../model/content';
import { Module } from 'src/app/model/module';

//  Component to handle tag operation
@Component({
  selector: 'app-tag-operations',
  templateUrl: './tag-operations.component.html',
  styleUrls: ['./tag-operations.component.css']
})
export class TagOperationsComponent implements OnInit {

  tag: Tag;
  tags: Tag[];
  modules: Module[];
  contents: Content[];
  message: string;
  form: TagOperationForm;

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { }


  // On initialization takes a tagOperationForm and gives it a new tag and new module then calls the refreshTags method

  ngOnInit() {
    this.form = new TagOperationForm(new Tag(null, null, null, null, null, null, null, null, null),
      new Content(null, null, null, null, null, null, null, null),
      new Module(null, null, null));
    this.refreshTags();
  }

  //  * Calls retrieveAllTags service and retrieves all tags in tags list
  //  */
  refreshTags() {
    this.tagService.retrieveAllTags()
                  .subscribe(
                    response => this.tags = response
                  );
  }

  //  Takes an id parameter and calls the deleteTag service.
  //  Returns a success message if deletion is successful
  //  * @param id

  deleteTag(id) {
    console.log(`delete tag ${id}`);
    this.tagService.deleteTag(id)
                   .subscribe(
                    response => {
                      console.log(response);
                      this.message = `Deleted Tag ${id} Successfully!`;
                      this.refreshTags();
                    }
                  );
  }

  // /**
  //  * Takes a parameter id and navigates to tag
  //  * @param id
  //  */
  updateTag(id) {
    this.tagService.updateTag(id)
                    .subscribe(
                      response => {
                        this.tag = response;
                        console.log(response);
                        this.message = 'Updated Tag ${id} Successfully!';
                        this.refreshTags();
                      }
                    );
  }

  // /**
  //  * Navigates to tag without a parameter
  //  */
  submitCreate() {
    this.tagService.createTag(Tag)
                    .subscribe(
                      response => {
                        this.tag = response;
                        console.log(response);
                        this.message = 'Created Tag ${id} Successfully!';
                        this.refreshTags();
                      }
                    );
  }
}

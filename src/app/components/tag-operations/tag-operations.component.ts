import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';

@Component({
  selector: 'app-tag-operations',
  templateUrl: './tag-operations.component.html',
  styleUrls: ['./tag-operations.component.css']
})
export class TagOperationsComponent implements OnInit {

  tag: Tag;
  tags: Tag[];
  message: string;

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { }

  ngOnInit() {
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

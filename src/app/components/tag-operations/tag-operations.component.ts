import { Component, OnInit } from '@angular/core';
import {TagOperationsService} from '../../services/tag-operations.service';
import {Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagOperationForm} from '../../model/tag.operation.form';
import {Content} from '../../model/content';
import {Module} from '../../model/module';
import {InputContentDTO} from '../../model/content.dto';
import {FormControl, Validators} from '@angular/forms';

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
  submitted: boolean;
  message: string;
  

  // public myreg = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
  public myreg = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  url = new FormControl('', [Validators.required, Validators.pattern(this.myreg)]);

  constructor(
    private tagService: TagOperationsService,
    private router: Router
  ) { 
    this.submitted = false;
  }

  ngOnInit() {
    this.refreshTags();
    // this.refreshModules();
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
    this.submitted = true;
    this.displayMessage();
  }

  // submitToast() {
  //   var x = document.getElementById("submit")
  //   x.className = "show";
  //   setTimeout(function(){x.className = x.className.replace("show","");},3000);
  // }

  addTagName(tagName: string) {
    // this.inputContent.content.tags.push(tagName);
    this.inputContent.tags.push(tagName);
  }

  markTouched() {
    this.url.markAsTouched();
    this.url.updateValueAndValidity();
  }

  displayMessage(){
    if(this.submitted == true){
      this.message = "Content Created Successfully";           
    } else {
      this.message = "";
    }
  }

}

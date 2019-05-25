import {Tag} from './tag';
import {Content} from './content';
import {Module} from './module';

export class TagOperationForm {
  constructor(public tag: Tag,
              public content: Content,
              public module: Module
              ) {
  }
}

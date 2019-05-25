import {Content} from './content';
import {Module} from './module';

export class InputContentDTO {
  constructor(public content: Content, public tags: string[], public module: Module) {

  }
}

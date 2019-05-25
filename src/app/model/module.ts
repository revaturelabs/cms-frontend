
// /**
//  * Object model for the Module table.
//  * Module template, most module functionality will be implemented in future sprints.
//  */
export class Module {
    constructor(
        public moduleId: number,            // Primary key of module
        public moduleName: string,          // Name of the module
        public active: boolean,      // Is this module active? (i.e. deactivate module for old Java version)
        public dateCreated: Date,
        public dateUpdated: Date
        // public createdDate: number  //placeholder for created date
        // public updatedDate: number  //placeholder for updated date

    ) {
    }
}

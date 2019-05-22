//Object model for the Module table.
//Module template, most module functionality will be implemented in future sprints.

export class Module {
    public id: number,            //Primary key of module
    public name: string,          //Name of the module
    public isActive: boolean      //Is this module active? (i.e. deactivate module for old Java version)

    //public createdDate: number        //placeholder: time of creation in millis
    //public updatedDate: number        //placeholder: time of update in millis
}
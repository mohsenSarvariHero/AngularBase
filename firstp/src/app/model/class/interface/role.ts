import { RolesComponent } from './../../../components/roles/roles.component';
export interface IRole{
    roleId : number,
    role : string
}
export interface IDesignation{
    roleId : number,
    role : string
}

export interface APIResponseModel {
    message : string,
    result : boolean;
    date : any
}
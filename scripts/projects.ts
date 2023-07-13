import { Url } from "url";

export interface IProject
{
    name:string,
    title:string,
    slug:string,
    repoUrl:Url
}

export const projects:IProject[] = require('../database/projectsDb.json');


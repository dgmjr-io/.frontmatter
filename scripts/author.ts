import { EmailAddress } from 'emailaddress';

export interface IAuthor {
    avatar?:     URL;
    bio?:        string;
    email?:      EmailAddress;
    first_name?: string;
    github?:     string;
    initials:    string;
    last_name?:  string;
    linkedin?:   URL;
    name:        string;
    slug:        string;
    twitter?:    string;
    website?:    URL;
}

export const authors:IAuthor[] = require("../database/authorsDb.json");

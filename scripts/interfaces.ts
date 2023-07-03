export interface IAuthors
{
    authors:string[]|undefined;
}

export interface IKeywords
{
    keywords: string[]|undefined;
}

export interface IDescription
{
    description: string|undefined
}

export interface IPublishDate
{
    date:Date|undefined;
}

export interface ILastModified
{
    lastMod:Date|undefined;
}

export interface ISlug
{
    slug:string|undefined;
}

export interface ITitle
{
    title:string|undefined;
}

export interface IProjectSlug
{
    project:string|undefined;
}

export interface ILicenseSlug
{
    license:string|undefined;
}

export interface IReadme extends IAuthors, IKeywords, 
                        IDescription, IPublishDate, 
                        ILastModified, ISlug, IProjectSlug, 
                        ITitle
{

}
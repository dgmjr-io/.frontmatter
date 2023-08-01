/* 
 * interfaces.ts
 * 
 *   Created: 2023-07-27-08:38:19
 *   Modified: 2023-07-27-08:38:19
 * 
 *   Author: David G. Moore, Jr. <david@dgmjr.io>
 * 
 *   Copyright © 2022 - 2023 David G. Moore, Jr., All Rights Reserved
 *      License: MIT (https://opensource.org/licenses/MIT)
 */

export interface Dates extends LastModifiedDate, PublishedDate {
}

export interface Authors {
    authors?: string[];
}

export interface Slug {
    slug?: string;
}

export interface Authors {
    authors?: string[];
}

export interface Keywords {
    keywords?: string[];
}

export interface Description {
    description?: string
}

export interface PublishedDate {
    date?: Date;
}

export interface LastModifiedDate {
    lastMod?: Date;
}

export interface Slug {
    slug?: string;
}

export interface Title {
    title?: string;
}

export interface ProjectSlug {
    project?: string;
}

export interface LicenseSlug {
    license?: string;
}

export interface Readme extends Authors, Keywords,
    Description, Dates, Slug, ProjectSlug, LicenseSlug,
    Title {
}

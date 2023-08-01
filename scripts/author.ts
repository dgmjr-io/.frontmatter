/* 
 * author.ts
 * 
 *   Created: 2023-07-02-04:24:40
 *   Modified: 2023-07-27-08:21:00
 * 
 *   Author: David G. Moore, Jr. <david@dgmjr.io>
 * 
 *   Copyright © 2022 - 2023 David G. Moore, Jr., All Rights Reserved
 *      License: MIT (https://opensource.org/licenses/MIT)
 */

import { EmailAddress } from 'emailaddress';

export type Author = {
  avatar?: URL;
  bio?: string;
  email?: EmailAddress;
  first_name?: string;
  github: string;
  initials: string;
  last_name?: string;
  linkedin?: URL;
  name: string;
  slug: string;
  twitter?: string;
  website?: URL;
}

export type IAuthorsDb =
  {
    findByInitials: (initials: string) => Author | undefined
    findByGitHubId: (gitHubId: string) => Author | undefined;
  }

/**
 * A class representing a database of authors.
 */
export class AuthorsDb implements IAuthorsDb {
  private authors: Record<string, Author> = {};
  private authorsByIndex: Map<number, Author> = new Map();
  private authorsByInitials: Map<string, Author> = new Map();
  private authorsByGitHubId: Map<string, Author> = new Map();

  public get size() { return this.authorsByIndex.size; }

  /**
   * Constructs a new instance of the AuthorsDb class.
   * @param authors - An optional array of authors to initialize the database with.
   */
  constructor(authors?: Author[]) {
    if (authors) {
      this.initializeAuthors(authors);
    }
  }

  /**
   * Initializes the authors database with the given authors.
   * @param authors - The authors to initialize the database with.
   */
  private initializeAuthors(authors: Author[]): void {
    this.authors = authors.reduce((acc: Record<string, Author>, author) => {
      acc[author.slug] = author;
      return acc;
    }, {});

    this.authorsByInitials = new Map(
      authors.map((author) => [author.initials.toLowerCase(), author])
    );

    this.authorsByGitHubId = new Map(
      authors.map((author) => [author.github.toLowerCase(), author])
    );

    this.authorsByIndex = new Map(
      authors.map((author, i) => [i, author])
    )
  }

  /**
   * Finds an author by initials.
   * @param initials - The initials of the author.
   * @returns The author with the specified initials, or undefined if not found.
   */
  public findByInitials(initials: string): Author | undefined {
    return this.authorsByInitials.get(initials.toLowerCase());
  }

  /**
   * Finds an author by GitHub ID.
   * @param gitHubId - The GitHub ID of the author.
   * @returns The author with the specified GitHub ID, or undefined if not found.
   */
  public findByGitHubId(gitHubId: string): Author | undefined {
    return this.authorsByGitHubId.get(gitHubId.toLowerCase());
  }

  /**
   * Adds an author to the database.
   * @param author - The author to add.
   */
  public add(author: Author): void {
    this.authors[author.slug] = author;
    this.authorsByIndex.set(this.authorsByIndex.size + 1, author);
    this.authorsByInitials.set(author.initials.toLowerCase(), author);
    this.authorsByGitHubId.set(author.github.toLowerCase(), author);
  }

  /**
   * Updates an author in the database.
   * @param author - The author to update.
   */
  public update(author: Author): void {
    if (this.authors.hasOwnProperty(author.slug) && this.authorsByIndex.hasOwnProperty(this.findIndex(author))) {
      this.authors[author.slug] = author;
      this.authorsByIndex.set(this.findIndex(author), author);
      this.authorsByInitials.set(author.initials.toLowerCase(), author);
      this.authorsByGitHubId.set(author.github.toLowerCase(), author);
    }
  }

  public findIndex(author: Author): number {
    for (var i = 0; i < this.authorsByIndex.keys.length; i++) {
      let returnValue = this.authorsByIndex.get(i);
      if (returnValue?.slug === author.slug) {
        return i;
      }
    }
    return -1;
  }

  public get(i: number): Author {
    let returnValue = this.authorsByIndex.get(i);
    if (returnValue) {
      return returnValue;
    }
    else {
      throw new Error(`Index ${i} was out of range!`);
    }
  }
  /**
   * Removes an author from the database.
   * @param author - The author to remove.
   */
  public remove(author: Author): void {
    if (this.authors.hasOwnProperty(author.slug)) {
      delete this.authors[author.slug];
      this.authorsByInitials.delete(author.initials.toLowerCase());
      this.authorsByGitHubId.delete(author.github.toLowerCase());
    }
  }
}

export const authors: AuthorsDb = new AuthorsDb(require("../database/authorsDb.json") as Author[]);

console.log(JSON.stringify(authors));
console.log(`authors.findByGitHubId('dgmjr'): ${JSON.stringify(authors.findByGitHubId('dgmjr'))}`);
console.log(`authors.findByInitials('dgmjr'): ${JSON.stringify(authors.findByInitials('dgmjr'))}`);

// console.log(authors.findByGitHubId('dgmjr'));

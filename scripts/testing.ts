import { authors } from "./author";
import { media } from "./media";

for(var i = 0; i < authors.length; i++)
{
    console.log(
`Name: ${authors[i].first_name} ${authors[i].last_name}
Email: ${authors[i].email}
Website: ${authors[i].website}
Bio: ${authors[i].bio}
GitHub ID: ${authors[i].github}
Avatar: ${authors[i].avatar}
LinkedIn: ${authors[i].linkedin}
Initials: ${authors[i].initials}
Slug: ${authors[i].slug}\r\n`);
}

for(var m in media.frontmatter)
{
    console.log(JSON.stringify(m));
}

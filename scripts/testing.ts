import { AuthorsDb } from "./author";
import { authors } from "./author";
import { MediaAsset, MediaFolder, media } from "./media";

for (var i = 0; i < authors.size; i++) {
    console.log(
        `Name: ${authors.get(i).first_name} ${authors.get(i).last_name}
Email: ${authors.get(i).email}
Website: ${authors.get(i).website}
Bio: ${authors.get(i).bio}
GitHub ID: ${authors.get(i).github}
Avatar: ${authors.get(i).avatar}
LinkedIn: ${authors.get(i).linkedin}
Initials: ${authors.get(i).initials}
Slug: ${authors.get(i).slug}\r\n`);
}

console.log(`findByGitHubId(('dgmjr'):
${JSON.stringify(authors.findByGitHubId('dgmjr'))}\r\n`);

console.log(`findByInitials(('dgmjr'):
${JSON.stringify(authors.findByInitials('dgmjr'))}\r\n`);

for (var m in media) {
    if (m.length > 0) {
        console.log(`"${m}":`);
        if (media[m] instanceof MediaFolder) {
            var mf = media[m] as MediaFolder;
            for (var f in mf) {
                console.log(`  ${f}: ${JSON.stringify(mf[f])}`);
                console.log(`${JSON.stringify(mf)}: ${JSON.stringify(f)}`);
            }
        }
        else if (media[m] instanceof MediaAsset) {
            var ma = media[m] as MediaAsset;
            console.log(`  ${m}: ${JSON.stringify(ma)}`);
        }
    }
}

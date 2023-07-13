import { projects, IProject } from "projects";
import { authors, IAuthor }

const args = process.argv;
if (args && args.length > 0) {
    const workspaceArg = args[2]; // The workspace path
    const markdownFileArg = args[3]; // The file path
    const frontMatterArg = JSON.parse(args[4]); // Front matter data
  
    console.log(frontMatterArg);
  }



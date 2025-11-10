import { readFile, writeFile } from 'fs/promises';

const first = await readFile('./content/test.txt', 'utf-8');
console.log(first);


// the flag 'a' means that it will append the text into the file and not overwrite it as default
await writeFile('./content/subfolder/second.txt', 'Hello modern Node.js!', {flag : 'a'});
const content = await readFile('./content/subfolder/first.txt', 'utf-8');
console.log(content);
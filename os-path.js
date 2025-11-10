import path from 'path';

// show ur path separator
// console.log(path.sep);

const filePath = path.join('content', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(import.meta.dirname, 'content', 'test.txt');
console.log(absolute);
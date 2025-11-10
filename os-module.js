import os from 'os';

//info about current user
const user = os.userInfo();

// method returns the system uptimes in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.version(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)
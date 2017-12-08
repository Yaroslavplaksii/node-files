//console.log(global);

//console.log(process);

//console.log(process.execPath);//поверне шлях до поточного файлу
//console.log(process.version);//поверне версію NODEJS
//console.log(process.platform);// поверне поточну платформу

//console.log(process.argv)

//const message = process.argv[2];
//console.log(message);

/*
const index = process.argv.indexOf('-m');
if(index > -1){
    const message = process.argv[index+1];
    console.log(message);
}*/
/*
function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > -1)? process.argv[index + 1] : null;
}
const message = getValue('-m') || 'Hi';
const name = getValue('-n') || 'Guest';
console.log(`${message}, ${name}`);*/

/*
const stdout = process.stdout;
stdout.write('Node.js');*/

/*
const stdin = process.stdin;
const stdout = process.stdout;
stdin.on('data',data=>stdout.write(data));*/

/*
const stdin = process.stdin;
const stdout = process.stdout;
stdout.write('Your name? ');
stdin.on('data',input=>{
    const name = input.toString().trim();
    console.log(name);    
});*/

/*
const stdin = process.stdin;
const stdout = process.stdout;
stdout.write('Your name? ');
stdin.on('data',input=>{
    const name = input.toString().trim();
    const reversedName = name.split('').reverse().join('');
    stdout.write(`\n${name} name reverse ${reversedName}`);
    process.exit();
});
process.on('exit',()=>stdout.write('\n Good by!!!'));*/

/*
const buffer = Buffer.from('Node.js');
console.log(buffer);
*/

/*
const buffer = Buffer.from('Node.js','UTF-8');
console.log(buffer.toString());
*/
/*
const buffer = Buffer.from('Node.js','UTF-8');
console.log(buffer.toJSON());*/

/*
const buffer = Buffer.from('Node.js','UTF-8');
console.log(buffer.toString());
buffer[0] = 77;
console.log(buffer.toString());
*/
/*
const buffer = Buffer.from('Node.js','UTF-8');
console.log(buffer.toString());
buffer.write('R');
console.log(buffer.toString());*/

/*
const buffer = Buffer.from('Node.js','UTF-8');
console.log(buffer.toString());
buffer.write('R');
//console.log(buffer.slice(0,4).toString());
console.log(buffer.length);
*/

/*
const buffer = Buffer.alloc(256);
console.log(buffer);
*/

/*
const waitTimeout = 3000;
const waitInterval = 100;
let currentTime = 0;
let percent = 0;

function print(percent){
   process.stdout.clearLine();//очищення рядка виведення
   process.stdout.cursorTo(0);//переміщення курсору на початок
   process.stdout.write(`Завантаження ...${percent}%`);
}

setInterval(() => {
    currentTime += waitInterval;
    percent = Math.floor(currentTime / waitTimeout * 100);
     print(percent);
},waitInterval);

setTimeout(()=>{
    print(100);
    process.stdout.write('\nГотово!');
    process.exit();
},waitTimeout);
*/
/*
const path = require('path');
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
*/
/*
const fs = require('fs');
console.log('Читання директорії');
const contents = fs.readdirSync(__dirname);
console.log(contents);
console.log('finish');*/
/*
const fs = require('fs');
console.log('Читання директорії');
fs.readdir(__dirname,(error,data)=>{
    if(error) throw error;
    console.log(data);
});
console.log('finish');*/
/*
const fs = require('fs');
fs.readFile('test.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data);
});*/

const fs = require('fs');
function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > -1)? process.argv[index + 1]:null;
}
const filename = getValue('-f');
fs.readFile(filename,'utf-8',(error,data)=>{
    if(error) return console.log('Такого файлу немає');
    console.log(data);
});




 

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
/*
const fs = require('fs');
function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > -1)? process.argv[index + 1]:null;
}
const filename = getValue('-f');
fs.readFile(filename,'utf-8',(error,data)=>{
    if(error) return console.log('Такого файлу немає');
    console.log(data);
});*/
/*
const fs = require('fs');
fs.writeFile('test.txt','hello world',error => {
    if(error) throw error;    
    console.log("File created");
});*/
/*
const fs = require('fs');
fs.appendFile('test.txt','hello world',error => {
    if(error) throw error;    
    console.log("File created");
});
*/

/*
const fs = require('fs');
function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > -1)? process.argv[index + 1]:null;
}
const filename = getValue('-f');
const content = getValue('-c');
fs.appendFile(filename,content,error => {
    if(error) throw error;    
    console.log("File created");
});*/


/*
const fs = require('fs');
fs.watch(__dirname,(event,filename)=>{
    console.log(event);
    console.log(filename);
});
*/
/*
const fs = require('fs');
const watcher = fs.watch(__dirname,(event,filename)=>{
    console.log(event);
    console.log(filename);
});
watcher.on('error',error => console.log(error));
*/
/*
const fs = require('fs');
const command = process.argv[2]; //беремо з командного рядка команди
const title = process.argv[3]; //номер вказує на слово по порядку
const content = process.argv[4];
switch(command){
    case 'list':
    list((error,notes)=>{
        if(error) return console.log(error.message);
        notes.forEach((note,index)=>console.log(`${index}.${note.title}`));
    });
    break;
    
    case 'view':
    view(title,(error,note)=>{
         if(error) return console.log(error.message);
         console.log(`# ${note.tile}\r\n\r\n---\r\n\r\n${note.content}`);
    });
    break;
    
    case 'create':
    create(title,content,error => {
       if(error) return console.log(error.message);
       console.log('Замітка створена'); 
    });
    break;
    
    case 'remove':
    remove(title,error=>{
         if(error) return console.log(error.message);
         console.log('Замітка видалена'); 
    });
    break;
    
    default:
    console.log("No command");
}

function list(done){//тут ф-я приймає параметр функцію, як правило її називають done
    fs.readFile('notes.json',(error,data)=>{
        if(error) return done(error);
        const notes = JSON.parse(data);//парсимо вджейсон і записуємо в файл
        done(null,notes);//тут відбуваєтся виклик функції list() з switch        
    });
}
function view(title,done){
    fs.readFile('notes.json',(error,data)=>{
        if(error) return done(error);
        const notes = JSON.parse(data);
        const note = notes.find(note=>note.title === title);
        if(!note) return done(new Error);        
        done(null,notes);        
    });
}
function create(title,content,done){
       fs.readFile('notes.json',(error,data)=>{        
        if(error) return done(error);     
       const notes = JSON.parse(data);
        notes.push({ title, content });  //тут формується JSON рядок        
        const json = JSON.stringify(notes);//для того щоб записати в файл, перетворюємо в рядок    
        fs.writeFile('notes.json',json,error => {
            if(error) return done(error);
            done();
        });
    });
}
function remove(title,done){
       fs.readFile('notes.json',(error,data)=>{        
        if(error) return done(error);     
        let notes = JSON.parse(data);
        notes = notes.filter(note=>note.title !== title); 
        const json = JSON.stringify(notes);    
        fs.writeFile('notes.json',json,error => {
            if(error) return done(error);
            done();
        });
    });
}*/


const fs = require('fs');
const command = process.argv[2]; //беремо з командного рядка команди
const title = process.argv[3]; //номер вказує на слово по порядку
const content = process.argv[4];
switch(command){
    case 'list':
    list((error,notes)=>{
        if(error) return console.log(error.message);
        notes.forEach((note,index)=>console.log(`${index}.${note.title}`));
    });
    break;
    
    case 'view':
    view(title,(error,note)=>{
         if(error) return console.log(error.message);
         console.log(`# ${note.tile}\r\n\r\n---\r\n\r\n${note.content}`);
    });
    break;
    
    case 'create':
    create(title,content,error => {
       if(error) return console.log(error.message);
       console.log('Замітка створена'); 
    });
    break;
    
    case 'remove':
    remove(title,error=>{
         if(error) return console.log(error.message);
         console.log('Замітка видалена'); 
    });
    break;
    
    default:
    console.log("No command");
}

function list(done){//тут ф-я приймає параметр функцію, як правило її називають done
    load(done);
}
function view(title,done){
    load((error,notes)=>{
        if(error) return done(error);       
        const note = notes.find(note=>note.title === title);
        if(!note) return done(new Error);        
        done(null,notes);        
    });
}
function create(title,content,done){
       load((error,notes)=>{        
        if(error) return done(error); 
        notes.push({ title, content });  //тут формується JSON рядок        
       save(notes,done);
    });
}
function remove(title,done){
      load((error,notes)=>{        
        if(error) return done(error);
        notes = notes.filter(note=>note.title !== title); 
       save(notes,done);
    });
}
function load(done){
    fs.readFile('notes.json',(error,data)=>{
        if(error){
            if(error.code === 'ENOENT'){
                return done(null,[]);
            }else{
                return done(error);
            }
        }
        try{
            const notes = JSON.parse(data);
            done(null,notes);
        }catch(error){
            done(new Error('помилка роботи з файлом'));
        }
    });
}
function save(notes,done){
    try{
        const json = JSON.stringify(notes);
        fs.writeFile('notes.json',json,error=>{
            if(error) return done(error);
            done();
        });
    }catch(error){
        done(error);
    }
}






















 

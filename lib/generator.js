

// import {readFile} from 'fs'
// readFile('./corpus/data.json',(err,data)=>{
//   if(!err){
//     console.log(data.toString('utf-8'),22)  
//   }else{
//     console.log(data,11)
//   }
// })


import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname,resolve} from 'path'

const url = import.meta.url     //获取当前脚本文件的url
const path = resolve(dirname(fileURLToPath(url)),'corpus/data.json')

// const data = readFileSync(path, {encoding: 'utf-8'});

console.log("url",url);
console.log("path",path);
// console.log("data",data);
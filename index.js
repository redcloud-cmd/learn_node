// import {readFile} from 'fs'
// readFile('./corpus/data.json',(err,data)=>{
//   if(!err){
//     console.log(data.toString('utf-8'))  
//   }else{
//     console.log(data)
//   }
// })
// import {readFileSync} from 'fs'
// const data = readFileSync('./corpus/data.json',{encoding:'utf-8'})
// console.log(data)


const {a,b,c} = require('./abc.js')

console.log(a,b,c())
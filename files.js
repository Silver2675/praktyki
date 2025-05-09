const fs = require('fs');

// fs.readFile('./doc/blog1.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// fs.writeFile('./doc/blog.txt', 'cwelu', () => {
//     console.log('file was written');
// });

// fs.writeFile('./doc/blog1.txt', 'cwelu', () => {
//     console.log('file was written');
// });

// if(!fs.existsSync('./assets')){
//     // create folder
// fs.mkdir('./assets', (err)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// if(fs.existsSync('./doc/deleteme.txt')){
//     fs.unlink('./doc/deleteme.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// };
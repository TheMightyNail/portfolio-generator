const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log ('Portfolio complete! Check out index.html to see the output!')
});


// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
    
//     console.log('===========')
    
//     // Is the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
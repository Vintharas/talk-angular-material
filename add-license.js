/* 
    Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
*/

const fs = require('fs');
const path = require('path');

// paths to process
let [, , ...paths] = process.argv;
if (paths.length == 0) paths.push('./src');

// formatters for different types of files
class Formatter {
    addLicense(path){
        let fileContent = fs.readFileSync(path, 'utf8');
        if (fileContent.includes(this.license)) return;

        if (this.license) {
        fileContent = `
${this.license}        

${fileContent}

${this.license}
`;
        fs.writeFileSync(path, fileContent, 'utf8');
        }
    }
}

class MarkdownFormatter extends Formatter{
    get validExtension(){
        return /\.md$/;
    }

    get license(){
        return `
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            `;
    }
}

class HtmlFormatter extends Formatter {
    get validExtension(){
        return /\.html$/;
    }

    get license(){
        return `
<!-- 
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
-->
            `;
    }
}
class JavaScriptFormatter extends Formatter {
    get validExtension(){
        return /\.js$/;
    }
    get license(){
        return `
// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            `;
    }
}
class TypeScriptFormatter extends JavaScriptFormatter{
    get validExtension(){
        return /\.ts$/;
    }
}
class CssFormatter extends Formatter {
    get validExtension(){
        return /\.css$/;
    }

    get license(){
        return `
/* 
    Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
*/
            `;
    }
}

class SassFormatter extends CssFormatter {
    get validExtension(){
        return /\.scss$/;
    }
}

const formatters = [
    new HtmlFormatter(), new JavaScriptFormatter(), new TypeScriptFormatter(),
    new CssFormatter(), new SassFormatter(), new MarkdownFormatter()
];

const whitelist = formatters.map(f => f.validExtension);
const blacklist = [/node_modules/,   // node modules
      /^\.git/                       // git folder                          
];
console.log(`Valid files: ${whitelist}`);
console.log(`Invalid paths: ${blacklist}`);

function addLicenseToAllFiles(sourcePath) {
    console.log(`processing path: ${sourcePath}`);

    // blacklist
    if (blacklist.some(bl => bl.test(sourcePath))) { 
        console.log(`won't process ${sourcePath} because it is blacklisted`);
        return; 
    } 

    const filesAndDirs = fs.readdirSync(sourcePath, 'utf8');

    let blacklistedPaths = filesAndDirs
      .filter(file => blacklist.some(bl => bl.test(file)))
    if (blacklistedPaths.length > 0) {
        console.log(`won't process ${blacklistedPaths} because they are blacklisted`);
    }

    let filesAndStats = filesAndDirs
      .filter(file => !blacklist.some(bl => bl.test(file)))
      .map(file => ({path: file, stats: fs.statSync(path.join(sourcePath, file))}));

    let directories = filesAndStats.filter(f => f.stats.isDirectory());
    let files = filesAndStats
       .filter(f => !f.stats.isDirectory())
       .filter(f => whitelist.some(w => w.test(f.path)));

    console.log(`process dirs: ${directories.map(f => f.path)}`);
    console.log(`process files: ${files.map(f => f.path)}`);

    for (let file of files) processFile(path.join(sourcePath, file.path));
    for (let dir of directories) addLicenseToAllFiles(path.join(sourcePath, dir.path));
    // process
}

function processFile(path){
    let fileFormatter = formatters.find(f => f.validExtension.test(path));
    fileFormatter.addLicense(path);
}


// Action!
for (let pathToProcess of paths) {
    addLicenseToAllFiles(pathToProcess);
}

/* 
    Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
*/

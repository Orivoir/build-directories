# [build-directories](http://npmjs.com/package/build-directories)

## Installation

- npm install build-directories --save
- yarn add build-directories

## usage:

```javascript
const buildDirectories = require('build-directories') ;
const pathResolver = require('path') ;

const directoriesCreate = buildDirectories( path.join( __dirname , "abc/def/ijk" ) ) ;
/*
    /root
        /abc
            /def
                /ijk
*/

// directoriesCreate [ { name: string, path: string }

```

## only with an absolute path for resolve location append directory

```js

// ... ,

buildDirectories( './abc/def/ijk' ) ; // Throw RangeError : arg1 should be an absolute path

// ... ,

```

#### develop by [Samuel Gaborieau]( https://github.com/Orivoir/ ) with <3 and Nodejs for **OpenSource** , enjoy !

const fs = require('fs') ;
const parsePath = require('./lib/parse-path') ;
const pathResolver = require('path') ;

function buildDirectories( path ) {

    if( typeof path !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    const {dir,root,ext} = pathResolver.parse( path ) ; // get : root ( disk ) , ext  ( for skip filename if exists ) , dir ( relative path directories)

    // parse path with dir if ext exists because dir not persist last element path but if not contains filename give real path
    const ressources = parsePath( ext.length >= 2 ? dir : path ) ;

    const directoriesCreate = [];

    if( !fs.existsSync( path ) ) { // path dont exists

        if( pathResolver.isAbsolute( path ) ) { // only absolute path for resolve location append directory

            let current = null ;
            let currentRessource = "" ;

            ressources.forEach( ressource => { // check all ressources ( directory name )

                currentRessource = pathResolver.join( currentRessource , ressource ) ; // current relative path
                current = pathResolver.join( root  , currentRessource ); // root join with current relative path

                if( !fs.existsSync( current ) ) {

                    fs.mkdirSync( current ) ; // APPEND DIRECTORY

                    directoriesCreate.push( {
                        name: pathResolver.basename( current )
                        ,path: current
                    } ) ;
                }

            } ) ;

            return directoriesCreate ; // array directories create with name and path

        } else { // arg1 invalid
            throw new RangeError('arg1 should be an path absolute')
        }

    } else { // structure already exists not work :-)
        return [] ;
    }
} ;

module.exports = buildDirectories ;

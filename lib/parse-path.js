// normalize separator and split in ressource path e.g : c:/abc/def-i/jk <=> [ "abc" , "def-i" , "jk" ]
module.exports = function( path ) {

    if( typeof path !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    return path
        .split('\\').join('/').split('/')
        .filter( ressource => (
            ressource.length >= 1 && !/^[a-z]\:$/i.test(ressource)
        ) )
    ;

} ;

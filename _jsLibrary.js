
const libraryFake = ( base ) => ({
    test: ( url ) => {
          return new Promise( async ( resolve , reject ) => {
                resolve( `${base}${url}` );
          });
    }
});

let newstuff = libraryFake('/base');

newstuff.test('/url')
	.then( res => console.log( res ) )
        .catch( err => console.log( 'err' ));


// ======= unique methods from one ======== //

const getStuff = ( a ) => ( b , call ) => {
		call( `${a}${b}`);
}

const getStuff2 = function ( a ) {
    return ( b , call ) => {
       call( `${a}${b}`);
    }
}

let API_query = getStuff2('/posts');

API_query('/all' , ( dataBack ) => {
		console.log( dataBack );
});


//

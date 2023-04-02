(() => {

    // * función para obtener información de una película por Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    // Correcto...
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // * función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    // Correcto...
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // * función para obtener el bio del actor por él, id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }

    // Correcto...
    function getActorBioById( id: string ) {
        console.log({ id });
    }

    // * Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Correcto...
    interface Movie {
        cast        : string[];
        description : string;
        rating      : number;
        title       : string;
    }
    function createMovie({ cast, description, rating, title }: Movie):void {
        console.log({ title, description, rating, cast });
    }

    // * Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        console.log(birthdate);

        // tarea asíncrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }

    // Correcto...
    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;

    }
    function createActor( fullName: string, birthDate: Date ): boolean {

        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor', birthDate);
        return true;

    }

    // * continuación
    // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    //     let result;
    //     if ( isDead ) {
    //         result = 1500;
    //     } else {
    //         if ( isSeparated ) {
    //             result = 2500;
    //         } else {
    //             if ( isRetired ) {
    //                 result = 3000;
    //             } else {
    //                 result = 4000;
    //             }
    //         }
    //     }
    //
    //     return result;
    // }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        return isRetired ? 3000: 4000;
    }

})();

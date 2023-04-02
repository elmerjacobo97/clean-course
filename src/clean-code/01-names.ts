(() => {
    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const archivos = [
        { id: 1, f: false },
        { id: 2, f: true },
        { id: 3, f: false },
        { id: 4, f: true },
        { id: 5, f: false },
    ]

    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: true },
        { id: 3, flagged: false },
        { id: 4, flagged: true },
        { id: 5, flagged: false },
    ]

    // Archivos marcados por eliminar - files to delete
    // const archivos = fs.map(f => f.f);
    const filesToDelete = filesToEvaluate.map(file => file.flagged);

    // Malos nombres
    class AbstractUser {}
    class AbstractMixin {}
    class UserImplementation {}
    interface IUser {}

    // Mejor
    class User {}
    interface User {}

    // TODO: Tarea
    // día de hoy - today
    const ddmmyyyy = new Date();
    const today = new Date();

    // días transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedTimeInDays: number = 23;


    // número de archivos en un directorio - number of file in directory
    const dir = 33;
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const nombre = 'Elmer';
    const firstName = 'Elmer';

    // primer apellido - last name
    const apellido = 'Jacobo';
    const lastName = 'Jacobo';

    // días desde la última modificación - days since modification
    const dms = 12;
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;
    const maxClassesPerStudent = 6;

})()

export = generateModels;
declare function generateModels({ connection, sourceCasing, filenameCasing, customTypeMap, schemas, }: {
    connection: any;
    sourceCasing?: string;
    filenameCasing?: string;
    customTypeMap?: {};
    schemas: any;
}): Promise<void>;

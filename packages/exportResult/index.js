import exportFromJSON from 'export-from-json';

export default exportCSV = (data, fileName) => {
    exportFromJSON({
        data,
        fileName,
        exportType: exportFromJSON.types.csv
    });
}


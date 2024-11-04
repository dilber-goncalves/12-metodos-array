//antivirus, vai verificar se existe um arquivo *.bat

const arquivos = ["arquivo1.txt", "arquivo2.bat", "arquivo3.doc", "arquivo4.pdf"];

const antivirus = (arquivos: string[]) => {
    const resultado = arquivos.some((item) => {
        const existeVirus = item.includes(".bat");
        return existeVirus;
    });
    if (resultado) {
        console.log("==Virus encontrado==");
    } else {
        console.log("Nenhum virus encontrado");
    }
};

antivirus(arquivos);
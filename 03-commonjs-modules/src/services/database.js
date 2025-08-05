//export default async (exportada por padrão)
exports.connectToDataBase = async (dataName) => {
    console.log("se conectando ao banco: " + dataName);
};

exports.disconnectDataBase = async () => {
    console.log("desconectando");
};
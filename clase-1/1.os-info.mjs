import os from "node:os";

console.log("Información del sistema operativo:");
console.log("-----------------------------------");

console.log(`Plataforma del sistema operativo: ${os.platform()}`);
console.info(`Nombre del sistema operativo: ${os.type()}`);
console.error(`Versión del sistema operativo: ${os.release()}`);
console.log(`Arquitectura del sistema operativo: ${os.arch()}`);
console.log(`Número de CPUs: ${os.cpus().length}`);
console.log(`Memoria total: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Memoria libre: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Directorio home del usuario: ${os.homedir()}`);
console.log(`Directorio temporal: ${os.tmpdir()}`); //
console.log(
  `Tiempo de actividad del sistema: ${(os.uptime() / 3600).toFixed(2)} horas`
);
console.log("-----------------------------------");
console.log("Lista de interfaces de red:");
const networkInterfaces = os.networkInterfaces();
for (const [name, interfaces] of Object.entries(networkInterfaces)) {
  interfaces.forEach((iface) => {
    console.log(
      `- ${name} (${iface.family}): ${iface.address} ${
        iface.internal ? "(Interna)" : ""
      }`
    );
  });
}

console.log("-----------------------------------");
console.log(`Información del usuario actual: ${os.userInfo().username}`);
console.log("-----------------------------------");
console.log("Fin de la información del sistema operativo.");

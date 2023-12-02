import { readFile, writeFile } from "node:fs/promises";

export const registrar = async (name, age, type, color, sickness) => {
    const registro = { name: name, age: age, type: type, color: color, sickness: sickness};
    try {
            const citas = JSON.parse(await readFile('citas.json', 'utf-8'));
            citas.push(registro);
            await writeFile("citas.json", JSON.stringify(citas)) ;
    } catch (error) {
            await writeFile("citas.json", "[]");
            const citas = JSON.parse(await readFile('citas.json', 'utf-8'));
            citas.push(registro);
            await writeFile("citas.json", JSON.stringify(citas)) ;
    }
}
export const leer = async(fileName) => {
    
        const citas = JSON.parse(await readFile(fileName, 'utf-8'));
        if(citas.length==0){
            console.log('no hay citas registradas');
        }else{
            console.log('Nombre |  Edad  |  Tipo  |  Color  | Enfermedad');
            citas.forEach(animal => {
                console.log(`${animal.name}   ${animal.age}    ${animal.type}    ${animal.color}   ${animal.sickness}`);
            });
        }
}

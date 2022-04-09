import * as TJS from "typescript-json-schema";
import { join } from "path";
import {writeFileSync} from 'fs'

console.log("app is loading ...");
const compilerOptions = {};
const settings: TJS.PartialArgs = {
  required: true,
};

function getInterfaceFullPath(interfaceName: string): string {
  return join(__dirname, "interfaces", `${interfaceName}.ts`);
}

function getSchemaFullPath(interfaceName: string): string {
  return join(__dirname, "schemas", `${interfaceName}.json`);
}

const names: string[] = ["IContact", "IQuizEnrollment"];
const files = names.map((it) => getInterfaceFullPath(it));
 
const program = TJS.getProgramFromFiles(
  files,
  compilerOptions
);

names.forEach((interfaceName) => {
  const schema = TJS.generateSchema(program, interfaceName, settings);
  const schemaFileName = getSchemaFullPath(interfaceName);
  writeFileSync(schemaFileName , JSON.stringify(schema));
  console.log(`create file : ${schemaFileName}`);
});



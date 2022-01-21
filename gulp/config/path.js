// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFoleder = `./dist`; // Можно использовать rootFolder для названия проекта
const srcFolder = `./src`;

const path = {
  build: {
    files: `${buildFoleder}/files/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {},
  clean: buildFoleder,
  buildFoleder: buildFoleder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
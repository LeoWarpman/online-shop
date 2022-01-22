// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFoleder = `./dist`; // Можно использовать rootFolder для названия проекта
const srcFolder = `./src`;

export const path = {
  build: {
    css: `${buildFoleder}/css`,
    html: `${buildFoleder}/`,
    files: `${buildFoleder}/files/`
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFoleder,
  buildFoleder: buildFoleder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
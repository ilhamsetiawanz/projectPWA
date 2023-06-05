const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/asset');
const destination = path.resolve(__dirname, 'dist/asset');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

function processImage(imagePath, imageName, folderName) {
  const folderPath = path.resolve(destination, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(imagePath)
    .resize(800)
    .toFile(path.resolve(
      folderPath,
      `${imageName.split('.').slice(0, -1).join('.')}-large.jpg`,
    ));

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(imagePath)
    .resize(480)
    .toFile(path.resolve(
      folderPath,
      `${imageName.split('.').slice(0, -1).join('.')}-small.jpg`,
    ));
}

function processDirectory(directoryPath) {
  fs.readdirSync(directoryPath).forEach((entry) => {
    const entryPath = path.join(directoryPath, entry);
    const stats = fs.statSync(entryPath);
    if (stats.isDirectory()) {
      // Jika entri adalah direktori, proses direktori tersebut secara rekursif
      const folderName = entry;
      const subDirectoryPath = path.join(directoryPath, folderName);
      processDirectory(subDirectoryPath);
    } else {
      // Jika entri adalah file, proses gambar tersebut
      const imageName = entry;
      processImage(entryPath, imageName, path.basename(directoryPath));
    }
  });
}

// Panggil fungsi untuk memproses direktori target
processDirectory(target);

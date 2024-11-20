import RNFS from 'react-native-fs';

export const resolveContentUri = async (contentUri: string, fileName: string) => {
  try {
    const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    await RNFS.copyFile(contentUri, destPath);
    console.log('Arquivo copiado para:', destPath);
    return destPath;
  } catch (error) {
    console.error('Erro ao copiar arquivo:', error);
    throw error;
  }
};

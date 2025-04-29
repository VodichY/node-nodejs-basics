import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const content = 'I am fresh and young';
  const dataDir = path.resolve(__dirname, '..', 'fs', 'files');
  const fileName = 'fresh.txt';
  const filePath = path.join(dataDir, fileName);

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(filePath, content);
    } else {
      throw error;
    }
  }
};

await create();

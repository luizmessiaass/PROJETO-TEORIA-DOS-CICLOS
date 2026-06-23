import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

if (!dist.startsWith(root + path.sep)) {
  throw new Error(`Refusing to write outside project root: ${dist}`);
}

await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(path.join(dist, 'assets'), { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  await fs.copyFile(path.join(root, file), path.join(dist, file));
}

const assetEntries = await fs.readdir(path.join(root, 'assets'), { withFileTypes: true });
for (const entry of assetEntries) {
  if (!entry.isFile()) continue;
  await fs.copyFile(path.join(root, 'assets', entry.name), path.join(dist, 'assets', entry.name));
}

console.log('Static site copied to dist/.');

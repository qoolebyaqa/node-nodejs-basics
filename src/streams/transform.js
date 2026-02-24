import { Transform } from 'stream'

const transform = async () => {
  const transformString = new Transform({
    transform(chunk, _encoding, fn) {
      fn(null, String(chunk).split('').reverse().join(''))
    }
  })
  
  console.log('Start input please...');
  console.log('To end transform, please press Ctrl+C');
  process.stdin.pipe(transformString).pipe(process.stdout);
};

await transform();

export function getIpfsUrl(hash) {
  if (!hash) return '';
  return `https://ipfs.io/ipfs/${hash}`;
}

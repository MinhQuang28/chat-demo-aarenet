import { Buffer } from "buffer"

export default tokenParser = (token) => {
  const parts = token.split('.').map((part) => {
    return Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
  });
  const payload = JSON.parse(parts[1].toString());
  return payload;
}
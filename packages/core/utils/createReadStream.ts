import { Readable } from "node:stream";
function createReadStream(chunk: any) {
  let stream: any = new Readable();

  const handleStreamCloseOrError = function (error: any) {
    stream.removeListener("error", handleStreamCloseOrError);
    stream.removeListener("close", handleStreamCloseOrError);
    stream = chunk = null;
    if (error) {
      console.error(error);
    }
  };

  stream.once("error", handleStreamCloseOrError);
  stream.once("close", handleStreamCloseOrError);

  stream._read = function () {};
  stream.push(chunk);

  stream.push(null);
  return stream;
}

export default createReadStream;

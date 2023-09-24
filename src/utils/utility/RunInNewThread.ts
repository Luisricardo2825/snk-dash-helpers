export async function runInNewThread<T, Y = NonNullable<unknown>>(
  code: (data: T) => Y | Promise<Y> | void,
  data?: unknown[] | object
) {
  return new Promise<Y>((resolve, reject) => {
    let func = `postMessage((${code})(${JSON.stringify(data)}))`;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const AsyncFunction = (async () => {}).constructor;

    if (code instanceof AsyncFunction === true) {
      func = `async function asyn(args=${JSON.stringify(data)}){
        const ret = await (${code})(${Array.isArray(data) ? "...args" : "args"})
        postMessage(ret)
      }; asyn()`;
    }
    const obj = URL.createObjectURL(
      new Blob([func], {
        type: "application/javascript",
      })
    );
    const worker = new Worker(obj);
    worker.onmessage = (e) => {
      resolve(e.data);
      URL.revokeObjectURL(obj);
    };
    worker.onerror = (e) => {
      reject(e);
      URL.revokeObjectURL(obj);
    };
  });
}

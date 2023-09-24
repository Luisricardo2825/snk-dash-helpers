export declare function runInNewThread<T, Y = NonNullable<unknown>>(code: (data: T) => Y | Promise<Y> | void, data?: unknown[] | object): Promise<Y>;

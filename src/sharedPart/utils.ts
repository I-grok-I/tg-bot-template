
export const justOne = <T extends any[]>(val: T) => val.at(0) as T[number] | undefined;

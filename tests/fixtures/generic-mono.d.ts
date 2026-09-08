//! @ts-gen --experimental-generic-mono

declare class Holder<T> {
  constructor(value: T);
  get(): T;
  set(value: T): void;
}

declare function identity<T>(value: T): T;

interface EvaluationDetails<T> {
  flagKey: string;
  value: T;
  variant?: string | undefined;
}

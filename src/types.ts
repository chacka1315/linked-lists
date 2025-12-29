export interface NodeInterface<T = unknown> {
  value: T ;
  nextNode: NodeInterface<T> | null;
}

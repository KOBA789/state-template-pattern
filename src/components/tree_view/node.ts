export abstract class Node {
  constructor(public value: string) {}
}

export class Tree extends Node {
  constructor(value: string, public children: Node[]) {
    super(value);
  }
}

export class Leaf extends Node {
}
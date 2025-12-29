import { NodeInterface } from "./types.js"

export class Node implements NodeInterface{
  public nextNode:NodeInterface | null = null
  constructor( public value:any) {}
}


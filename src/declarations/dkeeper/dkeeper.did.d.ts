import type { Principal } from '@dfinity/principal';
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'readNote' : () => Promise<Array<Note>>,
  'removeNote' : (arg_0: bigint) => Promise<undefined>,
}

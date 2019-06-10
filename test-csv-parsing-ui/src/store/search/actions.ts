export enum ActionType {
  Add = 'ADD',
}

export interface IAdd {
  type: ActionType.Add;
}
export const addToCart = (
): IAdd => ({
  type: ActionType.Add,
});


export type Action =
  | ReturnType<typeof addToCart>;

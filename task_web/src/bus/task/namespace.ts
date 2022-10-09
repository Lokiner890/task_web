export namespace Task {
  export type Item = {
    _id: string;
    title: string;
    done?: boolean;
    checked?: boolean;
    tasks: Item[];
  };

  export type SaveItemsPayload = {
    front: Item[];
    back: Item[];
  };
}

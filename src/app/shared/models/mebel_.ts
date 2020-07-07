export interface Tovar {
    id?: number;
    name: string;
    category: TovarSection;
    weight: number;
    price: number;
    quantity: number;
    manufacturer: string,
    artic: string
}

export enum TovarSection {
    mebel,
    tech,
    books,
    iphones
}
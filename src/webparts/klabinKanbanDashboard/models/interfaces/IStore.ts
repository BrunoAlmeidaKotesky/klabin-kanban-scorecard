
export interface IMockData {
    imgIdea:string;
    codeIdea: string;
    codeUrl: string;
    titleIdea: string;
}
export interface ICardData {
    category: string;
    data: IMockData[];
}
export type IStore = {data: ICardData[]};
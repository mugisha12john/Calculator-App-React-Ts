export interface Btn{
    one:string,
    two:string,
    three:string,
    sign:string,
    merge?:boolean
}
export interface ButtonHandle extends Btn{
    onClickButton: (value:string) => void
}
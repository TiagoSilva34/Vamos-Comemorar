export interface IInput {
    type: string 
    id: string 
    className: string
    value: string 
    placeholder?: string
    onChange?: React.ChangeEvent<HTMLInputElement>
}
export interface IToken {
    accessToken: string,
    user:{
        id: number
        nome: string
        email: string
        permissoes: string
    }
}

export interface IFotos {
    foto: string
}
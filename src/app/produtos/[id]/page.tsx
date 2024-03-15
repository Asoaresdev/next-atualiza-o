type PageParams = {
    params:{
        id:string
    }
}

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
    importado: number
  };

export default async function ProdutoIdPage({params}:PageParams){
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
    const data: Produto = await response.json() 
    return (
        <main>
            <h1>Produto {params.id}</h1>
            <h2>Produto: {data.nome}</h2>
            <h2>Preço: {data.preco}</h2>
        </main>
    )
}
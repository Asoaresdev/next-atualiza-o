'use client';

import { useEffect, useState } from "react";

type Produto = {
  nome: string;
  id: number;
};

export default function ClientFetch() {
  const [data, setData] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://api.origamid.online/produtos');
      const responseJson = (await response.json()) as Produto[];
      setData(responseJson);
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}

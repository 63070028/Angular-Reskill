export interface Cart{
  totalSku: number;
  totalQty: number;
  items: Item[]
}

interface Item {
  name: string;
  sku: string;
  price: number;
  qty: number
}

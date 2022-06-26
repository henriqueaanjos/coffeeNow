import { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { sizeCoffee, typeCoffee } from '../utils/typeCoffee';

interface ShopContextProps{
    children: ReactNode
}

interface Item{
    idType: number,
    idSize: number,
    quantity: number
}

interface ShopDataProps{
    itens: Item[],
    quantityItens: number,
    total: number,
    addItem: (product: Item) => void,
    finish: () => void
}

const ShopContext = createContext({} as ShopDataProps);

export function ShopProvider({ children }: ShopContextProps){
    const [itens, setItens] = useState<Item[]>([]);
    const [quantityItens, setQuantityItens] = useState(0);
    const [total, setTotal] = useState(0);
    const tokenKey = '@coffeeNow:itens';

    function calculateTotal(product: Item){
        const typePrice = typeCoffee.find(item => item.id === product.idType).price;
        const sizePrice = sizeCoffee.find(item => item.id === product.idSize).price;
        return (typePrice + sizePrice) * product.quantity;
      }

    async function addItem(product: Item){
        setItens([...itens, product]);
        await localStorage.setItem(JSON.stringify(itens), tokenKey);
        setQuantityItens(quantityItens + 1);
        setTotal(total+ calculateTotal(product));
    }

    async function finish(){

    }
    
    useEffect(() => {
        async function loadToken(){
            const token = await localStorage.getItem(tokenKey);
            if(token){
                setItens(JSON.parse(tokenKey))
            }
        }
        loadToken();
        // localStorage.removeItem(tokenKey);
    }, []);

    return(
        <ShopContext.Provider value={{ 
            itens,
            quantityItens,
            total,
            addItem,
            finish
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export function useShop(){
    const context = useContext(ShopContext);
    return context;
}
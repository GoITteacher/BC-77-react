import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
    id: string;
    title: string;
    price: number;
    amount: number;
}

type BucketStore = {
    items: Item[],
    itemTitle: string;
    itemPrice: number;
    itemAmount: number;
    addItem: (newItem: Item)=>void,
    removeItem: (id: string)=>void,
    

    setTitle: (newTitle:string)=>void;
    setAmount: (newAmount:number)=>void;
    setPrice: (newPrice:number)=>void;
    clearItem: ()=>void;
}


export const useBucketStore = create<BucketStore>()(persist((set)=>{
    return {
        items: [],

        itemTitle: '',
        itemPrice: 0,
        itemAmount: 0,

        addItem: (newItem)=>{set((state)=>{
            const copy = [...state.items, newItem];
            return {items: copy}
        })},

        removeItem: (id)=>{set(state=>{
            const filtered = state.items.filter(el=>el.id !== id)
            return {items: filtered}
        })},

        setTitle: (newTitle:string)=>{set(()=>({itemTitle: newTitle}))},
        setAmount: (newAmount:number)=>{set(()=>({itemAmount: newAmount}))},
        setPrice: (newPrice:number)=>{set(()=>({itemPrice: newPrice}))},
        clearItem: ()=>{set(()=>({itemTitle: '', itemPrice: 0, itemAmount: 0}))}

    }
}, {
    name: 'bucket',

    partialize: state=>({
        items: state.items,
        itemTitle: state.itemTitle,
        itemPrice: state.itemPrice,
        itemAmount: state.itemAmount,
    })
}))

export const selectItems = (state: BucketStore) => state.items
export const selectAddItems = (state: BucketStore) => state.addItem
export const selectRemoveItems = (state: BucketStore) => state.removeItem


// export const selectItemsProps = (state:BucketStore) => ({
//     itemTitle: state.itemTitle,
//     itemPrice: state.itemPrice,
//     itemAmount: state.itemAmount,
//     setTitle: state.setTitle,
//     setAmount: state.setAmount,
//     setPrice: state.setPrice,

// })
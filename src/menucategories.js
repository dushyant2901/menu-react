import data from './data'
export  const categories= ['All',...new Set (data.map((items)=>{
    return items.category
})
)]
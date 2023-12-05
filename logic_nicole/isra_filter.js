function isra_filter(arrayOfshoes, x , y){
    let filter = [];
    for (let shoe of arrayOfshoes){
        if (shoe.price >= x && shoe.price <= y){
            filter.push(shoe);
        }
    }
    return filter;
}
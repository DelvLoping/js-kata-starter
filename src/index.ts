export function diamond (n:number){
    if(n%2!=0) {
        let res: string[][] = [];
        for (let i: number = 0; i < n; i++) {
            res.push(row(i, n));
        }
        return res;
    }else{
        return false;
    }
}
function row(id:number,nb:number){
    let resRow:string[]=[]
    let add:number = id<=(nb/2) ? id :(nb-1)-id
    for(let j:number=0;j<nb;j++) {
        if (j <= (~~(nb / 2) + add) && j >= (~~(nb / 2) - add)) {
            resRow.push("*")
        } else {
            resRow.push(" ")
        }
    }
    return resRow
}

const Check = (m,n) => {
    const a =Array.from(m)

    for(let i = 0 ; i < m.length ; i++ ){
        if(m[i].name==(n)){
            return(true)
        }
    }
    return false

}
export default Check 
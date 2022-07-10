
export function createOrderValidator(order) {
    try{
        const example = {
            "key": "value",
            "key2": "value2"
        }
    
        console.log(Object.keys(order).filter(element => Object.keys(example)[0]) === element[0])
    } catch(err) {
        console.log(err)
    }

}
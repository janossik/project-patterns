export const GeneratorID = (()=>{
    let instance:any;
    class GeneratorID{
        counter:number
        constructor(){
            if(!instance){
                instance = this
                console.log(typeof this)
            }
            this.counter = 0
            return instance;
        }
        get newID(){
            this.counter +=1;
            return this.counter;
        }
    }
    return GeneratorID
})()
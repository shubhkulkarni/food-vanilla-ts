import Lib from "../core/library";


class UseState {
    private store
    private logger: string | undefined
    constructor(initial?: any,logger?: string) {
        this.store = initial || {}
        this.logger = logger
    }

    get state() {
        return this.store
    }

    setState(key: string, value: any) {

        let toRender = false;
        if (this.store[key] !== value) toRender =  true;

        this.store = { ...this.store, [key]: value }
        
        if(toRender) {
            Lib.renderApp()
            // console.log('rendered')
        }

        if(this.logger && this.logger?.trim()){
            console.log(this.logger,this.state)
        }
        
    }

}

export default UseState
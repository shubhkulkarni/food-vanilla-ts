import events from "./events"

class Lib {

    static clubComponents(parent: string,components: (Element | null)[],attributes?: {[key: string]: string}){
        const root = document.createElement(parent)

        if(attributes){
            Object.entries(attributes).forEach(i => {
                root.setAttribute(i[0],i[1])
            })
        }
        
        
        components.forEach(c => {
            if(c) root.appendChild(c)
        })
        return root
    }

    static renderApp(root: Element) {
        const element = document.querySelector<HTMLDivElement>('#app')
        element!.innerHTML = root.innerHTML
        this.registerEventListeners()
    }

    static registerEventListeners(){
        events.getRegistry().forEach(e => {
            (document.querySelectorAll(e.selector) || []).forEach(i => {
                i.addEventListener(e.event,e.callback)
            })
        })
    }

    static createComponent(template: string,name?:string){
        const element = document.createElement(name || 'div');
        element.innerHTML = template;
        return element;
    }
    
}


export default Lib
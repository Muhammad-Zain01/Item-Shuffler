const useStorage = () => {
    const setItem = (key: string, value: string){
        if(typeof window !== 'undefined'){
            localStorage.setItem(key, value);
        }
    }
    const getItem = (key : string) => {
        if(typeof window !== 'undefined'){
            return localStorage.getItem(key);
        }
        return []
    }

    return {getItem, setItem}
}


export default useStorage;
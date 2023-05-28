import useData from "./useData";

export interface PlatformObj{
    id: number,
    name: string,
    slug: string
}

let usePlatform = () => {
    return useData<PlatformObj>("/platforms/lists/parents")
}  

export default usePlatform;
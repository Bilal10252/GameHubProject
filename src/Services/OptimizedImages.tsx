import noImage from "../assets/no-image-placeholder.webp";

let optimizedImage = (url : string) => {
    if(!url) return noImage;
    let index = url.indexOf("media/")+ "media/".length;
    return (url.slice(0,index)+"crop/600/400/"+url.slice(index));

}

export default optimizedImage;
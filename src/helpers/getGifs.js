
//extra la informacion de un elemento en la web para que pueda ser utilizado
//para esto seleciona ciertos parametros del elemento ejemplo: id, title

export  const getGifs = async( category ) =>{

    const  url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Z9toB0KhB7ZnQeQ4T9f0NY5LZSzkYNEn`;
    const  resp = await fetch (url);
    const  { data }  = await resp.json();

    const gifs = data.map( img =>{
         return{
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url
         }
    
     }) 

    return gifs;
    //console.log(gifs);
    //setImages( gifs );
 }
import { Carousel } from "@material-tailwind/react";
import teste1 from '../assets/page.png'
import teste2 from '../assets/page2.png'
import Image from "next/image";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";

export function CarouselDefault() {
    const dadosAPI2 = useSelector(state => state.storeB.items)

    if(dadosAPI2[0] === undefined){
        return <div></div>
    } else{
    let imagens= dadosAPI2[0].imagens.map((item) => 
        Object.assign({}, item, {selected:false})
        )
    return (
      <Carousel className="rounded-xl" autoplay={true}  loop={true}>
        {imagens.map( item =>
        <img
          key={Math.random()}
          src={item.link}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        )}
        
      </Carousel>
    );}
  }
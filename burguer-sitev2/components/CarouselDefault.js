import { Carousel } from "@material-tailwind/react";

import { useSelector } from "react-redux/es/hooks/useSelector";


export function CarouselDefault(props) {

    if(!props.carregado){
        return <div></div>
    } else{
    const dadosAPI2 = useSelector(state => state.storeB.items)
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
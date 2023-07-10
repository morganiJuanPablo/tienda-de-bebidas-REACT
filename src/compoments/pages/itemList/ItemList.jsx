import { Bodega } from "../../../productsMock";
import Cards from "../../common/cards/Cards";


const ItemList = ({items}) => {
  return (
  <section>
    {
      items.map((item)=> {
        return (<Cards  key={item.id} item={item}/>)
      }) //por buena práctica lo que va dentro del () es el nombre pero en singular
    }
  </section>
  )
}

export default ItemList;

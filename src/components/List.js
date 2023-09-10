import { places } from "./Data";
import Place from "./Place";
import { MyContext } from "./MyContext";

const List = ({ imageSize }) => {
  const listItems = places.map((place) => (
   
    <li key={place.id}>
    <MyContext.Provider value={{places:places,place:place,imgSize:imageSize}}>
      <Place />
      </MyContext.Provider>
    </li>
    
    
  ));
  
  return <ul>{listItems}</ul>;
};
export default List;

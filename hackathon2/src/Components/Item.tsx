interface ItemProp {
    item: {itemId: string;
    boughtInLastMonth: number;
    imgUrl: string;
    isBestSeller: boolean;
    price: number;
    stars: number;
    title: string;};
  }

  const Item: React.FC<ItemProp> = ({ item }) => {
    return (
      <div>
        <img src={item.imgUrl} alt={item.title} />
        <p>{item.itemId}</p>
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Stars: {item.stars}</p>
        <p>Recently bought: {item.boughtInLastMonth}</p>
        <p>Best Seller: {item.isBestSeller ? 'Yes' : 'No'}</p>
      </div>
    );
  };

export {Item};
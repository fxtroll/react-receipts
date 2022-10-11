export default function receipt(props) {

  let { person, order, paid } = props.receipt;

  return (
    <div className="card">
      <h1 className="name">{person}</h1>
      <h1>
        <span>Main : </span>
        {order.main}
      </h1>
      <h1>
        <span>Protein : </span>
        {order.protein}
      </h1>
      <h1>
        <span>Rice : </span>
        {order.rice}
      </h1>
      <h1>
        <span>Sauce : </span>
        {order.sauce}
      </h1>
      <h1>
        <span>Drink : </span>
        {order.drink}
      </h1>
      <div className="toppings">
        <span>Toppings : </span>
        <ul>
          {order.toppings.map(topping => {
            <li>{topping}</li>
          })}
        </ul>
      </div>
      <h1>
        <span>Cost : </span>
        {order.cost}
      </h1>
      <h1>
        <span>Paid : </span>
        {paid + ""}
      </h1>
    </div>
  )
}
const CaloriePrice = ({
  price,
  calorie,
}: {
  price: number;
  calorie: number;
}) => (
  <div className="flex text-color-neutral text-body-md justify-between text-sm">
    <h5>{`${calorie} Kcal`}</h5>
    <h5>${`${price}`}</h5>
  </div>
);

export default CaloriePrice;

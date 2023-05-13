const CaloriePrice = ({
  price,
  calorie,
}: {
  price: number;
  calorie: number;
}) => (
  <div className="text-sm flex justify-between text-body-md text-color-neutral">
    <h5>{`${calorie} Kcal`}</h5>
    <h5>${`${price}`}</h5>
  </div>
);

export default CaloriePrice;

const CaloriePrice = ({
  price,
  calorie,
}: {
  price: number;
  calorie: number;
}) => (
  <div className="flex text-body-md justify-between text-slate-900 text-sm">
    <h5>{`${calorie} Kcal`}</h5>
    <h5>${`${price}`}</h5>
  </div>
);

export default CaloriePrice;

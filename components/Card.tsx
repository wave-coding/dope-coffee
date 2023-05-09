import Image from 'next/image';
const Card = () => {
  return (
    <div className="bg-color-six flex flex-col rounded-md w-auto">
      <Image
        className="w-auto rounded-t-md mb-2"
        src="http://pets-images.dev-apis.com/pets/dog25.jpg"
        alt="here we a re"
        width={148}
        height={96}
      ></Image>
      <h3 className="text-slate-900 px-2 my-1">Shrimp Pizza</h3>
      <div className="flex space-x-2 text-white items-center text-xs p-1 my-1">
        <button className="bg-color-protein rounded-md px-4 py-1">
          Protein
        </button>
        <button className="bg-color-carb rounded-md px-4 py-1">Protein</button>
      </div>
      <div className="flex justify-between px-2 text-slate-900 text-sm my-1">
        <h5>400 Kcal</h5>
        <h5>$28</h5>
      </div>
    </div>
  );
};

export default Card;

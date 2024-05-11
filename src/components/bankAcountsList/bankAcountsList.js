import "./bankAcountsList.css";

const BankListItem = ({name}) => {
  return <li className="acount_list_item">{name}</li>
};


const BankAcountsList = () => {
  const data = [
    { name: "Belarus Bank", id: 1 },
    { name: "Alfa Bank", id: 2 },
    { name: "Sber Bank", id: 3 },
    { name: "VTB Bank", id: 4 },
  ];

  const elements = data.map(item => {
   return <BankListItem name={item.name} key={item.id}/>
  })


  return (
    <ul className="acount_list">
      {elements}
    </ul>
  );
};

export default BankAcountsList;
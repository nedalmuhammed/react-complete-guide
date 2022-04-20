import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [{
    id: 'e1',
    title: 'New Desk (Wooden)',
    ammount: 298,
    date: new Date(2012, 3, 23),
  }, {
    id: 'e2',
    title: 'New Tv (Device)',
    ammount: 247,
    date: new Date(2021, 4, 31),
  }]
  return (
    <div>
      <h2>Let's Learn React</h2>
      <ExpenseItem title={expenses[0].title} ammount={expenses[0].ammount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} ammount={expenses[1].ammount} date={expenses[1].date} />
    </div >
  );
}
export default App;
import Content from './Content.jsx';
import Header from './Header.jsx';
import Total from './Total.jsx';

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content props={parts} />
      <Total numbers={parts.map(x => x.exercises)} />
    </div>
  )
}

export default App
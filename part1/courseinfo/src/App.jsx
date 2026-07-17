import Content from './Content.jsx';
import Header from './Header.jsx';
import Total from './Total.jsx';

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content props={[part1, part2, part3]} />
      <Total numbers={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

export default App
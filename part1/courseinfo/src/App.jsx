import Content from './Content.jsx';
import Header from './Header.jsx';
import Total from './Total.jsx';

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]} />
      <Total numbers={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App
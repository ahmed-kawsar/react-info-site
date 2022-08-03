import Content from './Content'
import Header from './Header'
import logo from './images/logo.png'

const App = () => {
  return (
    <div className='app'>
      <Header title={'some react codes'} logo={logo} />
      <Content />
    </div>
  )
}

export default App

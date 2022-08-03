const Header = ({ title, logo }) => {
  return (
    <header id='header'>
      <div className='logo'>
        <img src={logo} alt={title} />
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
    </header>
  )
}

export default Header

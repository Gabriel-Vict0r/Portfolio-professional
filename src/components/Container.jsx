import '../sass/components/container.sass'
const Container = ({children}) => {
  return (
      <div className="container">
          {children}
    </div>
  )
}

export default Container
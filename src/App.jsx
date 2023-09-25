import NavBar from './components/navbar'
import BalanceSection from './components/BalanceSection'
import ListGroup from './components/ListGroup'
import MainSection from './components/mainsection'
import { TransactionProvider } from './context/TransactionContext'

const App = () => {

  return (
    <TransactionProvider>
      <NavBar />
      <div className="container">
        <MainSection />
        <BalanceSection  />
        <ListGroup  />

      </div>
    </TransactionProvider>
  )
}
export default App


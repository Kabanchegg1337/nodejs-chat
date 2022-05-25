import Chat from '../components/Chat'
import Header from '../components/Header'
import InputForm from '../components/InputForm'

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <Chat />
      <InputForm />
    </div>
  )
}

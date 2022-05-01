import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h1>Page NOT found!</h1>
        <h3>Invalid Request</h3>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
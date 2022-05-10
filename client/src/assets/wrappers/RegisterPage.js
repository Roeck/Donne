import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  .form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    color: var(--primary-50);
    background: #0f0e136e;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(10px);
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .btn {
    margin-top: 1rem;
  }
  
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--white);
    /* color: white; */
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    text-decoration: underline;
  }
`
export default Wrapper
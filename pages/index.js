import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const mystyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  }
  return (
    <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </div>
  )
}

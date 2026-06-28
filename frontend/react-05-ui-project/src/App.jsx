import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

function App(){
  const user=[
    {
      img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus ullam, a dolore enim rerum.", 
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus ullam, a dolore enim rerum",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus ullam, a dolore enim rerum",
      tag:"Underbanked"
    }
   
  ]
  return (
    <div className="app">
      <Section1 users={user}/>
      <Section2/>
    </div>
  )
}
export default App;
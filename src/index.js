const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  // your code here
  
  render() {
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  // your code here
  render(){
    return (render() {
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  })
  }
 
}

export class ButcherShop extends React.Component {
  // your code here
  const ROTTEN_MEAT_PRODUCTS = ["Old Fish", "Sweeney Todd", "Tomatoes?"]
 
  const products = [<li>{ROTTEN_MEAT_PRODUCTS[0]}</li>, <li>ROTTEN_MEAT_PRODUCTS[1]</li>, etc...]
   render() {
      return (
       <div>
          { products }
       </div>
     )
   }
}



ReactDOM.render(
  <div>
    render your components here! Refer back to the previous README if you are lost
  </div>,
  document.getElementById('root')
)

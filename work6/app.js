const RB=ReactBootstrap; 

class App extends React.Component {
    title = (
      <RB.Alert variant="info">
        <b>Work6 :</b> ReactJS และ Firebase
      </RB.Alert>
    );
    footer = (
      <div>
        By xxxxxxxxxx-x xxxxxxxxxxxxx xxxxxxxxxxxxxx <br />
        College of Computing, Khon Kaen University
      </div>
    );
    state = {
        scene: 0,
    }      
    render() {
      return (
        <RB.Card>
          <RB.Card.Header>{this.title}</RB.Card.Header>  
          <RB.Card.Body></RB.Card.Body>
          <RB.Card.Footer>{this.footer}</RB.Card.Footer>
        </RB.Card>           
      );
    }       
  }

  const container = document.getElementById("myapp");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
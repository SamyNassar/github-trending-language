'use strict';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount(){
    fetch('/trending-languages')
    .then(response => response.json())
    .then(data => {
      const sortedData = this.getSortedLanguages(data)
      this.setState({data: sortedData})
    })
  }
  
  // Sort the language objects by the num of repos (Descending).
  getSortedLanguages = (languages) => {
    return Object.fromEntries(
      Object.entries(languages).sort((a, b) => b[1].length - a[1].length)
    );
  }

  // Create unorder list for Repos url.
  ReposUrls = (prop) => {
    const urls = prop.urls;
    const repoUrlList = urls.map((url) => 
      <li key={Math.random() * 1000}>
        <a href={url} target="_blank">{url}</a>
      </li>
    )
    return(
      <ul>
        {repoUrlList}
      </ul>
    )
  }

  // Create Accordion items. 
  TerndingList = (prop) => {
    return(
      <ol className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{prop.language}</div>
            <this.ReposUrls urls={prop.reposLink} />
          </div>
          <span className="badge bg-primary rounded-pill">{prop.reposLink.length}</span>
        </li>
      </ol>
    );
  }

  TrendingLanguages = (prop) => {
    const languages = prop.languages;
    
    const trending = Object.keys(languages).map((key) => {
      return(
        <this.TerndingList key={key} language={key} reposLink={languages[key]} />
        )
      })
      
    return(trending)
  }

  render() {

    if(!this.state.data){
      return (
        <div className="d-flex justify-content-center text-primary m-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }

    return (
        <div>
          <this.TrendingLanguages languages={this.state.data} />
        </div>
      );
    }
}



ReactDOM.render(<App/>, document.getElementById('main'));
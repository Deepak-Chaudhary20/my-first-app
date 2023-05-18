// Let's Create a filter News Application in React

import React from "react";
import ReactDOM from "react-dom/client";

const newsData = [
  { id: 1, title: "Breaking News", category: "Breaking" },
  { id: 2, title: "Sports News", category: "Sports" },
  { id: 3, title: "Technology News", category: "Technology" },
  { id: 4, title: "Entertainment News", category: "Entertainment" },
  { id: 5, title: "Business News", category: "Business" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "All",
    };
    this.Change = this.Change.bind(this);
  }
  Change(e){
    this.setState({content: e.target.value});
  }
  render() {
    const NewFeed = this.state.content === 'All' ? newsData : newsData.filter((news) => news.category === this.state.content)
    return (
      <div>
        {console.log(this.state.content)}
        <h3>Let Filter The Elements.</h3>
        <select onChange={this.Change}>
          <option value="All">All</option>
          <option value="Breaking">Breaking</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Business">Business</option>
        </select>
        {NewFeed.map((news) =>(
          <div key = {news.id}>
            {news.title}
          <div>
            {news.category}
          </div>
          </div>
        )
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const newsData = [
//   { id: 1, title: 'Breaking News', category: 'Breaking' },
//   { id: 2, title: 'Sports News', category: 'Sports' },
//   { id: 3, title: 'Technology News', category: 'Technology' },
//   { id: 4, title: 'Entertainment News', category: 'Entertainment' },
//   { id: 5, title: 'Business News', category: 'Business' },
// ];

// // this is an object

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedCategory: 'All',
//     };
//   }

//   handleCategoryChange = (event) => {
//     this.setState({ selectedCategory: event.target.value });
//   };

//   render() {
//     const { selectedCategory } = this.state;

//     const filteredNews = selectedCategory === 'All'
//       ? newsData
//       : newsData.filter((news) => news.category === selectedCategory);

//     return (
//       <div>
//         <h2>News Filter</h2>
//         <label htmlFor="category">Select a category:</label>
//         <select id="category" value={selectedCategory} onChange={this.handleCategoryChange}>
//           <option value="All">All</option>
//           <option value="Breaking">Breaking</option>
//           <option value="Sports">Sports</option>
//           <option value="Technology">Technology</option>
//           <option value="Entertainment">Entertainment</option>
//           <option value="Business">Business</option>
//         </select>

//         <h3>Filtered News:</h3>
//         {filteredNews.map((news) => (
//           <div key={news.id}>
//             <h4>{news.title}</h4>
//             <p>Category: {news.category}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

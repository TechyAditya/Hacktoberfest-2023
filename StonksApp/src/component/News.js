import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:'10',
    category:'general'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  capitalise=(string)=> {
    return(string.charAt(0).toUpperCase()+string.slice(1))
  }

  constructor(props){
    super(props);
    this.state={
      articles :[],
      loading:true,
      page:1,
      totalResults:0
    }
    document.title=`Stonks-News-`+this.capitalise(this.props.category);
  }

  async updateUrl(){
    this.props.setProgress(20);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url)
    this.props.setProgress(40);
    let parsedData=await data.json();
    this.props.setProgress(70);
    console.log(parsedData)
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false})
    this.props.setProgress(100);

  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
      page:2})
  }
    someFxn= async()=>{
      this.setState({page: this.state.page +1 })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData=await data.json();
      this.setState({articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        });
}

  render() {
    return (
      <>
        <h2 className='text-center' style={{margin:"90px"}}>STONKS-NEWS - TOP {this.capitalise(this.props.category)} HEADLINE</h2>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.someFxn}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row my-5">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
                  <Newsitem  title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}
export default News
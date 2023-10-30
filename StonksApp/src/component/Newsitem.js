import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let{title,description,url,urlToImage,author,date,source}=this.props
    return (
      <div className='mt-3'>
        <div className="card">
        <img src={urlToImage} className="card-img-top" alt="..." /> 
        <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:`${((source).length<=10)? '90%' :'85%'}`}}>
              {source}
            </span>

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} on {new Date(date).toDateString()}</small></p>
            <a href={url} className="btn btn-sm btn-dark" rel="noreferrer" target='_blank'>Read More</a>
        </div>
        </div>
    </div>
    )
  }
}

export default Newsitem
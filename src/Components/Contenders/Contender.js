import React, { Component } from 'react'

export default class Contendor extends Component {

    Social(props) {
        return props.page.length > 0 && <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={props.url + props.page +"/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}><i className={"icofont icofont-" + props.icon}></i></a></li>
    }
    Contact(props) {
        return <li className="list-inline-item"><a href={props.link}><i className="icofont icofont-email"></i> Contact Us</a></li>
    }
  render(props) {
    return (
            <div className="gb-post">
                <div className="entry-header">
                    <div className="entry-thumbnail">
                        <a href={this.props.web}><img src={this.props.logo} alt={this.props.title + " logo"} className="img-fluid" /></a>
                    </div>
                </div>
                <div className="entry-content">
                    <div className="row">
                        <div className="contendor-block"/>
                        <div className="contendor-social">
                            <ul className="global-list list-inline">
                                <this.Social icon="social-facebook" url="https://facebook.com/" page={this.props.facebook}/>
                                <this.Social icon="social-twitter" url="https://twitter.com/" page={this.props.twitter}/>
                                <this.Social icon="social-instagram" url="https://instagram.com/" page={this.props.instagram}/>
                                {this.props.web.length > 0 && this.props.web.startsWith("mailto:") ? <this.Contact link={this.props.web}/> : <this.Social icon="web" url="" page={this.props.web} /> }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}


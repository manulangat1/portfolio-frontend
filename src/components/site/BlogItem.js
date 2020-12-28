import React from 'react';
import ReactMarkdown from "react-markdown";
import moment from 'moment';

import {  connect } from 'react-redux';
import { fetchBlogsbySlug } from '../../actions/blog';


class BlogItem extends React.Component{
    componentDidMount(){
        if (this.props.slug){
            console.log(this.props.slug)
            this.props.fetchBlogsbySlug(this.props.slug)
        }
    }
    render(){
        const {blog }=this.props
        return(
            <section id="projects" >
                <div className="container">
                    <h1 className="heading-sm">Learn Javascript</h1>
                    
                                <img src={`${blog.image}`} alt=" landing page" />
                                <h1>{blog.title}- Posted on : {moment(`${blog.createdAt}`).format("YYYY/MM/DD")}</h1>
                                <ReactMarkdown source={blog.content} />
                            
                    
                </div>
            </section>

        );
    };
};
const mapStateToProps = (state,ownProps)  => ({
    blog:state.blogs.blog,
    slug:ownProps.match.params.slug
})
export default connect(mapStateToProps,{fetchBlogsbySlug})(BlogItem);
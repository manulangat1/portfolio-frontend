import React from 'react';
import {connect} from 'react-redux';

import { withRouter } from 'react-router-dom';
import { addBlogs } from '../../actions/blog'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

class AddBlog extends React.Component{
    state = {
        title:"",
        content:"",
        image:null

    }
    onChange = e  => this.setState({[e.target.name]:e.target.value})
    handleChange = value => {
        this.setState({ content: value });
      };
    handleImageChange = e => {
    this.setState({
        [e.target.name]: e.target.files[0]
    })
    };
    onSubmit = e => {
        e.preventDefault()
        const {title,content,image} = this.state
        console.log(title,content,image)
        const newB = {
            title,content,image
        }
        this.props.addBlogs(newB)
    }
    render(){
        const {title,content} = this.state
        return(
            <section>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} className="form-control" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Picture</label>
                        <input type="file" className="form-control" name="image"  onChange={this.handleImageChange} />
                    </div>
                    <div>
                        <label>Blog post</label>
                        <SimpleMDE name="content" onChange={this.handleChange} />;
                    </div>
                    <input type="submit" value="Add Post" className="primary-btn" />
                </form>
            </section>
        )
    }
}
// export default AddBlog;
const mapStateToProps = state  => ({
    blogs:state.blogs.blogs
})
export default connect(mapStateToProps,{addBlogs})(withRouter(AddBlog));
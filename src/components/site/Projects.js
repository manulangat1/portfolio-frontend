import React from 'react';
import {  connect } from 'react-redux';
import { fetchProject,addProject } from '../../actions/projects'


class Projects extends React.Component{
    state = {
        title:'',
        content:'',
        liveLink:'',
        githubLink:'',
        image:null
    }
    handleImageChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
      };
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { title, content, liveLink, githubLink,image } = this.state
        const newProj = {
            title, content, liveLink, githubLink,image
        }
        console.log(newProj)
        this.props.addProject(newProj)
    }
    componentDidMount(){
        this.props.fetchProject()
    }
    render(){
        const {projects,isAuthenticated }=this.props
        const { title, content, liveLink, githubLink,image } = this.state
        const guestDisplay = (
            <div className="container">
                    <h1 className="heading-sm">Below are my projects</h1>
                    <div className="gridp">
                    {
                        projects.map(project => (
                            <div key={project.id}>
                                <img src={`${project.image}`} alt="landing page" />
                                <h1>{project.title}</h1>
                                <p>{project.content}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
        )
        const authDisplay = (
            <div className="container">
                <h1>Add your project here</h1>
                <form  onSubmit={this.onSubmit}>
                <div>
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Github Link</label>
                        <input type="text" className="form-control" name="githubLink" value={githubLink} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Live Link</label>
                        <input type="text" className="form-control" name="liveLink" value={liveLink} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Picture</label>
                        <input type="file" className="form-control" name="image"  onChange={this.handleImageChange} />
                    </div>
                    <div>
                        <label>description</label>
                        <input type="text" className="form-control" name="content" value={content} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Add Project" className="primary-btn"/>
                </form>
            </div>
            
        )
        
        return(
            <section id="projects" >
                { isAuthenticated ? authDisplay :guestDisplay }
            </section>

        );
    };
};
const mapStateToProps = state  => ({
    projects:state.projects.projects,
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{fetchProject, addProject})(Projects);
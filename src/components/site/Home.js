import React from 'react';
import { fetchHome,addHome } from '../../actions/home';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

class Home extends React.Component{
    state = {
        title:'',
        content:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { title, content } = this.state
        const newProj = {
            title, content
        }
        console.log(newProj)
        this.props.addHome(newProj)
    }
    componentDidMount(){
        this.props.fetchHome()
    }

    render(){
        const {title,content} = this.state
        const guestContent = (
            <div className="container">
                    {
                       this.props.home && this.props.home.map(h => (
                            <div key={h.id}>
                                <h1>Hi, I am <span className="uname">{h.title}</span> .</h1>
                                <p><Typewriter options={{ strings: ['A Software Engineer . . .', 'A Programmer . . .','A Pythonista . . .','A data scientist . . .'], autoStart: true,loop: true,}}
/></p>

                            </div>
                        ))
                    }
                    <div className="links">
                    <a href="https://github.com/manulangat1" target="_blank" ><i class="fab fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/emmanuel-langat-7b547a158/" target="_blank" ><i class="fab fa-linkedin-in fa-3x"></i></a>
                    
                    </div>
                </div>
        )
        const authDisplay = (
            <div className="container">
            <form  onSubmit={this.onSubmit}>
                <div>
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} />
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
            <section id="home">
                { this.props.isAuthenticated ? authDisplay : guestContent}    
            </section>

        );
    };
};
const mapStateToProps = state => ({
    home:state.home.home,
    isAuthenticated:state.auth.isAuthenticated
})
export  default connect(mapStateToProps,{fetchHome,addHome}) (Home);
import React from 'react';
import AddBlog from './AddBlog'

class Dashboard extends React.Component{
    render(){
        return(
            <section>
                <div className="container">
                    <AddBlog />
                </div>
            </section>
        )
    }
}
export default Dashboard;
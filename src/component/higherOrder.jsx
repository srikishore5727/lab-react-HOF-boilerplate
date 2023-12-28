import { Component } from 'react'
import DisplayInfo from './displayInfo';
import '../App.css';

class HigherOrder extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18} 
            ]
        }
    }

  render() {
    return (
        <table className='container'>
            <tbody>
            
            <tr><th colSpan={3} className='headings'>Display all items</th></tr>
            <div style={{border:'2px solid red'}}>
            {
                this.state.userData.map(data =>(
                    <DisplayInfo key={data.id} id={data.id} name={data.name} userType={data.user_type}  />
                ))
            }
            </div>

            <tr><th colSpan={3} className='headings'>Display based on user type</th></tr>
            <div style={{border:'2px solid red'}}>
            {
                this.state.userData
                .filter(data => (data.user_type == "Designer"))
                .map(data =>(
                    <DisplayInfo key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            </div>

            <tr><th colSpan={3} className='headings'>Filter all data starting with J</th></tr>
            <div style={{border:'2px solid red'}}>
            {
                this.state.userData
                .filter(data => (data.name[0] == "J"))
                .map(data =>(
                    <DisplayInfo key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            </div>

            <tr><th colSpan={3} className='headings'>Filter all data based on age greater than 28 and age less than or equal to 50</th></tr>
            <div style={{border:'2px solid red'}}>
            {
                this.state.userData
                .filter(data => (data.age > 28 && data.age <= 50))
                .map(data =>(
                    <DisplayInfo key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            </div>

            <tr><th colSpan={3} className='headings'>Find the total years of the designers</th></tr>
            <tr>
                <td colSpan={3}>
                <div style={{border:'2px solid red'}}>
                    {
                        this.state.userData
                        .filter(data => (data.user_type == "Designer"))
                        .map(data =>(data.years))
                        .reduce((data,res) => res+data)
                    }
                </div>
                </td>
            </tr>
            </tbody>
        </table>
    )
  }
}

export default HigherOrder;
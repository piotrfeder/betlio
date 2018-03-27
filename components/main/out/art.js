import React, { Component } from 'react';
import { Button } from './Button.js';
import { Title } from './Title.js';
import { SingleArt } from './single_art.js';
import { BtnMore } from './btn_more.js';
import { 
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

export class Art extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            dane: undefined,
            index: 3
        }
        /* this.addMore = this.addMore.bind(this); */

    }

    

    componentDidMount() {
        let main = this;

        let MenuItems;
        
        let url = 'http://jsonplaceholder.typicode.com/posts/' ;
        console.log(url);

        if(window.fetch)
        {
            console.log('wspiera fetch');
        }
        else
        {
            console.log('nie wpsiera fetch');
        }


        fetch(url)
            .then(function (response) {

                if (response.status !== 200) {

                }
                response.json().then(function (data) {


                    main.setState({
                        getData: data
                    })
                });

            })
    }

  /*   addMore() {
        this.setState({
            index: this.state.index + 10
          });
        console.log('kilki');
    } */

    filterData() {
        let dataItem = this.state.getData;
        let i = 0;
        let filteredData = dataItem.map((item, indexItem) => {
            


            if(item.userId == this.props.match.params.id )
            {
                
             return(
                 <div className="itemsFiltered">
                    
                    <Title title={ item.title } id={item.id}/>
                    {item.body}
                    <BtnMore id={item.id} name={item.title} />
                 </div>
             )   
            }
        })

        return filteredData;
    }



    render() {
        let indexM = this.props.match.params.id;
        let maintitle = this.state.getData.title;

        return ( 
            <div>
                <h1>Art.js</h1>
                {
                    this.filterData()
                }

            
            
{/* <div onClick={this.addMore}>Add more</div> */}
            </div>

        );

    }

}

// http://jsonplaceholder.typicode.com/posts
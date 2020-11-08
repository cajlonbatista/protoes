import React from 'react';

export default class Feed extends React.Component {
    render() {
        const {
            data
        } = this.props;
        if(data.lenght != 0){
            return (
                <div>
                    {
                        data.map((i) => {
                            return(
                                <li key={i}>{i}</li>
                            )
                        })
                    }
                </div>
            );
        }else{
            return (
                <p>Adicione notas</p>
            );
        }
        
    };
}
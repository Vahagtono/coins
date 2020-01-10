import React, { Component } from 'react';
import './Table.css';

class Content extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        this.getCurrencies();
    }

    getCurrencies = (perPage = 10, page = 1) => {
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?perPage=${perPage}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.count !== this.props.count) {
            this.getCurrencies(this.props.count);
        }
    }

    render() {
        const { data } = this.state;
        const { id, ...titles } = data && data.currencies[0] || {};
        return (
            data
                ? <div className='Table-container'>
                    <table className='Table'>
                        <thead>
                            <tr>
                                {Object.keys(titles).map(title => <td key={title}>{title}</td>)}
                            </tr>
                        </thead>
                        <tbody className='Table-body'>
                            {data.currencies.map(({ id, ...item }, index) => (
                                <tr key={index}>{Object.values(item).map((item, childIndex) => <td key={childIndex}>{item}</td>)}</tr>
                            ))}
                        </tbody>

                    </table>
                    {Array(data.totalPages).fill()
                        .map((_, index) => <button onClick={() => this.getCurrencies(data.perPage, index + 1)}>{index + 1}</button>)
                    }
                </div>
                : 'Loading...'
        );
    }
}

export default Content;

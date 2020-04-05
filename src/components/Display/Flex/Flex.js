import React from 'react';

import './Flex.css';

const Flex = () => {

    return (
        <div>
            Parent: display: flex
            <div className={'parent flex-parent1'}>
                <div className={'child flex-child1'}>Child 1</div>
                <div className={'child flex-child1'}>Child 2</div>
                <div className={'child flex-child1'}>Child 3</div>
                <div className={'child flex-child1'}>Child 4</div>
                <div className={'child flex-child1'}>Child 5</div>
            </div>
            <br/>
            Parent: display: flex, children has flex: 1 auto which fill all available space
            <div className={'parent flex-parent1'}>
                <div className={'child flex-child2'}>Child 1</div>
                <div className={'child flex-child2'}>Child 2</div>
                <div className={'child flex-child2'}>Child 3</div>
                <div className={'child flex-child2'}>Child 4</div>
                <div className={'child flex-child2'}>Child 5</div>
            </div>
            <br/>
            Parent: display: flex, row-reverse
            <div className={'parent flex-parent2'}>
                <div className={'child flex-child1'}>Child 1</div>
                <div className={'child flex-child1'}>Child 2</div>
                <div className={'child flex-child1'}>Child 3</div>
                <div className={'child flex-child1'}>Child 4</div>
                <div className={'child flex-child1'}>Child 5</div>
            </div>
            <br/>
        </div>
    );

};

export default Flex;

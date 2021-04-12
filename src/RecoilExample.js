import React, { Component } from 'react'
import MainComponent from './MainComponent'
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './recoil/atoms';
import { incrementSelector } from './recoil/selectors';

function RecoilExample() {
    const [counter, setCounter] = useRecoilState(counterState);
    let value = useRecoilValue(incrementSelector);

    return (
        <div>
            <MainComponent count={counter.count} handleFireClick={() => setCounter({count: counter.count + 1})} example='Recoil' backGround='bisque' />
        </div>
    );
}

export default RecoilExample

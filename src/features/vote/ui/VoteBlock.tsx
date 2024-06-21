import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "src/app/store/store";
import {voteSystemArrays} from "src/entities/voteSystem/voteSystemArrays";
import {Row} from "antd";
import styles from './VoteBlock.module.css'


const VoteBlock = () => {
    const voteSystem = useSelector((state: RootState) => state.tableSlice.votingSystem);
    const voteSystemArr = voteSystemArrays[voteSystem]

    const vote = (cardValue: string) => {
        console.log(cardValue)
    }

    return (
        <Row>
            {voteSystemArr.map((cardValue, index) =>
                <div onClick={() => vote(cardValue)} className={styles.card} key={index}>
                    {cardValue}
                </div>
            )}

        </Row>
    );
};

export default VoteBlock;
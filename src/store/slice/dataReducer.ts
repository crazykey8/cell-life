import {StaticImageData} from "next/image";
import {createSlice} from "@reduxjs/toolkit";
import life from '../../icons/life.png'
import dead from '../../icons/dead.png'
import live from '../../icons/live.png'
import React, {createRef} from "react";

export interface ICellCard {
    image: StaticImageData,
    header: string,
    description: string,
    // nodeRef?: any
}

type cellCardState = {
    stats: ICellCard[]
}

const lifeCard: ICellCard = {
    image: life,
    header: 'Жизнь',
    description: 'Ку-ку',
    // nodeRef: createRef()
}

const liveCard: ICellCard = {
    image: live,
    header: 'Живая',
    description: 'И шевелится',
    // nodeRef: createRef()
}

const deadCard: ICellCard = {
    image: dead,
    header: 'Мёртвая',
    description: 'Или прикидывается',
    // nodeRef: createRef()
}

const initialState: cellCardState = {
    stats: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        pushLife(state) {
            let generateNumber = Math.round(Math.random() * 3)

            switch (generateNumber) {
                case 1:
                    state.stats.push(lifeCard)
                    break
                case 2:
                    state.stats.push(liveCard)
                    break
                case 3:
                    state.stats.push(deadCard)
                    break
                default:
                    state.stats
                    break
            }
        },
        removeLife(state) {
            state.stats.pop()
        }
    }
})

export const {
    pushLife,
    removeLife
} = dataSlice.actions

export default dataSlice.reducer
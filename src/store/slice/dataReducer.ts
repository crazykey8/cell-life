import {StaticImageData} from "next/image";
import {createSlice} from "@reduxjs/toolkit";
import life from '../../icons/life.png'
import dead from '../../icons/dead.png'
import live from '../../icons/live.png'

export interface ICellCard {
    image: StaticImageData,
    header: string,
    description: string
}

type cellCardState = {
    stats: ICellCard[]
}

const lifeCard: ICellCard = {
    image: life,
    header: 'Жизнь',
    description: 'Ку-ку',
}

const liveCard: ICellCard = {
    image: live,
    header: 'Живая',
    description: 'И шевелится',
}

const deadCard: ICellCard = {
    image: dead,
    header: 'Мёртвая',
    description: 'Или прикидывается',
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
            state.stats.shift()
        }
    }
})

export const {
    pushLife,
    removeLife
} = dataSlice.actions

export default dataSlice.reducer
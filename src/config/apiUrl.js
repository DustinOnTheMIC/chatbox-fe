const Base = 'https://chatbox-be-6wy4txs74-dustinonthemic.vercel.app'
// const Base = 'http://localhost:3005'


export const ApiUrl = Object.freeze({
    base: Base,
    getUser: `${Base}`,
    getRooms: `${Base}/roomList`,
    login: `${Base}/login`
})
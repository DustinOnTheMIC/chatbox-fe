const Base = 'https://chatbox-be-7yrf0ywqc-dustinonthemic.vercel.app'
// const Base = 'http://localhost:3005'


export const ApiUrl = Object.freeze({
    base: Base,
    getUser: `${Base}`,
    getRooms: `${Base}/roomList`,
    login: `${Base}/login`
})
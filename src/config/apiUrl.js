const Base = 'http://localhost:1234'

export const ApiUrl = Object.freeze({
    base: "http://localhost:1234",
    getUser: `${Base}`,
    getRooms: `${Base}/roomList`,
    login: `${Base}/login`
})
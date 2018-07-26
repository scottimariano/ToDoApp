
export default function userLogin(username) {
  return {
    type: 'USER_LOGIN',
    username,
    gotUser: true
  }
}
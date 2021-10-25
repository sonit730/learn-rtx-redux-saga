# Learn Redux Toolkit - Using Middlware Redux-Saga

# Demo Mini Project - Student Management

## Setup enviroment:

```js
npm install react-router-dom
npm install @types/react-router-dom
// Material UI
npm install @material-ui/core
npm install @mui/material @emotion/react @emotion/styled
// connected-react-router
yarn add connected-react-router
// history version 4.10.1
yarn add history@4.10.1

```

## Divide Pages:

### /login(featues/auth/)

Khi sử dụng redux toolkit thì phải khởi tạo:

- Action
- Reducer
- Selector

Handle CLICK LOGIN:

- Call API to login (fake API delay 3s)
- Success --> redirect ADMIN
- Failed --> show ERROR

authSaga:

- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN:

- Call API to get token + user info
- Set token to local storage
- Redirect to admin page

LOGOUT:

- Clear token from local storage
- Redirect to login page

### /admin:

- root/layout:

## Naviagtion Page

- Sử dụng thư viện connected-react-router
- Sử dụng thư viện history version 4.10.1 để customize lại history của BrowserRouter

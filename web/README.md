# Bicycle-store
Simple web application where user can add add/remove a product to his basket. Build with React, FastAPI. Using SQLite as database. Because it simple example, so no security approach was implemented.

### Task
- [x] SQLite
- [x] Fast API
- [x] React
- [ ] Docker
- [ ] Unit test

## Install
---
### SQLite (On windows)
1. Download `sqlite-dll-win32-x86-3330000.zip` or `sqlite-dll-win64-x64-3330000.zip` and `sqlite-tools-win32-x86-3330000.zip` [here](https://www.sqlite.org/download.html)
2. Extract to C:\sqlite
3. Add C:\sqlite to PATH environment variable 
### Fast api
```
pip install fastapi
pip install uvicorn
```
### Node JS, Yarn
- Download and install node [here](https://nodejs.org/en/download/)

- Install yarn
    ```
    npm i yarn
    cd web
    yarn
    ```
---
## Run
### Run server API
```
cd server/
uvicorn main:app --reload --host localhost --port 8000
```

### Run web
```
cd web/
yarn start
```

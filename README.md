# ecs-dev

## Frontend setup (ReactJS)

### 1. move to project folder

```
cd frontend
```

### 2. install all the dependencies & dev dependencies (one time)

```
npm install
```

### 3. start frontend server

```
npm start
```

## Backend setup (Django)

### 1. move into backend folder

```
cd backend
```

### 2. create python environment (one time)

```
python -m venv .
```

### 3. Copy environment variables (one time)

```sh
cp .env.example .env
# update values accordingly
```

### 4. activate virtual environment

```sh
# for windows --------
Scripts\activate.bat

# for linux ----------
source bin/activate
```

### 5. start django server

```
python manage.py runserver
```

[Database Schema](https://drawsql.app/teams/ecs-dev/diagrams/database-schema)

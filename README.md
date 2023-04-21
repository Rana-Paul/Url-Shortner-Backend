
# SETUP INTO LOCALHOST

1) `git clone https://drive.google.com/drive/folders/1KccjbBd-yECFC003WRdUuZ9hlP3n0tAW?usp=sharing`

2) Open the folder into vscode

3) Go inside of the `api/routes/url` file

4) Edit line no. 47 replace it to ``http://localhost/url/${isExistInDb.url}``

5) Edit line no. 72 replace it to ``http://localhost/url/${sortUrl}``

6) `npm start`

# ROUTES

1) Home: `http://localhost/` (GET)

2) Login: `http://localhost/user/login` (POST)

2) Register: `http://localhost/user/register` (POST)

3) Logout: `http://localhost/user/logout` (GET)

4) Create URL: `http://localhost/url/` (POST)

5) Sort URL to Redirect: `http://localhost/url/<sortURL>` (GET)
 


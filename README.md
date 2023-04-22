
# SETUP INTO LOCALHOST

*** i'm not using `.ev` file in this project because it's a Demo. Project ***

1) `git clone https://github.com/Rana-Paul/Url-Shortner-Backend.git`

2) Open the folder into vscode

3) Run `npm install`

4) Go inside of the `api/routes/url` file

5) Edit line no. 47 replace it to ``http://localhost/url/${isExistInDb.url}``

6) Edit line no. 72 replace it to ``http://localhost/url/${sortUrl}``

7) Run `npm start`

# ROUTES

1) Home: `http://localhost/` (GET)

2) Login: `http://localhost/user/login` (POST)

2) Register: `http://localhost/user/register` (POST)

3) Logout: `http://localhost/user/logout` (GET)

4) Create URL: `http://localhost/url/` (POST)

5) Sort URL to Redirect: `http://localhost/url/<sortURL>` (GET)
 


# Deploying to Render

Steps to deploy this project to Render (free tier):

1. Push this repository to GitHub.
2. Sign in to https://render.com and create a new Web Service.
3. Connect your GitHub repository and select the branch to deploy.
4. Build command: `pip install -r requirements.txt`
5. Start command: `python backend/app.py`
6. Render will set the `PORT` environment variable automatically. The app listens on `0.0.0.0` and reads `PORT`.

Notes:
- The frontend is served by the Flask app from the `frontend` folder.
- Ensure `requirements.txt` lists any new dependencies you add.
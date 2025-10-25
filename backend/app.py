from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS # Import CORS
import os

# Create a new web application
app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Path to the project root and frontend folder
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
FRONTEND_DIR = os.path.join(PROJECT_ROOT, 'frontend')

# Create a specific "address" or "endpoint" for our app called /ask
@app.route("/ask", methods=['POST']) # Allow POST requests
def process_question():
    # Get the JSON data sent from the frontend
    # request.get_json() can return None if the request isn't valid JSON.
    # Accept JSON or form-encoded bodies and guard against None to avoid
    # AttributeError: 'NoneType' object has no attribute 'get'.
    data = request.get_json(silent=True)
    if data is None:
        # Try form data (e.g., when Content-Type is application/x-www-form-urlencoded)
        if request.form:
            data = request.form.to_dict()
        else:
            data = {}

    # Safely extract the question text and coerce to string before lower()
    question_text = str(data.get('question', '')).lower()

    # Our simple "AI" logic
    if "किसान क्रेडिट कार्ड" in question_text:
        response_message = "किसान क्रेडिट कार्ड (केसीसी) एक सरकारी योजना है जो किसानों को रियायती दरों पर ऋण प्रदान करती है।"
    elif "फसल बीमा" in question_text:
        response_message = "प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई) प्राकृतिक आपदाओं से होने वाले फसल नुकसान के खिलाफ किसानों को बीमा कवरेज प्रदान करती है।"
    elif "खाते की जानकारी" in question_text:
        response_message = "अपने खाते की जानकारी के लिए, कृपया अपने बैंक की निकटतम शाखा से संपर्क करें या अपने बैंक का मोबाइल ऐप देखें।"
    else:
        response_message = "माफ़ कीजिए, मुझे यह समझ नहीं आया। कृपया अपना प्रश्न दोबारा पूछें।"

    response_data = {"message": response_message}
    return jsonify(response_data)


# Serve frontend index and static files so root URL shows the website
@app.route('/', methods=['GET'])
def serve_index():
    index_path = os.path.join(FRONTEND_DIR, 'index.html')
    if os.path.exists(index_path):
        return send_from_directory(FRONTEND_DIR, 'index.html')
    return "Index not found", 404


@app.route('/<path:filename>')
def serve_frontend_file(filename):
    # Serve CSS, JS and other frontend assets from the frontend folder
    file_path = os.path.join(FRONTEND_DIR, filename)
    if os.path.exists(file_path):
        return send_from_directory(FRONTEND_DIR, filename)
    return "Not Found", 404

# This part is needed to make the "Run" button work in some editors
if __name__ == "__main__":
    # Bind to 0.0.0.0 to make the dev server reachable from other devices on the LAN.
    # Use PORT environment variable if provided by the host (Render, Heroku, etc.)
    import os
    port = int(os.environ.get('PORT', 5000))
    # Bind to 0.0.0.0 so the service is reachable externally when deployed
    app.run(host='0.0.0.0', port=port, debug=False)
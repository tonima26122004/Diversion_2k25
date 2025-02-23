from flask import Flask, send_file, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
import os

app = Flask(__name__)
CORS(app)  # ✅ Allow requests from frontend

# Ensure 'public' directory exists
os.makedirs("public", exist_ok=True)

# Sample data for Kolkata law violations
kolkata_data = {
    'Percentage': ['30%', '20%', '50%'],
    'Violation Name': ['Violation A', 'Violation B', 'Violation C']
}

@app.route('/download_pie_chart', methods=['GET'])
def download_pie_chart():
    try:
        # Generate the pie chart
        plt.figure(figsize=(8, 6))
        plt.pie(
            [float(p.rstrip('%')) for p in kolkata_data['Percentage']], 
            labels=kolkata_data['Violation Name'], 
            autopct="%1.1f%%", 
            startangle=140
        )
        plt.title("Law Violations in Kolkata (Pie Chart)")

        # Save the pie chart
        chart_path = os.path.join("public", "pie_chart.png")
        plt.savefig(chart_path, format="png", dpi=300, bbox_inches="tight")
        plt.close()

        return send_file(chart_path, mimetype="image/png")

    except Exception as e:
        return jsonify({"error": str(e)}), 500  # ✅ Return error in JSON

if __name__ == "__main__":
    app.run(debug=True)

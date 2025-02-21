from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from transformers import pipeline
from datasets import load_dataset
import soundfile as sf
import torch
import os

app = Flask(__name__)
CORS(app) 
synthesiser = pipeline("text-to-speech", "microsoft/speecht5_tts")
embeddings_dataset = load_dataset("Matthijs/cmu-arctic-xvectors", split="validation")
speaker_embedding = torch.tensor(embeddings_dataset[7306]["xvector"]).unsqueeze(0)

@app.route("/generate-speech", methods=["POST"])
def generate_speech():
    try:
        data = request.get_json()
        text = data.get("text", "").strip()

        if not text:
            return jsonify({"error": "No text provided"}), 400

        speech = synthesiser(text, forward_params={"speaker_embeddings": speaker_embedding})
        output_file = "speech.wav"
        sf.write(output_file, speech["audio"], samplerate=speech["sampling_rate"])

        return send_file(output_file, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

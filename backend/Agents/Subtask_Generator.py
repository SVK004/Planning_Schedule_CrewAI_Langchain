import subprocess

class SubtaskGenerator:
    def __init__(self, model_name="phi"):
        self.model = model_name

    def get_subtasks(self, prompt):
        full_prompt = (
            "You are an assistant that breaks down tasks into subtasks.\n"
            f"Task: {prompt}\n"
            "List the subtasks clearly as bullet points.\n"
        )

        # Use Ollama's CLI to get a response
        result = subprocess.run(
            ["ollama", "run", self.model],
            input=full_prompt.encode(),
            capture_output=True,
            check=True
        )
        generated_text = result.stdout.decode()

        # Extract lines that look like subtasks
        subtasks = [line.strip("- \n") for line in generated_text.split("\n") if line.strip()]
        print(f"Subtasks: {subtasks}")
        return subtasks[1::]

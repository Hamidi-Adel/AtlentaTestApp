FROM python:3.11.9-bullseye


# Upgrade pip
RUN pip install --upgrade pip

# Set the working directory and copy requirements file
WORKDIR /usr/src/app
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app
WORKDIR /app

# Copy and set the entrypoint script
COPY ./entrypoint.sh .
ENTRYPOINT ["sh", "/app/entrypoint.sh"]
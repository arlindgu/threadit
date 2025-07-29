#!/bin/bash

# Thread IT Deployment Script für Raspberry Pi
# Dieses Script automatisiert das Docker-Deployment

set -e  # Exit on any error

# Konfiguration
CONTAINER_NAME="threadit-app"
IMAGE_NAME="threadit"
HOST_PORT=3002
CONTAINER_PORT=3000

echo "🚀 Starte Deployment von Thread IT auf Raspberry Pi..."

# Stoppe und entferne alten Container falls vorhanden
echo "🧹 Bereinige alte Container..."
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stoppe laufenden Container..."
    docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Entferne alten Container..."
    docker rm $CONTAINER_NAME
fi

# Entferne altes Image falls vorhanden
if [ "$(docker images -q $IMAGE_NAME)" ]; then
    echo "Entferne altes Image..."
    docker rmi $IMAGE_NAME
fi

# Baue neues Docker Image
echo "🔨 Baue Docker Image..."
docker build -t $IMAGE_NAME .

# Starte neuen Container
echo "🚀 Starte neuen Container..."
docker run -d \
    --name $CONTAINER_NAME \
    --restart unless-stopped \
    -p $HOST_PORT:$CONTAINER_PORT \
    $IMAGE_NAME

# Warte kurz und prüfe Status
sleep 3

if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "✅ Deployment erfolgreich!"
    echo "📱 Thread IT läuft jetzt auf Port $HOST_PORT"
    echo "🌐 Zugriff über: http://localhost:$HOST_PORT"
    echo "📊 Container Status:"
    docker ps -f name=$CONTAINER_NAME
else
    echo "❌ Deployment fehlgeschlagen!"
    echo "📋 Container Logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi

# Bereinige nicht verwendete Images (optional)
echo "🧹 Bereinige nicht verwendete Docker Images..."
docker image prune -f

echo "🎉 Deployment abgeschlossen!"

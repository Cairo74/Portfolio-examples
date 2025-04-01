#!/bin/bash

# Instalar dependências
npm install --legacy-peer-deps

# Gerar build estático
npm run build

echo "Build concluído! Os arquivos estáticos estão na pasta 'out'"
echo "Você pode hospedar o conteúdo da pasta 'out' em qualquer servidor web" 
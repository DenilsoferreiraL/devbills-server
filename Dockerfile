# Use a imagem base Node para Linux
FROM node:18-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /home/app

# Copia apenas os arquivos de configuração de dependências primeiro (para cache)
COPY package*.json ./

# Instala as dependências usando `npm ci` para instalação consistente
RUN npm ci

# Copia o restante do código do projeto para o contêiner
COPY . .

# Exponha a porta do servidor Node.js
EXPOSE 3333

# Define o comando para iniciar a aplicação
CMD ["npm", "run", "dev"]

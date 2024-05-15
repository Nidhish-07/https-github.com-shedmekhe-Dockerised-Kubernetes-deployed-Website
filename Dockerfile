From node:13-alpine

COPY . .

RUN npm install

CMD ["node", "app.js"]
EXPOSE 3000